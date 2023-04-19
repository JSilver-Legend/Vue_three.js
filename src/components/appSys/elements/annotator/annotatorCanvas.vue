<template>
    <div ref="container" :style="element.style" :class="element.class">
        <canvas ref="scene"></canvas>
    </div>
</template>

<script>
import _ from "lodash"
import paper from 'paper'
import emitter from "@/services/emitter"
import { inject, ref, computed, getCurrentInstance } from "vue"
import { usePlatformSysStore } from '@/store/platformSys'
import { useHelperFunctions } from "@/composables/useHelperFunctions"
import { useUploadcare } from "@/composables/useUploadcare"
import { useXtraDataProvisioning } from "@/composables/useXtraDataProvisioning"
import Heatmap from "@/assets/heatmap/heatmap.js"

export default {
    props: ["element", "entityData", "computedKey", "computedValue"],
    setup(props) {

        const instance = getCurrentInstance();

        const onUpdate = inject('onUpdate')
        const platformSysStore = usePlatformSysStore()
        const { getComputedKey, resolveKeyValue, resolveStaticValueExpression } = useHelperFunctions()
        const { uploadcareStandardFileUpload } = useUploadcare()
        const xtraDataProvisioning = useXtraDataProvisioning()

        const mode = computed(() => props.element.mode) // 'touch',
        const touchTool = computed(() => props.element.touchTool) // 'locatorTool',
        const heatmapData = computed(() => _.get(props.entityData, props.element.heatmapData, null))
        const formattedHeatmapData = ref(null)
        const filteredHeatmapData = ref(null)
        if (heatmapData.value) {
            formattedHeatmapData.value = xtraDataProvisioning.mergeArrays(heatmapData.value)
            console.log('formattedHeatmapData', JSON.parse(JSON.stringify(formattedHeatmapData.value)))
            filteredHeatmapData.value = _.clone(formattedHeatmapData.value)
        }

        const filterObjectsArray = (filterOptions) => {
            filteredHeatmapData.value = xtraDataProvisioning.filterObjectsArray(formattedHeatmapData.value, filterOptions)
            console.log('Filtered heatMap data:', JSON.parse(JSON.stringify(filteredHeatmapData.value)))
            instance.proxy.drawHeatmap(filteredHeatmapData.value, instance.proxy.heatmapScalefactor, instance.proxy.element.heatmapColorConditions)
        }

        const resolveViewObject = (defaultView) => {
            if (_.isObject(defaultView)) {
                return _.mapValues(defaultView, function (item) { return resolveStaticValueExpression(item.toString(), props.entityData) })
            } else return defaultView
        }

        return {
            mode,
            touchTool,
            heatmapData,
            // heatmapScalefactor,
            filteredHeatmapData,
            filterObjectsArray,
            resolveViewObject,
            resolveKeyValue,
            resolveStaticValueExpression,
            getComputedKey,
            platformSysStore,
            uploadcareStandardFileUpload,
            onUpdate
        }
    },
    data() {
        return {
            canvas: null,
            limitEventsToBackgroundBounds: true,
            activeSelection: null,
            activeTool: null,
            selectionTool: null,
            lineTool: null,
            measureTool: null,
            measureLength: 0,
            measureUserValue: 3.76,
            measurePixelsPerUnit: 0,
            measureUnits: 'cm',
            template: null,
            activeView: null,
            scale: null,
            drawings: [],
            _undo: [],
            _redo: [],
            historyNextState: null
        }
    },
    computed: {
        heatmapScalefactor() {
            let resolvedValue = this.resolveStaticValueExpression(this.element.heatmapScalefactor)
            if (!resolvedValue) {
                resolvedValue = this.element.heatmapDefaultfactor || 0.5
            }
            return resolvedValue
        },
        _id() {
            return _.get(this.entityData, '_id', null)
        },
        /*  _c_defaultView() {
             return _.get(this.element, 'defaultView.value', null)
         },
         _c_defaultViewDetail() {
             return _.get(this.element, 'defaultView', null)
         }, */
        _c_activeView() {
            return _.get(this.computedValue, 'activeView.value', null)
        },
        _c_activeViewDetail() {
            return this.resolveViewObject(_.get(this.computedValue, 'activeView', null))
        },
        _c_activeTool() {
            return this.computedValue?.activeTool?.value ? this.computedValue.activeTool.value : 'selectionTool'
        },
        _c_undo() {
            return this.computedValue?.undo
        },
        _c_redo() {
            return this.computedValue?.redo
        },
        _c_exportImage() {
            return this.computedValue?._EXPORT_IMAGE_
        },
        _c_clearCanvas() {
            return this.computedValue?._CLEAR_CANVAS_
        },
        _c_setBackgroundImage() {
            return this.computedValue?._SET_BACKGROUND_EVENT_FLAG_
        },
        _c_fitToScreen() {
            return this.computedValue?.fitToScreen
        },
        _c_deleteMeasure() {
            return this.computedValue?.deleteMeasure
        },
        _c_lockMeasure() {
            return this.computedValue?.lockMeasure
        },
        _c_maxResolution() {
            return this.computedValue?.maxResolution
        },
        _c_visibilityBGimage() {
            return this.computedValue?.visibilityBGimage
        },
        _c_scaleValue() {
            return _.get(this.computedValue, `${this._c_activeView}.scale.value`, null)
        },
        _c_scaleUnit() {
            return _.get(this.computedValue, `${this._c_activeView}.scale.unit`, null)
        }
    },
    watch: {
        async heatmapScalefactor() {
            await this.drawHeatmap(this.filteredHeatmapData, this.heatmapScalefactor, this.element.heatmapColorConditions)
        },
        _id(value) {
            if (value) {
                console.log('annotator canvas | _id')
                if (!this._c_activeView && this.element.defaultView) {
                    console.log('annotator canvas: init() - set default view')
                    this.onUpdate({ key: `${this.computedKey}.activeView`, value: this.element.defaultView, autoSave: this.element.autoSave })
                } else {
                    this.init({ zoom: this.element.zoom !== undefined ? this.element.zoom : true, pan: this.element.pan !== undefined ? this.element.pan : true, defaultView: this.element.defaultView })
                }
                // this.init({ zoom: true, pan: true })
            }
        },
        _c_scaleValue(value) {
            console.log('watch _c_scaleValue')
            if (value)
                this.updateScaleLength(value, this.scale)
        },
        _c_scaleUnit() {
            console.log('watch _c_scaleValue')
        },
        _c_activeViewDetail() {
            console.log('watch _c_activeView')
            this.init({ zoom: this.element.zoom !== undefined ? this.element.zoom : true, pan: this.element.pan !== undefined ? this.element.pan : true })
        },
        _c_activeTool(value) {
            console.log('watch _c_activeTool')
            if (value)
                this.activateTool(value)
        },
        _c_undo() {
            console.log('watch _c_undo')
            this.undo()
        },
        _c_redo() {
            console.log('watch _c_redo')
            this.redo()
        },
        _c_fitToScreen() {
            console.log('watch _c_fitToScreen')
            this.fitToScreen()
        },
        _c_exportImage() {
            console.log('watch _c_exportImage')
            this.exportImage()
        },
        _c_setBackgroundImage(value) {
            // const bgImage1 = this.resolveKeyValue({ key: value.bgImage1, entityData: this.entityData }) ? { src: this.resolveKeyValue({ key: value.bgImage1, entityData: this.entityData }) + _.get(value, 'bgImage1UrlParameter', '') } : null
            // const bgImage2 = this.resolveKeyValue({ key: value.bgImage2, entityData: this.entityData }) ? { src: this.resolveKeyValue({ key: value.bgImage2, entityData: this.entityData }) + _.get(value, 'bgImage2UrlParameter', '') } : null
            const bgImage1 = value.bgImage1 ? { src: value.bgImage1 + _.get(value, 'bgImage1UrlParameter', '') } : null
            const bgImage2 = value.bgImage2 ? { src: value.bgImage2 + _.get(value, 'bgImage1UrlParameter', '') } : null
            this.setBackground(bgImage1, bgImage2)
        },
        _c_deleteMeasure(value) {
            console.log('watch _c_deleteMeasure')
            if (value != -1 && this.drawings.length) {
                console.log('_c_deleteMeasure', value)
                this.removeDrawing(this.drawings[value])
                let tempValue = _.clone(this.computedValue)
                let tempMeasures = _.get(tempValue, `${this._c_activeView}.measures`)
                tempMeasures.splice(value, 1)
                _.set(tempValue, `${this._c_activeView}.measures`, tempMeasures)
                tempValue['deleteMeasure'] = -1
                this.$emit('return', tempValue)
            }
        },
        _c_clearCanvas() {
            console.log('watch _c_clearCanvas')
            // this.removeDrawing(this.drawings)
            this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: [], autoSave: this.element.autoSave })
            this.setView(this._c_activeView, true, true)

        },
        _c_lockMeasure(value) {
            console.log('watch _c_lockMeasure')

            if (value != -1) {
                if (value == 'scale') {
                    // lock scale from here
                    console.log('_c_lockMeasure', value)
                    this.setLocked(this.scale)
                    let tempValue = _.clone(this.computedValue)
                    _.set(tempValue, `${this._c_activeView}.scale.measure.locked`, !_.get(tempValue, `${this._c_activeView}.scale.measure.locked`))
                    tempValue['lockMeasure'] = -1
                    this.$emit('return', tempValue)
                }
                else if (this.drawings.length) {
                    console.log('_c_lockMeasure', value)
                    this.setLocked(this.drawings[value])
                    let tempValue = _.clone(this.computedValue)
                    _.set(tempValue, `${this._c_activeView}.measures[${value}].locked`, !_.get(tempValue, `${this._c_activeView}.measures[${value}].locked`))
                    tempValue['lockMeasure'] = -1
                    this.$emit('return', tempValue)
                }
            }
        },
        _c_maxResolution(value) {
            if (value) {
                // const bgImage1 = this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage1, entityData: this.entityData }) ? { src: this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage1, entityData: this.entityData }) } : null 
                // const bgImage2 = this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage2, entityData: this.entityData }) ? { src: this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage2, entityData: this.entityData }) } : null
                const bgImage1 = this._c_activeViewDetail.bgImage1 ? { src: this._c_activeViewDetail.bgImage1 } : null
                const bgImage2 = this._c_activeViewDetail.bgImage2 ? { src: this._c_activeViewDetail.bgImage2 } : null
                this.setBackground(bgImage1, bgImage2)
            } else {
                // const bgImage1 = this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage1, entityData: this.entityData }) ? { src: this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage1, entityData: this.entityData }) + _.get(this.computedValue, 'activeView.bgImage1UrlParameter', '') } : null
                // const bgImage2 = this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage2, entityData: this.entityData }) ? { src: this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage2, entityData: this.entityData }) + _.get(this.computedValue, 'activeView.bgImage1UrlParameter', '') } : null
                const bgImage1 = this._c_activeViewDetail.bgImage1 ? { src: this._c_activeViewDetail.bgImage1 + _.get(this.computedValue, 'activeView.bgImage1UrlParameter', '') } : null
                const bgImage2 = this._c_activeViewDetail.bgImage2 ? { src: this._c_activeViewDetail.bgImage2 + _.get(this.computedValue, 'activeView.bgImage2UrlParameter', '') } : null
                this.setBackground(bgImage1, bgImage2)
            }
        },
        _c_visibilityBGimage() {
            this.toggleImageVisibilityTesting()
        }
    },
    methods: {
        loadTemplate: function (template) {
            this.template = template
            this.canvas.project.clear()
            return this
        },
        _getViewAsJson: function (index) {
            let currentView = _.get(this.template, index)
            if (!currentView) return
            let view = Object.assign({}, currentView)
            let image = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'bg-image-1' || (child.data || {}).type === 'bg-image-2')
            if (image && image.loaded) {
                view.imageLeft = this.canvas.project.activeLayer.firstChild.position.x
                view.imageTop = this.canvas.project.activeLayer.firstChild.position.y
                view.referenceImageSize = [this.canvas.project.activeLayer.firstChild.bounds.size.width,
                this.canvas.project.activeLayer.firstChild.bounds.size.height,
                ]
            }

            view.measures = []
            this.canvas.project.activeLayer.children.forEach(child => {
                if (child.data && child.data.type === 'scale' && view.scale) {
                    console.log('child.data', child.data)
                    view.scale.measure = Object.assign({}, child.data)
                    view.scale.measure.tool = child.data.type
                    view.scale.measure.startPoint = [child.firstSegment.point.x, child.firstSegment.point.y]
                    view.scale.measure.endPoint = [child.lastSegment.point.x, child.lastSegment.point.y]
                    delete view.scale.measure.type
                }
                if (child.data && child.data.type === 'line') {
                    let measure = Object.assign({}, child.data)
                    measure.tool = child.data.type
                    measure.length = Math.round((child.length * this.measurePixelsPerUnit) * 100 + Number.EPSILON) / 100
                    measure.startPoint = [child.firstSegment.point.x, child.firstSegment.point.y]
                    measure.endPoint = [child.lastSegment.point.x, child.lastSegment.point.y]
                    delete measure.type
                    view.measures.push(measure)
                }
                if (child.data && child.data.type === 'angle') {
                    let segments = []
                    child.segments.forEach(segment => {
                        segments.push([segment.point.x, segment.point.y])
                    })
                    let measure = Object.assign({}, child.data)
                    measure.tool = child.data.type
                    measure.length = Math.round((child.length * this.measurePixelsPerUnit) * 100 + Number.EPSILON) / 100
                    measure.segments = segments
                    delete measure.type
                    view.measures.push(measure)
                }
                if (child.data && child.data.type === 'freehand') {
                    let segments = []
                    child.segments.forEach(segment => {
                        segments.push(segment._serialize())
                    })
                    let measure = Object.assign({}, child.data)
                    measure.tool = child.data.type
                    measure.segments = segments
                    delete measure.type
                    view.measures.push(measure)
                }
                if (child.data && child.data.type === 'measurePolygon') {
                    let segments = []
                    child.segments.forEach(segment => {
                        segments.push([segment.point.x, segment.point.y])
                    })
                    let measure = Object.assign({}, child.data)
                    measure.tool = child.data.type
                    measure.segments = segments
                    measure.area = child.realArea
                    delete measure.type
                    view.measures.push(measure)
                }
                if (child.data && child.data.type === 'polygon') {
                    let segments = []
                    child.segments.forEach(segment => {
                        segments.push([segment.point.x, segment.point.y])
                    })
                    let measure = Object.assign({}, child.data)
                    measure.tool = child.data.type
                    measure.segments = segments
                    delete measure.type
                    view.measures.push(measure)
                }
                if (child.data && child.data.type === 'rectangle') {
                    let segments = []
                    child.segments.forEach(segment => {
                        segments.push([segment.point.x, segment.point.y])
                    })
                    let measure = Object.assign({}, child.data)
                    measure.tool = child.data.type
                    measure.segments = segments
                    if (measure.selected) delete measure.selected
                    if (child === this.activeSelection) measure.selected = true
                    if (measure.fixedStrokeWidth) {
                        measure.strokeWidth = measure.fixedStrokeWidth
                        delete measure.fixedStrokeWidth
                    }
                    delete measure.type
                    view.measures.push(measure)
                }
                if (child.data && child.data.type === 'circle') {
                    let segments = []
                    child.segments.forEach(segment => {
                        segments.push(segment._serialize())
                    })
                    let measure = Object.assign({}, child.data)
                    measure.tool = child.data.type
                    measure.segments = segments
                    if (measure.selected) delete measure.selected
                    if (child === this.activeSelection) measure.selected = true
                    if (measure.fixedStrokeWidth) {
                        measure.strokeWidth = measure.fixedStrokeWidth
                        delete measure.fixedStrokeWidth
                    }
                    delete measure.type
                    view.measures.push(measure)
                }
                if (child.data && child.data.type === 'dotCircle') {
                    let segments = []
                    child.segments.forEach(segment => {
                        segments.push(segment._serialize())
                    })
                    let measure = Object.assign({}, child.data)
                    measure.tool = child.data.type
                    measure.segments = segments
                    if (measure.selected) delete measure.selected
                    if (child === this.activeSelection) measure.selected = true
                    if (measure.fixedStrokeWidth) {
                        measure.strokeWidth = measure.fixedStrokeWidth
                        delete measure.fixedStrokeWidth
                    }
                    delete measure.type
                    view.measures.push(measure)
                }
                if (child.data && child.data.type === 'locator') {
                    let segments = []
                    child.segments.forEach(segment => {
                        segments.push(segment._serialize())
                    })
                    let measure = Object.assign({}, child.data)
                    measure.tool = child.data.type
                    measure.segments = segments
                    if (measure.selected) delete measure.selected
                    if (child === this.activeSelection) measure.selected = true
                    if (measure.fixedStrokeWidth) {
                        measure.strokeWidth = measure.fixedStrokeWidth
                        delete measure.fixedStrokeWidth
                    }
                    delete measure.type
                    view.measures.push(measure)
                }
            })
            return view
        },
        _saveView: function () {


            if (_.get(this.template, this._c_activeView) && this.canvas.project && this.canvas.project.activeLayer && this.canvas.project.activeLayer.firstChild) {

                console.log(' _save view test here... ')
                let image = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'bg-image-1' || (child.data || {}).type === 'bg-image-2')
                if (image && image.loaded) {
                    const references = {
                        imageLeft: this.canvas.project.activeLayer.firstChild.position.x,
                        imageTop: this.canvas.project.activeLayer.firstChild.position.y,
                        referenceImageSize: [this.canvas.project.activeLayer.firstChild.bounds.size.width, this.canvas.project.activeLayer.firstChild.bounds.size.height]
                    }
                    _.set(this.template, `${this._c_activeView}.imageLeft`, references.imageLeft)
                    _.set(this.template, `${this._c_activeView}.imageTop`, references.imageTop)
                    _.set(this.template, `${this._c_activeView}.referenceImageSize`, references.referenceImageSize)
                    this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.references`, value: references, autoSave: this.element.autoSave })
                }
                _.set(this.template, `${this._c_activeView}.measures`, [])
                this.canvas.project.activeLayer.children.forEach(child => {
                    if (child.data && child.data.type === 'scale' && _.get(this.template, `${this._c_activeView}.scale`)) {
                        _.set(this.template, `${this._c_activeView}.scale.measure`, Object.assign({}, child.data))
                        _.set(this.template, `${this._c_activeView}.scale.measure.tool`, child.data.type)
                        _.set(this.template, `${this._c_activeView}.scale.measure.startPoint`, [child.firstSegment.point.x, child.firstSegment.point.y])
                        _.set(this.template, `${this._c_activeView}.scale.measure.endPoint`, [child.lastSegment.point.x, child.lastSegment.point.y])
                        _.set(this.template, `${this._c_activeView}.scale.measure.type`, null)
                        // delete this.template[this._c_activeView].scale.measure.type <- have to do later
                    }
                })
                this.canvas.project.activeLayer.children.forEach(child => {
                    if (child.data && child.data.type === 'line') {
                        let measure = Object.assign({}, child.data)
                        measure.tool = child.data.type
                        measure.length = Math.round((child.length * this.measurePixelsPerUnit) * 100 + Number.EPSILON) / 100
                        measure.startPoint = [child.firstSegment.point.x, child.firstSegment.point.y]
                        measure.endPoint = [child.lastSegment.point.x, child.lastSegment.point.y]
                        delete measure.type
                        let tempMeasures = _.get(this.template, `${this._c_activeView}.measures`, [])
                        tempMeasures.push(measure)
                        _.set(this.template, `${this._c_activeView}.measures`, tempMeasures)
                    }
                    if (child.data && child.data.type === 'angle') {
                        let segments = []
                        child.segments.forEach(segment => {
                            segments.push([segment.point.x, segment.point.y])
                        })
                        let measure = Object.assign({}, child.data)
                        measure.tool = child.data.type
                        measure.length = Math.round((child.length * this.measurePixelsPerUnit) * 100 + Number.EPSILON) / 100
                        measure.segments = segments
                        delete measure.type
                        let tempMeasures = _.get(this.template, `${this._c_activeView}.measures`, [])
                        tempMeasures.push(measure)
                        _.set(this.template, `${this._c_activeView}.measures`, tempMeasures)
                    }
                    if (child.data && child.data.type === 'freehand') {
                        let segments = []
                        child.segments.forEach(segment => {
                            segments.push(segment._serialize())
                        })
                        let measure = Object.assign({}, child.data)
                        measure.tool = child.data.type
                        measure.segments = segments
                        delete measure.type
                        let tempMeasures = _.get(this.template, `${this._c_activeView}.measures`, [])
                        tempMeasures.push(measure)
                        _.set(this.template, `${this._c_activeView}.measures`, tempMeasures)
                    }
                    if (child.data && child.data.type === 'measurePolygon') {
                        let segments = []
                        child.segments.forEach(segment => {
                            segments.push([segment.point.x, segment.point.y])
                        })
                        let measure = Object.assign({}, child.data)
                        measure.tool = child.data.type
                        measure.segments = segments
                        measure.area = child.realArea
                        delete measure.type
                        let tempMeasures = _.get(this.template, `${this._c_activeView}.measures`, [])
                        tempMeasures.push(measure)
                        _.set(this.template, `${this._c_activeView}.measures`, tempMeasures)
                    }
                    if (child.data && child.data.type === 'polygon') {
                        let segments = []
                        child.segments.forEach(segment => {
                            segments.push([segment.point.x, segment.point.y])
                        })
                        let measure = Object.assign({}, child.data)
                        measure.tool = child.data.type
                        measure.segments = segments
                        delete measure.type
                        let tempMeasures = _.get(this.template, `${this._c_activeView}.measures`, [])
                        tempMeasures.push(measure)
                        _.set(this.template, `${this._c_activeView}.measures`, tempMeasures)
                    }
                    if (child.data && child.data.type === 'rectangle') {
                        let segments = []
                        child.segments.forEach(segment => {
                            segments.push([segment.point.x, segment.point.y])
                        })
                        let measure = Object.assign({}, child.data)
                        measure.tool = child.data.type
                        measure.segments = segments
                        if (measure.selected) delete measure.selected
                        if (child === this.activeSelection) measure.selected = true
                        if (measure.fixedStrokeWidth) {
                            measure.strokeWidth = measure.fixedStrokeWidth
                            delete measure.fixedStrokeWidth
                        }
                        delete measure.type
                        let tempMeasures = _.get(this.template, `${this._c_activeView}.measures`, [])
                        tempMeasures.push(measure)
                        _.set(this.template, `${this._c_activeView}.measures`, tempMeasures)
                    }
                    if (child.data && child.data.type === 'circle') {
                        let segments = []
                        child.segments.forEach(segment => {
                            segments.push(segment._serialize())
                        })
                        let measure = Object.assign({}, child.data)
                        measure.tool = child.data.type
                        measure.segments = segments
                        if (measure.selected) delete measure.selected
                        if (child === this.activeSelection) measure.selected = true
                        if (measure.fixedStrokeWidth) {
                            measure.strokeWidth = measure.fixedStrokeWidth
                            delete measure.fixedStrokeWidth
                        }
                        delete measure.type
                        let tempMeasures = _.get(this.template, `${this._c_activeView}.measures`, [])
                        tempMeasures.push(measure)
                        _.set(this.template, `${this._c_activeView}.measures`, tempMeasures)
                    }
                    if (child.data && child.data.type === 'dotCircle') {
                        let segments = []
                        child.segments.forEach(segment => {
                            segments.push(segment._serialize())
                        })
                        let measure = Object.assign({}, child.data)
                        measure.tool = child.data.type
                        measure.segments = segments
                        if (measure.selected) delete measure.selected
                        if (child === this.activeSelection) measure.selected = true
                        if (measure.fixedStrokeWidth) {
                            measure.strokeWidth = measure.fixedStrokeWidth
                            delete measure.fixedStrokeWidth
                        }
                        delete measure.type
                        let tempMeasures = _.get(this.template, `${this._c_activeView}.measures`, [])
                        tempMeasures.push(measure)
                        _.set(this.template, `${this._c_activeView}.measures`, tempMeasures)
                    }
                    if (child.data && child.data.type === 'locator') {
                        let segments = []
                        child.segments.forEach(segment => {
                            segments.push(segment._serialize())
                        })
                        let measure = Object.assign({}, child.data)
                        measure.tool = child.data.type
                        measure.segments = segments
                        if (measure.selected) delete measure.selected
                        if (child === this.activeSelection) measure.selected = true
                        if (measure.fixedStrokeWidth) {
                            measure.strokeWidth = measure.fixedStrokeWidth
                            delete measure.fixedStrokeWidth
                        }
                        delete measure.type
                        let tempMeasures = _.get(this.template, `${this._c_activeView}.measures`, [])
                        tempMeasures.push(measure)
                        _.set(this.template, `${this._c_activeView}.measures`, tempMeasures)
                    }
                })

            }
        },
        _loadView: function (view, ignoreBgImage) {

            if (!view.scale || !view.scale.value) {
                view.scale = {
                    "value": 5,
                    "unit": "cm",
                }
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.scale`, value: view.scale, autoSave: this.element.autoSave })
            }
            if (!view.measures) {
                view.measures = []
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: [], autoSave: this.element.autoSave })
            }

            this.measureUserValue = Number(view.scale.value)
            this.measureUnits = view.scale.unit
            if (!ignoreBgImage) {
                let bgImage = new paper.Raster({
                    // source: view.file_part.originalUrl + (this._c_maxResolution ? '' : this.element.displayImageUrlParameter),
                    position: [view.imageLeft ? view.imageLeft : 0, view.imageTop ? view.imageTop : 0],
                    crossOrigin: 'anonymous',
                    locked: true,
                    data: { type: 'bg-image-1' }
                })
                bgImage.on('load', () => {
                    this.setBoundsPathLimit(bgImage)
                })
            }
            if (!ignoreBgImage) {
                new paper.Raster({
                    // source: view.file_ruler.originalUrl + (this._c_maxResolution ? '' : this.element.displayImageUrlParameter),
                    position: [view.imageLeft ? view.imageLeft : 0, view.imageTop ? view.imageTop : 0],
                    crossOrigin: 'anonymous',
                    locked: true,
                    data: { type: 'bg-image-2' }
                })
            }
            if (view.scale.measure) {
                let measureData = Object.assign({}, view.scale.measure)
                measureData.type = measureData.tool
                delete measureData.tool
                delete measureData.startPoint
                delete measureData.endPoint

                let path = new paper.Path({
                    segments: [view.scale.measure.startPoint, view.scale.measure.endPoint],
                    locked: view.scale.measure.locked,
                    strokeColor: '#2AFE48',
                    data: measureData
                })

                this.measureLength = path.length
                this.setPixelsPerUnit()
            }
            // if (view.measures) {
            view.measures.forEach(measure => {
                let measureData = Object.assign({}, measure)
                measureData.type = measureData.tool
                delete measureData.tool
                delete measureData.startPoint
                delete measureData.endPoint
                delete measureData.segments
                if (measure.tool === 'line') {
                    let path = new paper.Path({
                        segments: [measure.startPoint, measure.endPoint],
                        locked: measure.locked,
                        strokeColor: '#FC17DB',
                        data: measureData
                    })
                }
                if (measure.tool === 'angle') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        locked: measure.locked,
                        strokeColor: '#86a3f0',
                        data: measureData
                    })
                }
                if (measure.tool === 'freehand') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        locked: measure.locked,
                        strokeColor: measure.strokeColor || '#000',
                        data: measureData
                    })
                }
                if (measure.tool === 'measurePolygon') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        closed: true,
                        locked: measure.locked,
                        fillColor: measure.fillColor || 'rgba(0,0,0,0.001)',
                        strokeColor: measure.strokeColor || '#000',
                        opacity: measure.opacity || 1,
                        data: measureData
                    })
                }
                if (measure.tool === 'polygon') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        closed: true,
                        locked: measure.locked,
                        fillColor: measure.fillColor || 'rgba(0,0,0,0.001)',
                        strokeColor: measure.strokeColor || '#000',
                        opacity: measure.opacity || 1,
                        data: measureData
                    })
                }
                if (measure.tool === 'rectangle') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        closed: true,
                        locked: measure.locked,
                        fillColor: measure.fillColor || 'rgba(0,0,0,0.001)',
                        opacity: measure.opacity || 1,
                        strokeColor: measure.strokeColor || '#000',
                        strokeWidth: measure.strokeWidth || 1,
                        data: measureData
                    })
                }
                if (measure.tool === 'circle') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        locked: measure.locked,
                        closed: true,
                        fillColor: measure.fillColor || 'rgba(0,0,0,0.001)',
                        opacity: measure.opacity || 1,
                        strokeColor: measure.strokeColor || '#000',
                        strokeWidth: measure.strokeWidth || 1,
                        data: measureData
                    })
                }
                if (measure.tool === 'dotCircle') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        locked: measure.locked,
                        closed: true,
                        radius: measure.radius || 50,
                        fillColor: measure.fillColor || 'rgba(0,0,0,0.001)',
                        opacity: measure.opacity || 1,
                        strokeColor: measure.strokeColor || '#000',
                        strokeWidth: measure.strokeWidth || 1,
                        dashArray: measure.dashArray || [60, 30],
                        content: measure.content || 'tool',
                        data: measureData
                    })
                    this.createDotCircleText(path)
                }
                if (measure.tool === 'locator') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        locked: measure.locked,
                        closed: true,
                        radius: measure.radius || 50,
                        fillColor: 'rgba(0,0,0,0.001)',
                        opacity: measure.opacity || 1,
                        strokeColor: 'rgba(0,0,0,0.001)',
                        strokeWidth: 1,
                        content: measure.content || 'tool',
                        data: measureData
                    })
                    this.createLocatorStyling(path)
                }
            })
            // }

        },
        setView: function (index, ignoreBgImage, ignoreSave) {

            if (!this.template || !_.get(this.template, index)) {
                return this
            }
            if (!ignoreSave) this._saveView(true)
            let bgImages = 0
            this.canvas.project.activeLayer.children.forEach(child => {
                if (child.data && (child.data.type === 'bg-image-1' || child.data.type === 'bg-image-2')) {
                    bgImages = bgImages + 1
                }
            })
            this.canvas.project.activeLayer.removeChildren(bgImages)
            this._loadView(_.get(this.template, this._c_activeView), ignoreBgImage)
            this.scale = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'scale')
            this.updateDrawings()
            if (this.scale) {
                this.createPathHandles(this.scale)
                this.updateDrawingRealLength(this.scale, true)
            }

            this.drawings.forEach(drawing => {
                if (drawing.data.type === 'line') {
                    this.createPathHandles(drawing, true)
                }
                if (drawing.data.type === 'angle') {
                    this.createAngleHandles(drawing)
                }
                if (drawing.data.type === 'measurePolygon') {
                    this.createPolygonHandles(drawing)
                    this.updateDrawingRealArea(drawing)
                }
                if (drawing.data.type === 'polygon') {
                    this.createPolygonHandles(drawing)
                }
                this.updateDrawingRealLength(drawing)
            })
            this.fitToScreen()
            this._undo = []
            this._redo = []
            this.historyNextState = null
            this.snapshot()
            return this
        },
        fitToScreen: function () {
            this.canvas.view.update()
            let fit = () => {
                let offset = { x: Number(this._c_activeViewDetail.panXfromCenter || 0), y: Number(this._c_activeViewDetail.panYfromCenter || 0), scale: Number(this._c_activeViewDetail.zoomFactor || 1) }
                let viewBounds = this.canvas.view.bounds
                let image = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'bg-image-1' || (child.data || {}).type === 'bg-image-2')
                let layerBounds = this.canvas.project.activeLayer.firstChild.bounds
                if (layerBounds.width > 0 && image && image.loaded) {
                    let externalScale = offset && offset.scale || 1
                    let scaleRatio = Math.min(
                        viewBounds.width / layerBounds.width,
                        viewBounds.height / layerBounds.height
                    ) * externalScale;
                    this.canvas.view.translate(
                        viewBounds.center.subtract(layerBounds.center.subtract(new paper.Point(offset && offset.x || 0, offset && -offset.y || 0)))
                    );
                    this.canvas.view.scale(scaleRatio)
                }
                this.updateThickness()
            }

            if (this.canvas.project.activeLayer.firstChild) {
                if (this.canvas.project.activeLayer.firstChild._loaded) {
                    fit()
                } else {
                    this.canvas.project.activeLayer.firstChild.onLoad = () => {
                        fit()
                    };
                }
            }

            return this
        },
        initZoom: function (options) {
            let minZoom = 0.1
            let maxZoom = 5
            let onPointerDown = {
                zoomDistanceStart: null,
                zoomDistanceEnd: null
            }
            if (!this.$refs.container) throw new Error('No canvas container element')
            this.$refs.container.addEventListener('wheel', (event) => {
                event.preventDefault()
                event.stopImmediatePropagation()
                if ('zoom' in options && !options.zoom) return
                if (!this.canvas) return
                let zoomFactor = 1.1
                let oldZoom = this.canvas.view.zoom
                let oldCenter = this.canvas.view.center
                let mousePosition = this.canvas.view.viewToProject(new paper.Point(event.offsetX, event.offsetY))
                let step = Math.abs(event.deltaY) > 30 ? event.deltaY < 0 ?
                    oldZoom - (oldZoom * zoomFactor) :
                    oldZoom - (oldZoom / zoomFactor) : event.deltaY * 0.01
                let zoomValue = this.canvas.view.zoom - step
                this.canvas.view.zoom = Math.max(minZoom, Math.min(zoomValue, maxZoom))
                this.updateThickness()
                this.canvas.view.center = this.canvas.view.center.add(mousePosition.subtract(oldCenter).multiply(1 - (oldZoom / this.canvas.view.zoom)))
            })
            this.$refs.container.addEventListener('touchstart', (event) => {
                if (event.touches.length == 2) {
                    let dx = event.touches[0].pageX - event.touches[1].pageX;
                    let dy = event.touches[0].pageY - event.touches[1].pageY;
                    onPointerDown.zoomDistanceEnd = onPointerDown.zoomDistanceStart = Math.sqrt(
                        dx * dx + dy * dy
                    )
                }
            })
            this.$refs.container.addEventListener('touchmove', (event) => {
                if (event.touches.length == 2) {
                    let dx = event.touches[0].pageX - event.touches[1].pageX
                    let dy = event.touches[0].pageY - event.touches[1].pageY
                    onPointerDown.zoomDistanceEnd = Math.sqrt(dx * dx + dy * dy)
                    let factor =
                        onPointerDown.zoomDistanceStart / onPointerDown.zoomDistanceEnd
                    onPointerDown.zoomDistanceStart = onPointerDown.zoomDistanceEnd
                    paper.paperScope.view.zoom = Math.max(minZoom, Math.min(paper.paperScope.view.zoom / factor, maxZoom))
                    this.updateThickness()
                    paper.paperScope.view._needsUpdate = true
                    paper.paperScope.view.update()
                }
            })
            this.$refs.container.addEventListener('touchend', () => {
                onPointerDown.zoomDistanceStart = onPointerDown.zoomDistanceEnd = 0
            })
            return this
        },
        updateThickness: function () {
            this.canvas.project.activeLayer.children.forEach(child => {
                if (child.data && (child.data.type === 'scale' || child.data.type === 'line' || child.data.type === 'measurePolygon' || child.data.type === 'polygon' || child.data.type === 'handle' || child.data.type === 'angle' || child.data.type === 'freehand' || child.data.type === 'rectangle' || child.data.type === 'circle' || child.data.type === 'dotCircle' || child.data.type === 'locator')) {
                    if (child.data.type === 'rectangle' || child.data.type === 'circle' || child.data.type === 'dotCircle' || child.data.type === 'locator') {
                        if (!child.data.fixedStrokeWidth) child.data.fixedStrokeWidth = child.strokeWidth
                        child.strokeWidth = child.data.fixedStrokeWidth / this.canvas.view.zoom
                    } else {
                        child.strokeWidth = 1 / this.canvas.view.zoom
                    }
                    if (child._text && child.data.type === 'angle') {
                        child._text.fontSize = 16 * (1 / this.canvas.view.zoom)
                        this.updateAngleText(child)
                    }
                    if (child._text && (child.data.type === 'line' || child.data.type === 'scale' || child.data.type === 'dotCircle' || child.data.type === 'locator')) {
                        child._text.fontSize = 16 * (1 / this.canvas.view.zoom)
                        this.updatePathText(child)
                    }
                    if (child._text && (child.data.type === 'measurePolygon' || child.data.type === 'polygon')) {
                        child._text.fontSize = 16 * (1 / this.canvas.view.zoom)
                        this.updatePolygonText(child)
                    }
                }
                if (child.data && child.data.type === 'handle') {
                    child.scale(10 / (child.bounds.width * this.canvas.view.zoom))
                    child.strokeWidth = 1 / this.canvas.view.zoom
                }
            })
        },
        getResizeHandles: function () {
            return [{
                name: 'topLeft',
                opposite: 'bottomRight',
                cursor: 'nw-resize'
            },
            {
                name: 'topRight',
                opposite: 'bottomLeft',
                cursor: 'ne-resize'
            },
            {
                name: 'bottomRight',
                opposite: 'topLeft',
                cursor: 'se-resize'
            },
            {
                name: 'bottomLeft',
                opposite: 'topRight',
                cursor: 'sw-resize'
            },
            {
                name: 'leftCenter',
                opposite: 'rightCenter',
                cursor: 'w-resize'
            },
            {
                name: 'topCenter',
                opposite: 'bottomCenter',
                cursor: 'n-resize'
            },
            {
                name: 'rightCenter',
                opposite: 'leftCenter',
                cursor: 'e-resize'
            },
            {
                name: 'bottomCenter',
                opposite: 'topCenter',
                cursor: 's-resize'
            }
            ]
        },
        createResizeHandles: function (drawing) {
            this.removeResizeHandles(this.activeSelection || drawing)
            drawing.onMouseEnter = () => {
                if (this.$refs.container) this.$refs.container.style.cursor = 'grab'
            }
            drawing.onMouseUp = () => {
                if (this.$refs.container) this.$refs.container.style.cursor = 'grab'
            }
            drawing.onMouseDrag = () => {
                if (this.$refs.container) this.$refs.container.style.cursor = 'grabbing'
            }
            drawing.onMouseLeave = () => {
                if (this.$refs.container) this.$refs.container.style.cursor = 'default'
            }
            drawing.mouseDragEvent = (event, absolute) => {
                drawing.position = absolute ? event.point : drawing.position.add(event.delta)
                this.updateResizeHandles(drawing)
                if (drawing.data.type === 'dotCircle') this.updateDotCircleText(drawing)
                if (drawing.data.type === 'locator') this.updateLocatorStyling(drawing)
            }
            const disableResize = 'resize' in drawing.data && !drawing.data.resize
            const handleRadius = 5
            const handles = this.getResizeHandles()
            drawing._handles = []
            if (drawing.data.type === 'locator') return
            handles.forEach(handle => {
                let handleEl = new paper.Path.Circle({
                    center: drawing.bounds[handle.name],
                    radius: handleRadius / this.canvas.view.zoom,
                    fillColor: 'rgb(10,106,192)',
                    strokeColor: 'rgb(255,255,255)',
                    strokeWidth: 1 / this.canvas.view.zoom,
                    ref: drawing,
                    locked: disableResize,
                    data: {
                        type: 'handle'
                    }
                })
                handleEl.onMouseEnter = () => {
                    this.$refs.container.style.cursor = handle.cursor
                }
                handleEl.onMouseLeave = () => {
                    this.$refs.container.style.cursor = 'default'
                }
                handleEl.mouseDragEvent = (event) => {
                    let isDotCircle = drawing.data.type === 'dotCircle' // only allow resizing same aspect ratio
                    let xHandles = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft', 'leftCenter', 'rightCenter']
                    let yHandles = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft', 'topCenter', 'bottomCenter']
                    let centerXHandles = ['leftCenter', 'rightCenter']
                    let centerYHandles = ['topCenter', 'bottomCenter']
                    let originalBounds = new paper.Rectangle(drawing.bounds.topLeft, drawing.bounds.bottomRight)
                    let handleBounds = new paper.Rectangle(drawing.bounds[handle.opposite], event.point)
                    let shiftKey = paper.Key.isDown('shift')
                    let diffX = xHandles.includes(handle.name) ? handleBounds.width / originalBounds.width : 1
                    let diffY = yHandles.includes(handle.name) ? shiftKey || isDotCircle ? handleBounds.width / originalBounds.height : handleBounds.height / originalBounds.height : 1
                    if (centerXHandles.includes(handle.name) && (shiftKey || isDotCircle)) {
                        drawing.scale(diffX, drawing.bounds[handle.opposite])
                    } else if (centerYHandles.includes(handle.name) && (shiftKey || isDotCircle)) {
                        diffY = handleBounds.height / originalBounds.height
                        drawing.scale(diffY, drawing.bounds[handle.opposite])
                    } else {
                        drawing.scale(diffX, diffY, drawing.bounds[handle.opposite])
                    }

                    this.updateResizeHandles(drawing)
                    if (isDotCircle) this.updateDotCircleText(drawing)
                    if (drawing.data.type === 'locator') this.updateLocatorStyling(drawing)
                }
                handleEl.mouseUpEvent = () => {
                    this.snapshot()
                }

                drawing._handles.push(handleEl)

            })
        },
        updateResizeHandles: function (drawing) {

            if (Array.isArray(drawing._handles)) {
                let handles = this.getResizeHandles()
                drawing._handles.forEach((handle, index) => {
                    handle.position = drawing.bounds[handles[index].name]
                })
                // updated realtime
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
            }
        },
        removeResizeHandles: function (drawing) {
            if (Array.isArray(drawing._handles)) {
                drawing._handles.forEach(handle => {
                    handle.remove()
                })
            }
        },
        isSelectableDrawing: function (drawing) {
            return (drawing.data || {}).type === 'circle' || (drawing.data || {}).type === 'rectangle' || (drawing.data || {}).type === 'dotCircle' || (drawing.data || {}).type === 'locator'
        },
        initTools: function (options) {
            this.selectionTool = new paper.Tool({
                minDistance: 1,
                name: 'Selection'
            })

            this.selectionTool.onKeyDown = (event) => {
                if (event.key === 'delete' && this.activeSelection) {
                    this.removeDrawing(this.activeSelection)
                    this.activeSelection = null
                }
            }

            this.selectionTool.onMouseDown = (event) => {
                this.selectionTool._mouseDown = true
                this.selectionTool._hitResult = this.canvas.project.hitTest(event.point, {
                    segments: true,
                    stroke: true,
                    fill: true,
                    tolerance: 10
                })
                // locator tool watcher
                if (this.mode === 'touch' && this.touchTool) {
                    if (this.selectionTool._hitResult) delete this.selectionTool._hitResult
                    this[this.touchTool].onMouseDown(event)
                    return
                }
                // handle case when no hit detection
                if (!this.selectionTool._hitResult && this.activeSelection) {
                    this.removeResizeHandles(this.activeSelection)
                    this.activeSelection = null
                    console.log('handle case when no hit detection')
                }
                // handle case when hit detection && activeSelection but hit detection is not equal to item
                if (this.selectionTool._hitResult && this.activeSelection && (this.selectionTool._hitResult.item !== this.activeSelection && this.selectionTool._hitResult.item.ref !== this.activeSelection)) {
                    this.removeResizeHandles(this.activeSelection)
                    this.activeSelection = null
                    console.log('handle case when hit detection && activeSelection but hit detection is not equal')
                }
                // handle case when hit detection can be selectable
                if (this.selectionTool._hitResult && this.isSelectableDrawing(this.selectionTool._hitResult.item) && !this.activeSelection) {
                    this.createResizeHandles(this.selectionTool._hitResult.item)
                    this.activeSelection = this.selectionTool._hitResult.item
                    console.log('handle case when hit detection can be selectable')
                }
                // handle case when hit detection ref can be selectable
                if (this.selectionTool._hitResult && this.selectionTool._hitResult.item.ref && this.isSelectableDrawing(this.selectionTool._hitResult.item.ref) && !this.activeSelection) {
                    this.createResizeHandles(this.selectionTool._hitResult.item.ref)
                    this.activeSelection = this.selectionTool._hitResult.item.ref
                    console.log('handle case when hit detection ref can be selectable')
                }
            }
            this.selectionTool.onMouseDrag = (event) => {
                if (!this.selectionTool._hitResult && this.selectionTool._mouseDown) {
                    if ('pan' in options && !options.pan) return
                    this.canvas.view.center = this.canvas.view.center.add(event.downPoint.subtract(event.point))
                } else if (this.selectionTool._hitResult && this.selectionTool._hitResult.item && typeof this.selectionTool._hitResult.item.mouseDragEvent === 'function') {
                    if (this.limitEventsToBackgroundBounds && this.canvas.boundsPathLimit && !this.canvas.boundsPathLimit.contains(event.point)) {
                        event.point = this.canvas.boundsPathLimit.getNearestPoint(event.point)
                        this.selectionTool._hitResult.item.mouseDragEvent(event, true)
                    } else {
                        this.selectionTool._hitResult.item.mouseDragEvent(event)
                    }
                }
            }
            this.selectionTool.onMouseUp = (event) => {
                if (this.selectionTool._hitResult && this.selectionTool._hitResult.item && typeof this.selectionTool._hitResult.item.mouseUpEvent === 'function') {
                    this.selectionTool._hitResult.item.mouseUpEvent(event)
                }
                if (this.selectionTool._hitResult) delete this.selectionTool._hitResult
                if (this.selectionTool._mouseDown) delete this.selectionTool._mouseDown
            }

            this.measureTool = new paper.Tool({
                minDistance: 1,
                name: 'Measure'
            })
            this.measureTool.onMouseDown = (event) => {
                this.snapshot()
                if (this.scale) {
                    this.removeDrawing(this.scale)
                }
                this.measureTool.path = new paper.Path({
                    segments: [event.point, event.point],
                    strokeColor: '#2AFE48',
                    strokeWidth: 1 / this.canvas.view.zoom,
                    data: { type: 'scale', locked: false }
                });
                this.scale = this.measureTool.path
                this.setPixelsPerUnit()
                this.updateDrawingRealLength(this.measureTool.path, true)
            }
            this.measureTool.onMouseDrag = (event) => {
                let shiftKey = paper.Key.isDown('shift')
                if (shiftKey) {
                    let vector = event.point.subtract(this.measureTool.path.firstSegment.point)
                    let angle = vector.angle
                    const closest = [-180, -135, -90, -45, 0, 45, 90, 180].reduce((a, b) => {
                        return Math.abs(b - angle) < Math.abs(a - angle) ? b : a;
                    })
                    vector.angle = closest
                    event.point = this.measureTool.path.firstSegment.point.add(vector)
                }
                this.measureTool.path.lastSegment.point = event.point
                this.measureLength = this.measureTool.path.length
                this.setPixelsPerUnit()
                this.updateDrawingRealLength(this.measureTool.path, true)
            }
            this.measureTool.onMouseUp = () => {
                this.snapshot()

                console.log('measureTool.onMouseUp')
                this.activateTool('selectionTool')

                this.createPathHandles(this.measureTool.path)
                this.updateDrawingRealLength(this.measureTool.path, true)

                this.onUpdate({ key: `${this.computedKey}.activeTool`, value: { name: "selection", value: "selectionTool" }, autoSave: this.element.autoSave })
            }

            this.lineTool = new paper.Tool({
                minDistance: 1,
                name: 'Line'
            })
            this.lineTool.onMouseDown = (event) => {
                this.snapshot()
                this.lineTool.path = new paper.Path({
                    segments: [event.point, event.point],
                    strokeColor: '#FC17DB',
                    strokeWidth: 1 / this.canvas.view.zoom,
                    data: { type: 'line', locked: false }
                });
                this.drawings.push(this.lineTool.path)
                this.createPathHandles(this.lineTool.path, true)
                this.updateDrawingRealLength(this.lineTool.path)
            }
            this.lineTool.onMouseDrag = (event) => {
                if (this.lineTool.path) {
                    let shiftKey = paper.Key.isDown('shift')
                    if (shiftKey) {
                        let vector = event.point.subtract(this.lineTool.path.firstSegment.point)
                        let angle = vector.angle
                        const closest = [-180, -135, -90, -45, 0, 45, 90, 180].reduce((a, b) => {
                            return Math.abs(b - angle) < Math.abs(a - angle) ? b : a;
                        })
                        vector.angle = closest
                        event.point = this.lineTool.path.firstSegment.point.add(vector)
                    }
                    this.lineTool.path.lastSegment.point = event.point
                    this.updateDrawingRealLength(this.lineTool.path)
                    this.updateHandlesPosition(this.lineTool.path)
                    this.updatePathText(this.lineTool.path)
                }
            }
            this.lineTool.onMouseUp = () => {
                this.snapshot()

                this.activateTool('selectionTool')

                this.updateDrawingRealLength(this.lineTool.path)
                delete this.lineTool.path

                this.onUpdate({ key: `${this.computedKey}.activeTool`, value: { name: "selection", value: "selectionTool" }, autoSave: this.element.autoSave })
            }

            this.angleTool = new paper.Tool({
                minDistance: 1,
                name: 'Angle'
            })
            this.angleTool.onMouseDown = (event) => {
                if (!this.angleTool.path) {
                    this.angleTool.path = new paper.Path({
                        segments: [event.point, event.point],
                        strokeColor: '#86a3f0',
                        strokeWidth: 1 / this.canvas.view.zoom,
                        data: { type: 'angle', locked: false, angle: 0 }
                    });
                    this.drawings.push(this.angleTool.path)
                    this.createAngleHandles(this.angleTool.path)
                } else if (this.angleTool.path.segments.length < 3) {
                    this.angleTool.path.add(event.point)
                    if (this.angleTool.path.segments.length == 3) {
                        this.angleTool.shouldFinishNext = true
                    }
                    this.createAngleHandles(this.angleTool.path)
                }
                if (this.angleTool.path) {
                    this.updateAngleText(this.angleTool.path)
                }
            }
            this.angleTool.onMouseMove = (event) => {
                if (this.angleTool.path && this.angleTool.path.segments.length > 0) {
                    this.angleTool.path.lastSegment.point = event.point
                    this.updateAngleText(this.angleTool.path)
                    this.updateHandlesPosition(this.angleTool.path)
                }
            }
            this.angleTool.onMouseUp = (event) => {
                if (this.angleTool.path && !this.angleTool.shouldFinishNext && this.angleTool.path.segments.length == 3) {
                    this.snapshot()

                    this.activateTool('selectionTool')

                    this.createAngleHandles(this.angleTool.path)
                    this.updateDrawingRealLength(this.angleTool.path)
                    this.updateAngleText(this.angleTool.path)
                    delete this.angleTool.path

                    this.onUpdate({ key: `${this.computedKey}.activeTool`, value: { name: "selection", value: "selectionTool" }, autoSave: this.element.autoSave })
                }
                if (this.angleTool.shouldFinishNext) delete this.angleTool.shouldFinishNext
            }

            this.freehandTool = new paper.Tool({
                minDistance: 1,
                name: 'Freehand'
            })
            this.freehandTool.onMouseDown = () => {
                this.snapshot()
                this.freehandTool.path = new paper.Path({
                    strokeColor: '#ff0000',
                    strokeWidth: 2 / this.canvas.view.zoom,
                    data: { type: 'freehand', locked: false }
                });
                // update
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
            }
            this.freehandTool.onMouseDrag = (event) => {
                if (this.freehandTool.path) {
                    this.freehandTool.path.add(event.point)

                    // update
                    this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
                }
            }
            this.freehandTool.onMouseUp = () => {
                this.snapshot()
                if (this.freehandTool.path) {
                    this.freehandTool.path.simplify(10)
                    this.drawings.push(this.freehandTool.path)
                }
                delete this.freehandTool.path
                // update
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
                this.onUpdate({ key: `${this.computedKey}.activeTool`, value: { name: "selection", value: "selectionTool" }, autoSave: this.element.autoSave })
            }

            this.measurePolygonTool = new paper.Tool({
                minDistance: 1,
                name: 'measurePolygon'
            })
            this.measurePolygonToolTimer = 0
            this.measurePolygonToolClicks = 0
            this.measurePolygonTool.onMouseDown = (event) => {
                if (!this.measurePolygonTool.path) {
                    this.snapshot()
                    this.measurePolygonTool.path = new paper.Path({
                        segments: [event.point, event.point],
                        strokeColor: '#000',
                        fillColor: '#00ff00',
                        opacity: 0.5,
                        strokeWidth: 1 / this.canvas.view.zoom,
                        closed: true,
                        data: { type: 'measurePolygon', locked: false, strokeColor: '#000', fillColor: '#00ff00', opacity: 0.5 }
                    });
                } else if (this.measurePolygonToolClicks === 0) {
                    this.measurePolygonTool.path.add(event.point)
                }

                // update
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })

            }
            this.measurePolygonTool.onMouseMove = (event) => {
                if (this.measurePolygonTool.path && Array.isArray(this.measurePolygonTool.path.segments) && this.measurePolygonTool.path.segments.length > 1) {
                    this.measurePolygonTool.path.lastSegment.point = event.point

                    // update
                    this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
                }

            }
            this.measurePolygonTool.onMouseUp = () => {
                this.measurePolygonToolClicks += 1
                if (this.measurePolygonToolClicks === 1) {
                    this.measurePolygonToolTimer = setTimeout(() => {
                        this.measurePolygonToolClicks = 0
                    }, 300)
                }
                if (this.measurePolygonToolClicks >= 2) {
                    clearTimeout(this.measurePolygonToolTimer)
                    this.measurePolygonToolClicks = 0
                    this.measurePolygonTool.path.lastSegment.remove() // remove mouseMove helper segment
                    this.drawings.push(this.measurePolygonTool.path)
                    this.updateDrawingRealArea(this.measurePolygonTool.path)
                    this.createPolygonHandles(this.measurePolygonTool.path)
                    this.snapshot()
                    delete this.measurePolygonTool.path
                    this.activateTool('selectionTool')
                    this.onUpdate({ key: `${this.computedKey}.activeTool`, value: { name: "selection", value: "selectionTool" }, autoSave: this.element.autoSave })
                }

                // update
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })

            }

            this.polygonTool = new paper.Tool({
                minDistance: 1,
                name: 'Polygon'
            })
            this.polygonToolTimer = 0
            this.polygonToolClicks = 0
            this.polygonTool.onMouseDown = (event) => {
                if (!this.polygonTool.path) {
                    this.snapshot()
                    this.polygonTool.path = new paper.Path({
                        segments: [event.point, event.point],
                        strokeColor: '#000',
                        fillColor: '#0000ff',
                        opacity: 0.5,
                        strokeWidth: 1 / this.canvas.view.zoom,
                        closed: true,
                        data: { type: 'polygon', locked: false, strokeColor: '#000', fillColor: '#00ff00', opacity: 0.5 }
                    });
                } else if (this.polygonToolClicks === 0) {
                    this.polygonTool.path.add(event.point)
                }
                // update
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
            }
            this.polygonTool.onMouseMove = (event) => {
                if (this.polygonTool.path && Array.isArray(this.polygonTool.path.segments) && this.polygonTool.path.segments.length > 1) {
                    this.polygonTool.path.lastSegment.point = event.point
                    // update
                    this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
                }
            }
            this.polygonTool.onMouseUp = () => {
                this.polygonToolClicks += 1
                if (this.polygonToolClicks === 1) {
                    this.polygonToolTimer = setTimeout(() => {
                        this.polygonToolClicks = 0
                    }, 300)
                }
                if (this.polygonToolClicks >= 2) {
                    clearTimeout(this.polygonToolTimer)
                    this.polygonToolClicks = 0
                    this.polygonTool.path.lastSegment.remove() // remove mouseMove helper segment
                    this.drawings.push(this.polygonTool.path)
                    this.updateDrawingRealArea(this.polygonTool.path)
                    this.createPolygonHandles(this.polygonTool.path)
                    this.snapshot()
                    delete this.polygonTool.path
                    this.activateTool('selectionTool')

                    // update
                    this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
                }

            }

            this.rectangleTool = new paper.Tool({
                minDistance: 1,
                name: 'Rectangle'
            })
            this.rectangleTool.onMouseDown = (event) => {
                this.rectangleTool.path = new paper.Path.Rectangle({
                    point: this.rectangleTool.downPoint,
                    size: [this.canvas.view.bounds.width / 10, this.canvas.view.bounds.width / 20],
                    fillColor: _.get(this.computedValue, 'activeTool.fillColor', '#000'),
                    opacity: _.get(this.computedValue, 'activeTool.opacity', 1),
                    strokeColor: _.get(this.computedValue, 'activeTool.strokeColor', 'rgba(0,0,0,0.001)'),
                    strokeWidth: _.get(this.computedValue, 'activeTool.strokeWidth', 3) / this.canvas.view.zoom,
                    resize: _.get(this.computedValue, 'activeTool.resize', true),
                    data: {
                        type: 'rectangle', locked: false,
                        fillColor: _.get(this.computedValue, 'activeTool.fillColor', '#000'),
                        opacity: _.get(this.computedValue, 'activeTool.opacity', 1),
                        strokeColor: _.get(this.computedValue, 'activeTool.strokeColor', 'rgba(0,0,0,0.001)'),
                        strokeWidth: _.get(this.computedValue, 'activeTool.strokeWidth', 3) / this.canvas.view.zoom,
                        resize: _.get(this.computedValue, 'activeTool.resize', true)
                    }
                })
                this.snapshot()
                this.drawings.push(this.rectangleTool.path)
                this.createResizeHandles(this.rectangleTool.path)
                this.activeSelection = this.rectangleTool.path
                this.activateTool('selectionTool')
                delete this.rectangleTool.path

                // updated realtime
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
            }

            this.circleTool = new paper.Tool({
                minDistance: 1,
                name: 'Circle'
            })
            this.circleTool.onMouseDown = (position) => {
                this.circleTool.path = new paper.Path.Circle({
                    center: position || this.canvas.view.bounds.center, // position is used mostly by exchange tool function
                    radius: this.canvas.view.bounds.width / 20,
                    fillColor: _.get(this.computedValue, 'activeTool.fillColor', '#000'),
                    opacity: _.get(this.computedValue, 'activeTool.opacity', 1),
                    strokeColor: _.get(this.computedValue, 'activeTool.strokeColor', 'rgba(0,0,0,0.001)'),
                    strokeWidth: _.get(this.computedValue, 'activeTool.strokeWidth', 3) / this.canvas.view.zoom,
                    resize: _.get(this.computedValue, 'activeTool.resize', true),
                    data: {
                        type: 'circle', locked: false,
                        fillColor: _.get(this.computedValue, 'activeTool.fillColor', '#000'),
                        opacity: _.get(this.computedValue, 'activeTool.opacity', 1),
                        strokeColor: _.get(this.computedValue, 'activeTool.strokeColor', 'rgba(0,0,0,0.001)'),
                        strokeWidth: _.get(this.computedValue, 'activeTool.strokeWidth', 3) / this.canvas.view.zoom,
                        resize: _.get(this.computedValue, 'activeTool.resize', true)
                    }
                })
                this.snapshot()
                this.drawings.push(this.circleTool.path)
                this.createResizeHandles(this.circleTool.path)
                this.activeSelection = this.circleTool.path
                this.activateTool('selectionTool')
                delete this.circleTool.path

                // update
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
                this.onUpdate({ key: `${this.computedKey}.activeTool`, value: { name: "selection", value: "selectionTool" }, autoSave: this.element.autoSave })
            }

            this.dotCircleTool = new paper.Tool({
                minDistance: 1,
                name: 'dotCircle'
            })
            this.dotCircleTool.onMouseDown = (position) => {
                this.dotCircleTool.path = new paper.Path.Circle({
                    center: position || this.canvas.view.bounds.center, // position is used mostly by exchange tool function
                    radius: this.canvas.view.bounds.width / _.get(this.computedValue, 'activeTool.radius', 40),
                    fillColor: _.get(this.computedValue, 'activeTool.fillColor', '#000'),
                    opacity: _.get(this.computedValue, 'activeTool.opacity', 1),
                    strokeColor: _.get(this.computedValue, 'activeTool.strokeColor', 'rgba(0,0,0,0.001)'),
                    strokeWidth: _.get(this.computedValue, 'activeTool.strokeWidth', 3) / this.canvas.view.zoom,
                    dashArray: [_.get(this.computedValue, 'activeTool.dashArrayStroke', 60), _.get(this.computedValue, 'activeTool.dashArrayGap', 30)],
                    content: _.get(this.computedValue, 'activeTool.content', "tool"),
                    resize: _.get(this.computedValue, 'activeTool.resize', true),
                    data: {
                        type: 'dotCircle', locked: false,
                        radius: this.canvas.view.bounds.width / _.get(this.computedValue, 'activeTool.radius', 40),
                        fillColor: _.get(this.computedValue, 'activeTool.fillColor', '#000'),
                        opacity: _.get(this.computedValue, 'activeTool.opacity', 1),
                        strokeColor: _.get(this.computedValue, 'activeTool.strokeColor', 'rgba(0,0,0,0.001)'),
                        strokeWidth: _.get(this.computedValue, 'activeTool.strokeWidth', 3) / this.canvas.view.zoom,
                        dashArray: [_.get(this.computedValue, 'activeTool.dashArrayStroke', 60), _.get(this.computedValue, 'activeTool.dashArrayGap', 30)],
                        content: _.get(this.computedValue, 'activeTool.content', "tool"),
                        resize: _.get(this.computedValue, 'activeTool.resize', true)
                    }
                })
                this.createDotCircleText(this.dotCircleTool.path)
                this.snapshot()
                this.drawings.push(this.dotCircleTool.path)
                this.createResizeHandles(this.dotCircleTool.path)
                this.activeSelection = this.dotCircleTool.path
                this.activateTool('selectionTool')
                delete this.dotCircleTool.path

                // update
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
                this.onUpdate({ key: `${this.computedKey}.activeTool`, value: { name: "selection", value: "selectionTool" }, autoSave: this.element.autoSave })
            }

            this.locatorTool = new paper.Tool({
                minDistance: 1,
                name: 'locator'
            })
            this.locatorTool.onMouseDown = (event) => {

                this.locatorTool.path = new paper.Path.Circle({
                    center: event ? event.point : this.canvas.view.bounds.center,
                    radius: this.canvas.view.bounds.width / _.get(this.computedValue, 'activeTool.radius', 40),
                    fillColor: 'rgba(0,0,0,0.001)',
                    opacity: _.get(this.computedValue, 'activeTool.opacity', 1),
                    strokeColor: _.get(this.computedValue, 'activeTool.strokeColor', 'rgba(0,0,0,0.001)'),
                    strokeWidth: _.get(this.computedValue, 'activeTool.strokeWidth', 1) / this.canvas.view.zoom,
                    content: _.get(this.computedValue, 'activeTool.content', "tool"),
                    resize: _.get(this.computedValue, 'activeTool.resize', true),
                    data: {
                        type: 'locator', locked: false,
                        radius: this.canvas.view.bounds.width / _.get(this.computedValue, 'activeTool.radius', 40),
                        fillColor: 'rgba(0,0,0,0.001)',
                        opacity: _.get(this.computedValue, 'activeTool.opacity', 1),
                        strokeColor: _.get(this.computedValue, 'activeTool.strokeColor', 'rgba(0,0,0,0.001)'),
                        strokeWidth: _.get(this.computedValue, 'activeTool.strokeWidth', 3) / this.canvas.view.zoom,
                        content: _.get(this.computedValue, 'activeTool.content', "tool"),
                        resize: _.get(this.computedValue, 'activeTool.resize', true)
                    }
                })
                this.createLocatorStyling(this.locatorTool.path)
                this.snapshot()
                this.drawings.push(this.locatorTool.path)
                this.createResizeHandles(this.locatorTool.path)
                this.activeSelection = this.locatorTool.path
                // locator watcher disable
                if (this.mode === 'touch') this.mode = null
                this.activateTool('selectionTool')
                delete this.locatorTool.path

                // update
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
                this.onUpdate({ key: `${this.computedKey}.activeTool`, value: { name: "selection", value: "selectionTool" }, autoSave: this.element.autoSave })
            }

            return this
        },
        removeDrawing(drawing) {
            this.snapshot()
            if (Array.isArray(drawing._handles)) {
                drawing._handles.forEach(handle => {
                    handle.remove()
                })
            }
            if (drawing._text) drawing._text.remove()
            if (drawing._dot) drawing._dot.remove()
            if (drawing._leftLine) drawing._leftLine.remove()
            if (drawing._rightLine) drawing._rightLine.remove()
            if (drawing._topLine) drawing._topLine.remove()
            if (drawing._bottomLine) drawing._bottomLine.remove()
            drawing.remove()
            this.scale = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'scale')
            this.updateDrawings()
        },
        setLocked(drawing) {
            drawing.locked = !drawing.locked
            drawing.data.locked = drawing.locked
            if (Array.isArray(drawing._handles)) {
                drawing._handles.forEach(handle => {
                    handle.locked = drawing.locked
                })
            }
            this.scale = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'scale')
            this.updateDrawings()
            if (this.activeSelection) this.removeResizeHandles(this.activeSelection)
        },
        getAngle: function (path) {
            if (path.segments.length < 3) return
            let vector1 = path.segments[1].point.subtract(path.segments[0].point)
            let vector2 = path.segments[1].point.subtract(path.segments[2].point)
            return Math.abs(vector1.getDirectedAngle(vector2))
        },
        updateAngleText: function (path) {
            if (!path._text || path.segments.length < 3) return
            path._text.content = `${this.getAngle(path).toFixed(2)}°`
            path.data.angle = Math.round(this.getAngle(path) * 100 + Number.EPSILON) / 100
            if (path.segments[0].point.x < path.segments[1].point.x) {
                path._text.position = path.segments[1].point.add(new paper.Point(40 / this.canvas.view.zoom, 0))
            } else {
                path._text.position = path.segments[1].point.subtract(new paper.Point(40 / this.canvas.view.zoom, 0))
            }
            this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
            this.scale = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'scale')
            this.updateDrawings()
        },
        createAngleHandlesText: function (path) {
            if (path._text) path._text.remove()
            path._text = new paper.PointText({
                point: path.segments[1].point,
                content: '',
                locked: true,
                fillColor: path.strokeColor,
                fontSize: 16 * (1 / this.canvas.view.zoom),
                ref: path,
                data: {
                    type: 'util'
                }
            })
            this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
        },
        createAngleHandles: function (path) {
            if (Array.isArray(path._handles)) {
                path._handles.forEach(handle => {
                    handle.remove()
                })
            }
            path._handles = []
            path.segments.forEach(segment => {
                let handle = new paper.Path.Circle({
                    center: segment.point,
                    radius: 5 / this.canvas.view.zoom,
                    strokeColor: path.strokeColor,
                    strokeWidth: 1 / this.canvas.view.zoom,
                    fillColor: 'rgba(0,0,0, 0.001)',
                    ref: path,
                    data: {
                        type: 'handle'
                    }
                })
                handle.mouseDragEvent = (event) => {
                    if (this.activeTool !== this.selectionTool || path.locked) return
                    handle.position = event.point
                    segment.point = event.point
                    this.updateDrawingRealLength(path)
                    this.updateAngleText(path)
                }
                handle.mouseUpEvent = () => {
                    this.snapshot()
                }
                path._handles.push(handle)
            })
            this.createAngleHandlesText(path)
            this.updateAngleText(path)
            this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
        },
        createPolygonHandles: function (path) {
            const handleSize = 10
            if (Array.isArray(path._handles)) {
                path._handles.forEach(handle => {
                    handle.remove()
                })
            }
            path._handles = []
            for (let i = 0; i < path.segments.length; i++) {
                let handle = new paper.Path.Rectangle({
                    point: path.segments[i].point.subtract(handleSize / this.canvas.view.zoom / 2),
                    size: [handleSize / this.canvas.view.zoom, handleSize / this.canvas.view.zoom],
                    strokeColor: 'orange',
                    strokeWidth: 1 / this.canvas.view.zoom,
                    fillColor: 'rgba(0,0,0, 0.001)',
                    ref: path,
                    data: {
                        type: 'handle'
                    }
                })
                handle.mouseDragEvent = (event) => {
                    if (this.activeTool !== this.selectionTool || path.locked) return
                    handle.position = event.point
                    path.segments[i].point = event.point
                    this.updateDrawingRealArea(path)
                    this.updatePolygonText(path)
                    // update
                    this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
                }
                handle.mouseUpEvent = () => {
                    this.snapshot()
                }
                path._handles.push(handle)
            }
            if (path.data.type === 'measurePolygon') {
                this.createPolygonHandlesText(path)
                this.updatePolygonText(path)
            }
        },
        updatePolygonText: function (path) {
            if (!path._text || path.segments.length < 2 || path.data.type !== 'measurePolygon') return
            path._text.content = `${path.realArea} cm²`
            path._text.position = path.bounds.center
            this.scale = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'scale')
            this.updateDrawings()
        },
        createPolygonHandlesText: function (path) {
            if (path._text) path._text.remove()
            path._text = new paper.PointText({
                point: path.bounds.center,
                content: '',
                locked: true,
                fillColor: path.strokeColor,
                fontSize: 16 * (1 / this.canvas.view.zoom),
                ref: path,
                data: {
                    type: 'util'
                }
            })
        },
        createDotCircleText: function (path) {
            if (path.data.type !== 'dotCircle') return
            if (path._text) path._text.remove()
            path._text = new paper.PointText({
                point: path.bounds.topLeft,
                content: path.data.content || '',
                justification: 'right',
                locked: true,
                fillColor: path.strokeColor,
                fontSize: 16 * (1 / this.canvas.view.zoom),
                ref: path,
                data: {
                    type: 'util'
                }
            })
            if (path._dot) path._dot.remove()
            path._dot = new paper.Path.Circle({
                center: path.bounds.center,
                radius: path.bounds.width * 0.1,
                locked: true,
                fillColor: path.strokeColor,
                strokeWidth: 1 / this.canvas.view.zoom,
                ref: path,
                data: {
                    type: 'util'
                }
            })
            this.updateDotCircleText(path)
        },
        updateDotCircleText: function (path) {
            if (!path._text || !path._dot || path.data.type !== 'dotCircle') return
            path._text.content = path.data.content || ''
            path._text.position = path.bounds.topLeft.subtract([path._text.bounds.width / 2, 0])
            path._dot.position = path.bounds.center
            let dotBounds = path.bounds.width * 0.2
            path._dot.fitBounds(new paper.Rectangle(path.bounds.center.subtract([dotBounds / 2, dotBounds / 2]), [dotBounds, dotBounds]))
        },
        createLocatorStyling: function (path) {
            if (path.data.type !== 'locator') return
            if (path._dot) path._dot.remove()
            if (path._leftLine) path._leftLine.remove()
            if (path._rightLine) path._rightLine.remove()
            if (path._topLine) path._topLine.remove()
            if (path._bottomLine) path._bottomLine.remove()
            path._dot = new paper.Path.Rectangle({
                point: path.bounds.center.subtract(new paper.Point(path.bounds.width * 0.025, path.bounds.width * 0.025)),
                size: path.bounds.width * 0.05,
                locked: true,
                fillColor: 'red',
                strokeWidth: 1 / this.canvas.view.zoom,
                ref: path,
                data: {
                    type: 'util'
                }
            })
            path._leftLine = new paper.Path.Line({
                from: path.bounds.leftCenter,
                to: path.bounds.center.subtract(new paper.Point(path.bounds.width * 0.1, 0)),
                locked: true,
                strokeWidth: path.bounds.width * 0.05,
                strokeColor: 'blue',
                ref: path,
                data: {
                    type: 'util'
                }
            })
            path._rightLine = new paper.Path.Line({
                from: path.bounds.rightCenter,
                to: path.bounds.center.add(new paper.Point(path.bounds.width * 0.1, 0)),
                locked: true,
                strokeWidth: path.bounds.width * 0.05,
                strokeColor: 'blue',
                ref: path,
                data: {
                    type: 'util'
                }
            })
            path._topLine = new paper.Path.Line({
                from: path.bounds.topCenter,
                to: path.bounds.center.subtract(new paper.Point(0, path.bounds.width * 0.1)),
                locked: true,
                strokeWidth: path.bounds.width * 0.05,
                strokeColor: 'blue',
                ref: path,
                data: {
                    type: 'util'
                }
            })
            path._bottomLine = new paper.Path.Line({
                from: path.bounds.bottomCenter,
                to: path.bounds.center.add(new paper.Point(0, path.bounds.width * 0.1)),
                locked: true,
                strokeWidth: path.bounds.width * 0.05,
                strokeColor: 'blue',
                ref: path,
                data: {
                    type: 'util'
                }
            })
            this.updateLocatorStyling(path)
        },
        updateLocatorStyling: function (path) {
            let dotBounds = path.bounds.width * 0.05
            path._leftLine.position = path.bounds.leftCenter.add(new paper.Point(path.bounds.size.width / 4 - dotBounds, 0))
            path._rightLine.position = path.bounds.rightCenter.subtract(new paper.Point(path.bounds.size.width / 4 - dotBounds, 0))
            path._topLine.position = path.bounds.topCenter.add(new paper.Point(0, path.bounds.size.width / 4 - dotBounds))
            path._bottomLine.position = path.bounds.bottomCenter.subtract(new paper.Point(0, path.bounds.size.width / 4 - dotBounds))
            path._dot.fitBounds(new paper.Rectangle(path.bounds.center.subtract([dotBounds / 2, dotBounds / 2]), [dotBounds, dotBounds]))
        },
        updateHandlesPosition: function (path) {
            if (path._handles) {
                path.segments.forEach((segment, index) => {
                    path._handles[index].position = segment.point
                })
            }
        },
        updatePathText: function (path) {
            if (!path._text || path.data.type === 'angle' || path.data.type === 'dotCircle' || path.data.type === 'polygon' || path.data.type === 'measurePolygon') return
            path._text.content = path.realLength || path.length
            if (path.curves[0]) {
                let vector = path.segments[1].point.subtract(path.segments[0].point)
                path._text.rotate(-path._text.rotation + vector.angle)
                let visibleText = Math.abs(path._text.rotation) > 90
                if (visibleText) {
                    path._text.rotate(180)
                }
                let center = path.curves[0].getLocationAtTime(0.5).point
                let vector2 = center.add(new paper.Point(15 * (1 / this.canvas.view.zoom), 0)).subtract(center)
                vector2.angle = visibleText ? vector.angle + 90 : vector.angle - 90
                path._text.position = center.add(vector2)
            }
        },

        createPathHandles: function (path, ignorePixelsPerUnit) {
            const handleSize = 10
            if (Array.isArray(path._handles)) {
                path._handles.forEach(handle => {
                    handle.remove()
                })
            }
            let firstSegmentHandle = new paper.Path.Rectangle({
                point: path.firstSegment.point.subtract(10 / this.canvas.view.zoom / 2),
                size: [handleSize / this.canvas.view.zoom, handleSize / this.canvas.view.zoom],
                strokeColor: path.strokeColor,
                strokeWidth: 1 / this.canvas.view.zoom,
                fillColor: 'rgba(0,0,0, 0.001)',
                ref: path,
                data: {
                    type: 'handle'
                }
            })

            firstSegmentHandle.position = path.firstSegment.point

            firstSegmentHandle.mouseDragEvent = (event) => {
                if (path.locked) return
                let shiftKey = paper.Key.isDown('shift')
                let position = event.point
                if (shiftKey) {
                    let vector = position.subtract(path.lastSegment.point)
                    let angle = vector.angle
                    const closest = [-180, -135, -90, -45, 0, 45, 90, 180].reduce((a, b) => {
                        return Math.abs(b - angle) < Math.abs(a - angle) ? b : a;
                    })
                    vector.angle = closest
                    position = path.lastSegment.point.add(vector)
                }
                path.firstSegment.point = position
                firstSegmentHandle.position = position
                if (!ignorePixelsPerUnit) {
                    this.measureLength = path.length
                }
                !ignorePixelsPerUnit && this.setPixelsPerUnit()
                this.updateDrawingRealLength(path, !ignorePixelsPerUnit)
                this.updatePathText(path)
            }
            firstSegmentHandle.mouseUpEvent = () => {
                this.snapshot()
            }

            let secondSegmentHandle = new paper.Path.Rectangle({
                point: path.lastSegment.point.subtract(10 / this.canvas.view.zoom / 2),
                size: [10 / this.canvas.view.zoom, 10 / this.canvas.view.zoom],
                strokeColor: path.strokeColor,
                strokeWidth: 1 / this.canvas.view.zoom,
                fillColor: 'rgba(0,0,0, 0.001)',
                ref: path,
                data: {
                    type: 'handle',
                }
            })
            secondSegmentHandle.position = path.lastSegment.point

            secondSegmentHandle.mouseDragEvent = (event) => {
                if (path.locked) return
                let shiftKey = paper.Key.isDown('shift')
                let position = event.point
                if (shiftKey) {
                    let vector = position.subtract(path.firstSegment.point)
                    let angle = vector.angle
                    const closest = [-180, -135, -90, -45, 0, 45, 90, 180].reduce((a, b) => {
                        return Math.abs(b - angle) < Math.abs(a - angle) ? b : a;
                    })
                    vector.angle = closest
                    position = path.firstSegment.point.add(vector)
                }
                path.lastSegment.point = position
                secondSegmentHandle.position = position
                if (!ignorePixelsPerUnit) {
                    this.measureLength = path.length
                }
                !ignorePixelsPerUnit && this.setPixelsPerUnit()
                this.updateDrawingRealLength(path, !ignorePixelsPerUnit)
                this.updatePathText(path)
            }
            secondSegmentHandle.mouseUpEvent = () => {
                this.snapshot()
            }
            path._handles = [firstSegmentHandle, secondSegmentHandle]

            if (path._text) path._text.remove()
            path._text = new paper.PointText({
                point: path.segments[1].point,
                content: path.realLength,
                locked: true,
                fillColor: path.strokeColor,
                fontSize: 16 * (1 / this.canvas.view.zoom),
                ref: path,
                data: {
                    type: 'util'
                }
            })
        },
        activateTool: function (name, position) {
            if (this[name]) {
                this[name].activate()
                this.activeTool = this[name]
                if (name === 'rectangleTool' || name === 'circleTool' || name === 'dotCircleTool') {
                    this.activeTool.onMouseDown(position)
                }
            }
            return this
        },
        setPixelsPerUnit: function () {
            this.measurePixelsPerUnit = this.measureUserValue / this.measureLength
            return this.measurePixelsPerUnit
        },
        updateScaleLength: function (value, drawing) {
            if (drawing?.data && drawing.data?.type === 'scale') {
                this.measureUserValue = Number(value)
                _.set(this.template, `${this._c_activeView}.scale.value`, this.measureUserValue)
                this.setPixelsPerUnit()
                this.updateDrawingRealLength(drawing, true)
            }
        },
        updateDrawingRealArea: function (drawing) {
            if (drawing.data.type !== 'measurePolygon') return
            let getValues = (segment1, segment2, straight) => {
                let p1 = segment1._point.multiply(this.measurePixelsPerUnit),
                    h1 = segment1._handleOut,
                    h2 = segment2._handleIn,
                    p2 = segment2._point.multiply(this.measurePixelsPerUnit),
                    x1 = p1[0], y1 = p1[1],
                    x2 = p2[0], y2 = p2[1],
                    values = straight
                        ? [x1, y1, x1, y1, x2, y2, x2, y2]
                        : [
                            x1, y1,
                            x1 + h1._x, y1 + h1._y,
                            x2 + h2._x, y2 + h2._y,
                            x2, y2
                        ];
                return values;
            }
            let area = 0
            let segments = drawing.segments,
                closed = drawing.closed
            for (let i = 0, l = segments.length; i < l; i++) {
                let last = i + 1 === l
                area += paper.Curve.getArea(getValues(
                    segments[i], segments[last ? 0 : i + 1],
                    last && !closed))
            }
            drawing.realArea = area.toFixed(2)
            return area
        },
        updateDrawingRealLength: function (drawing, loop) {
            console.log('updateDrawingRealLength')
            if (drawing.data && drawing.data.type === 'scale') {
                drawing.realLength = this.measureUserValue
                this.updatePathText(drawing)
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.scale`, value: this._getViewAsJson(this._c_activeView).scale, autoSave: this.element.autoSave })
            } else {
                drawing.realLength = (drawing.length * this.measurePixelsPerUnit).toFixed(2)
                this.updatePathText(drawing)
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.measures`, value: this._getViewAsJson(this._c_activeView).measures, autoSave: this.element.autoSave })
            }

            if (loop) {
                this.drawings.forEach(drawing => {
                    this.updateDrawingRealLength(drawing)
                    this.updatePathText(drawing)
                    this.updateDrawingRealArea(drawing)
                    this.updatePolygonText(drawing)
                })
            }
        },
        updateDrawings: function () {
            this.drawings = this.canvas.project.activeLayer.children.filter(child => (child.data || {}).type === 'line' || (child.data || {}).type === 'angle' || (child.data || {}).type === 'freehand' || (child.data || {}).type === 'measurePolygon' || (child.data || {}).type === 'polygon' || (child.data || {}).type === 'rectangle' || (child.data || {}).type === 'circle' || (child.data || {}).type === 'dotCircle' || (child.data || {}).type === 'locator')
        },
        // undo/redo
        next: function () {
            return {
                viewIndex: this._c_activeView,
                view: this._getViewAsJson(this._c_activeView)
            }
        },
        snapshot: function () {
            if (this.historyNextState) {
                const json = this.historyNextState
                this._undo.push(json)
                this._redo = []
            }
            this.historyNextState = this.next()
        },
        undo: function () {
            const history = this._undo.pop()
            if (history) {
                this._redo.push(this.next())
                this.historyNextState = history
                this.load(history)
            }
        },
        redo: function () {
            const history = this._redo.pop()
            if (history) {
                this._undo.push(this.next())
                this.historyNextState = history
                this.load(history)
            }
        },
        load: function (history) {
            let images = this.canvas.project.activeLayer.children.filter(child => (child.data || {}).type === 'bg-image-1' || (child.data || {}).type === 'bg-image-2')
            this.canvas.project.activeLayer.removeChildren() // clear
            this.canvas.project.activeLayer.addChildren(images)
            _.set(this.template, history.viewIndex, history.view)
            this._loadView(_get(this.template, history.viewIndex), true)

            this.scale = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'scale')
            this.updateDrawings()
            if (this.scale) {
                this.createPathHandles(this.scale)
                this.updateDrawingRealLength(this.scale, true)
            }

            this.drawings.forEach(drawing => {
                if (drawing.data.type === 'line') {
                    this.createPathHandles(drawing, true)
                }
                if (drawing.data.type === 'angle') {
                    this.createAngleHandles(drawing)
                }
                if (drawing.data.type === 'measurePolygon') {
                    this.createPolygonHandles(drawing)
                    this.updateDrawingRealArea(drawing)
                }
                if (drawing.data.type === 'polygon') {
                    this.createPolygonHandles(drawing)
                }
                this.updateDrawingRealLength(drawing)
            })
            this.updateThickness()
            return this
        },
        init: function (options) {

            if (this.canvas) {
                this.destroyCanvas()
            }
            this.canvas = new paper.PaperScope
            this.canvas.setup(this.$refs.scene)
            // scene resize
            this.canvas.resizeObserver = new ResizeObserver((entries) => {
                entries.forEach(entry => {
                    let bbox = entry.target.getBoundingClientRect()
                    if (this.canvas) {
                        this.canvas.view.setViewSize(new paper.Size(bbox.width, bbox.height))
                        this.fitToScreen()
                    }
                })
            })
            this.canvas.resizeObserver.observe(this.$refs.container)

            // init
            this.initZoom(options)
            this.loadTemplate(this.computedValue)

            this.initTools(options)

            this.activateTool('selectionTool')

            if (this._c_activeView && !_.get(this.computedValue, this._c_activeView, false)) {
                this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}`, value: {} })
            }

            if (this._c_activeView && this.computedValue && _.get(this.computedValue, this._c_activeView, false)) {
                this.setView(this._c_activeView, true, true)
                // const bgImage1 = this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage1, entityData: this.entityData }) ? { src: this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage1, entityData: this.entityData }) + _.get(this.computedValue, 'activeView.bgImage1UrlParameter', '') } : null
                // const bgImage2 = this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage2, entityData: this.entityData }) ? { src: this.resolveKeyValue({ key: this._c_activeViewDetail.bgImage2, entityData: this.entityData }) + _.get(this.computedValue, 'activeView.bgImage1UrlParameter', '') } : null
                const bgImage1 = this._c_activeViewDetail.bgImage1 ? { src: this._c_activeViewDetail.bgImage1 + _.get(this.computedValue, 'activeView.bgImage1UrlParameter', '') } : null
                const bgImage2 = this._c_activeViewDetail.bgImage2 ? { src: this._c_activeViewDetail.bgImage2 + _.get(this.computedValue, 'activeView.bgImage2UrlParameter', '') } : null
                this.setBackground(bgImage1, bgImage2)

            }
        },

        destroyCanvas: function () {
            if (!this.canvas) return
            this.canvas.project.activeLayer.removeChildren()
            this.canvas.remove()
            if (this.canvas.resizeObserver) {
                this.canvas.resizeObserver.unobserve(this.$refs.container)
            }
            paper.View._focused = null
            this.canvas = null
        },
        setMeasures: function (measures) {
            this.canvas.project.activeLayer.children.forEach(child => {
                let keepChild = child.data && (child.data.type === 'bg-image-1' || child.data.type === 'bg-image-2')
                if (!keepChild) child.remove()
            })
            measures.forEach(measure => {
                let measureData = Object.assign({}, measure)
                measureData.type = measureData.tool
                delete measureData.tool
                delete measureData.startPoint
                delete measureData.endPoint
                delete measureData.segments
                if (measure.tool === 'line') {
                    let path = new paper.Path({
                        segments: [measure.startPoint, measure.endPoint],
                        locked: measure.locked,
                        strokeColor: '#FC17DB',
                        data: measureData
                    })
                }
                if (measure.tool === 'angle') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        locked: measure.locked,
                        strokeColor: '#86a3f0',
                        data: measureData
                    })
                }
                if (measure.tool === 'freehand') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        locked: measure.locked,
                        strokeColor: measure.strokeColor || '#000',
                        data: measureData
                    })
                }
                if (measure.tool === 'measurePolygon') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        closed: true,
                        locked: measure.locked,
                        fillColor: measure.fillColor || 'rgba(0,0,0,0.001)',
                        strokeColor: measure.strokeColor || '#000',
                        opacity: measure.opacity || 1,
                        data: measureData
                    })
                }
                if (measure.tool === 'polygon') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        closed: true,
                        locked: measure.locked,
                        fillColor: measure.fillColor || 'rgba(0,0,0,0.001)',
                        strokeColor: measure.strokeColor || '#000',
                        opacity: measure.opacity || 1,
                        data: measureData
                    })
                }
                if (measure.tool === 'rectangle') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        closed: true,
                        locked: measure.locked,
                        fillColor: measure.fillColor || 'rgba(0,0,0,0.001)',
                        opacity: measure.opacity || 1,
                        strokeColor: measure.strokeColor || '#000',
                        strokeWidth: measure.strokeWidth || 1,
                        data: measureData
                    })
                }
                if (measure.tool === 'circle') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        locked: measure.locked,
                        closed: true,
                        fillColor: measure.fillColor || 'rgba(0,0,0,0.001)',
                        opacity: measure.opacity || 1,
                        strokeColor: measure.strokeColor || '#000',
                        strokeWidth: measure.strokeWidth || 1,
                        data: measureData
                    })
                }
                if (measure.tool === 'dotCircle') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        locked: measure.locked,
                        closed: true,
                        radius: measure.radius || 50,
                        fillColor: measure.fillColor || 'rgba(0,0,0,0.001)',
                        opacity: measure.opacity || 1,
                        strokeColor: measure.strokeColor || '#000',
                        strokeWidth: measure.strokeWidth || 1,
                        dashArray: measure.dashArray || [60, 30],
                        content: measure.content || 'tool',
                        data: measureData
                    })
                    this.createDotCircleText(path)
                }
                if (measure.tool === 'locator') {
                    let path = new paper.Path({
                        segments: measure.segments,
                        locked: measure.locked,
                        closed: true,
                        radius: measure.radius || 50,
                        fillColor: 'rgba(0,0,0,0.001)',
                        opacity: measure.opacity || 1,
                        strokeColor: 'rgba(0,0,0,0.001)',
                        strokeWidth: 1,
                        content: measure.content || 'tool',
                        data: measureData
                    })
                    this.createLocatorStyling(path)
                }
            })
            this._undo = []
            this._redo = []
            this.historyNextState = null
            this.snapshot()
        },
        // object param expected {src: string, width: number, height: number}
        setBackground: function (firstSource, secondSource) {
            console.log('setBackground', firstSource, secondSource)
            let firstBgImage = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'bg-image-1')
            let secondBgImage = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'bg-image-2')
            let imageReference = firstBgImage || secondBgImage
            let size = [imageReference?.bounds?.width, imageReference?.bounds?.height]
            if (firstSource) {
                if (firstBgImage) firstBgImage.remove()
                let bgImage = new paper.Raster({
                    source: firstSource.src,
                    crossOrigin: 'anonymous',
                    position: [0, 0],
                    locked: true,
                    data: { type: 'bg-image-1' }
                })
                bgImage.onLoad = () => {
                    if (imageReference) {
                        bgImage.scale(size[0] / bgImage.bounds.width, size[1] / bgImage.bounds.height)
                    }
                    bgImage.position = new paper.Point(0, 0)
                    console.log(firstSource)
                }
                bgImage.on('load', () => {
                    this.setBoundsPathLimit(bgImage)
                    const references = {
                        imageLeft: bgImage.position.x,
                        imageTop: bgImage.position.y,
                        referenceImageSize: [bgImage.bounds.size.width, bgImage.bounds.size.height]
                    }
                    this.onUpdate({ key: `${this.computedKey}.${this._c_activeView}.references`, value: references, autoSave: this.element.autoSave })
                    console.log('references', references)
                    this.drawHeatmap(this.filteredHeatmapData, this.heatmapScalefactor, this.element.heatmapColorConditions) // we call drawHeatmap on bg load for testing purposes
                })
                this.canvas.project.activeLayer.insertChild(0, bgImage)
            }
            if (secondSource) {
                if (secondBgImage) secondBgImage.remove()
                let bgImage = new paper.Raster({
                    source: secondSource.src,
                    crossOrigin: 'anonymous',
                    position: [0, 0],
                    locked: true,
                    data: { type: 'bg-image-2' }
                })
                bgImage.onLoad = function () {
                    if (imageReference) {
                        bgImage.scale(size[0] / bgImage.bounds.width, size[1] / bgImage.bounds.height)
                    }
                    bgImage.position = new paper.Point(0, 0)
                }
                this.canvas.project.activeLayer.insertChild(1, bgImage)
            }


        },
        // boolean param expected
        toggleImageVisibility: function (firstImage, secondImage) {
            let firstBgImage = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'bg-image-1')
            let secondBgImage = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'bg-image-2')
            if (firstBgImage) {
                firstBgImage.visible = firstImage
            }
            if (secondBgImage) {
                secondBgImage.visible = secondImage
            }
        },
        toggleImageVisibilityTesting: function () {
            let secondBgImage = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'bg-image-2')
            if (secondBgImage) {
                secondBgImage.visible = !secondBgImage.visible
            }
        },
        exportImage: async function (ignoreBg, resolution, type) {
            let ignoreImages = this.canvas.project.activeLayer.children.filter(child => child instanceof paper.Raster)
            if (this.activeSelection) {
                this.removeResizeHandles(this.activeSelection)
                this.activeSelection = null
            }
            if (ignoreBg) {
                ignoreImages.forEach(image => {
                    image.opacity = 0
                })
                this.canvas.project._needsUpdate = true
                this.canvas.project.view.update()
            }
            let raster = this.canvas.project.activeLayer.rasterize({
                resolution: resolution || 50,
                insert: false,
            })
            let image = raster.toDataURL(type)
            console.log('image', image)
            if (ignoreBg) {
                ignoreImages.forEach(image => {
                    image.opacity = 1
                })
                this.canvas.project._needsUpdate = true
                this.canvas.project.view.update()
            }
            await fetch(image)
                .then(res => res.blob())
                .then(async blob => {
                    console.log('blob', blob)
                    const exportLocationDetail = _.get(this.platformSysStore.annotatorExportImageHelper, this.computedKey, {})
                    const exportKey = this.getComputedKey(exportLocationDetail.exportKey)
                    let fileInfo = await this.uploadcareStandardFileUpload({ file: blob, key: exportKey })
                    this.onUpdate({ key: exportKey, value: fileInfo })

                    if (exportLocationDetail.key2write && exportLocationDetail.value2write) {
                        this.onUpdate({ key: this.getComputedKey(exportLocationDetail.key2write), value: _.get(this.entityData, this.getComputedKey(exportLocationDetail.value2write)) })
                    }
                })
        },
        setBoundsPathLimit(img) {
            if (!img._loaded) return;
            const defineNonTransparent = (data, x, y) => {
                let width = 2000 // canvas.width
                return (data[(y * width + x) * 4 + 3] > 20)
            }

            const contourStart = (data, grid) => {
                let x = 0, y = 0
                while (true) {
                    if (grid(data, x, y)) {
                        return [x, y]
                    }
                    if (x === 0) {
                        x = y + 1
                        y = 0
                    } else {
                        x = x - 1
                        y = y + 1
                    }
                }
            }

            const getCountour = (data, grid) => {
                let s = contourStart(data, grid),
                    c = [],
                    x = s[0],
                    y = s[1],
                    dx = 0,
                    dy = 0,
                    pdx = NaN,
                    pdy = NaN,
                    i = 0

                do {
                    i = 0
                    if (grid(data, x - 1, y - 1)) i += 1
                    if (grid(data, x, y - 1)) i += 2
                    if (grid(data, x - 1, y)) i += 4
                    if (grid(data, x, y)) i += 8

                    if (i === 6) {
                        dx = pdy === -1 ? -1 : 1
                        dy = 0
                    } else if (i === 9) {
                        dx = 0
                        dy = pdx === 1 ? -1 : 1
                    } else {
                        dx = [1, 0, 1, 1, -1, 0, -1, 1, 0, 0, 0, 0, -1, 0, -1, NaN][i]
                        dy = [0, -1, 0, 0, 0, -1, 0, 0, 1, -1, 1, 1, 0, -1, 0, NaN][i]
                    }

                    if (dx != pdx && dy != pdy) {
                        c.push([x, y])
                        pdx = dx
                        pdy = dy
                    }

                    x += dx
                    y += dy
                } while (s[0] != x || s[1] != y)

                return c
            }

            const getPoints = (img) => {
                const canvas = document.createElement("canvas")
                const ctx = canvas.getContext("2d")
                canvas.width = 2000
                canvas.height = 2000
                const hRatio = canvas.width / img.width
                const vRatio = canvas.height / img.height
                const ratio = Math.min(hRatio, vRatio)
                const centerShift_x = (canvas.width - img.width * ratio) / 2
                const centerShift_y = (canvas.height - img.height * ratio) / 2
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(img, 0, 0, img.width, img.height,
                    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio)
                return getCountour(ctx.getImageData(0, 0, canvas.width, canvas.height).data, defineNonTransparent)
            }

            // square distance between 2 points
            const getSqDist = (p1, p2) => {
                let dx = p1[0] - p2[0],
                    dy = p1[1] - p2[1]

                return dx * dx + dy * dy
            }

            // square distance from a point to a segment
            const getSqSegDist = (p, p1, p2) => {
                let x = p1[0],
                    y = p1[1],
                    dx = p2[0] - x,
                    dy = p2[1] - y

                if (dx !== 0 || dy !== 0) {
                    let t = ((p[0] - x) * dx + (p[1] - y) * dy) / (dx * dx + dy * dy)

                    if (t > 1) {
                        x = p2[0]
                        y = p2[1]
                    } else if (t > 0) {
                        x += dx * t
                        y += dy * t
                    }
                }

                dx = p[0] - x
                dy = p[1] - y

                return dx * dx + dy * dy
            }

            // basic distance-based simplification
            const simplifyRadialDist = (points, sqTolerance) => {
                let prevPoint = points[0],
                    newPoints = [prevPoint],
                    point

                for (let i = 1, len = points.length; i < len; i++) {
                    point = points[i]

                    if (getSqDist(point, prevPoint) > sqTolerance) {
                        newPoints.push(point)
                        prevPoint = point
                    }
                }

                if (prevPoint !== point) newPoints.push(point)

                return newPoints
            }

            // simplification using optimized Douglas-Peucker algorithm with recursion elimination
            const simplifyDouglasPeucker = (points, sqTolerance) => {
                var len = points.length,
                    MarkerArray = typeof Uint8Array !== "undefined" ? Uint8Array : Array,
                    markers = new MarkerArray(len),
                    first = 0,
                    last = len - 1,
                    stack = [],
                    newPoints = [],
                    i,
                    maxSqDist,
                    sqDist,
                    index

                markers[first] = markers[last] = 1

                while (last) {
                    maxSqDist = 0

                    for (i = first + 1; i < last; i++) {
                        sqDist = getSqSegDist(points[i], points[first], points[last])

                        if (sqDist > maxSqDist) {
                            index = i
                            maxSqDist = sqDist
                        }
                    }

                    if (maxSqDist > sqTolerance) {
                        markers[index] = 1
                        stack.push(first, index, index, last)
                    }

                    last = stack.pop()
                    first = stack.pop()
                }

                for (i = 0; i < len; i++) {
                    if (markers[i]) newPoints.push(points[i])
                }

                return newPoints
            }

            // both algorithms combined for awesome performance
            const simplify = (points, tolerance, highestQuality) => {
                if (points.length <= 1) return points

                let sqTolerance = tolerance !== undefined ? tolerance * tolerance : 1

                points = highestQuality ? points : simplifyRadialDist(points, sqTolerance)
                points = simplifyDouglasPeucker(points, sqTolerance)

                return points
            }

            this.canvas.boundsPathLimit = new paper.Path({
                segments: simplify(getPoints(img._image)),
                locked: true,
                insert: false,
                fillColor: 'black',
                strokeColor: 'black',
                closed: true
            })
            this.canvas.boundsPathLimit.scale(img.bounds.size.width / 2000)
            this.canvas.boundsPathLimit.position = this.canvas.boundsPathLimit.position.subtract(new paper.Point(1000, 1000))
        },
        exchangeTool(toolName) {
            if (this.drawings && this.drawings.length < 1) return
            const drawing = this.drawings[this.drawings.length - 1]
            const position = drawing.position
            this.removeDrawing(drawing)
            this.activateTool(toolName, position)
        },
        async drawHeatmap(points, scaleFactor, colorConditions) {
            let image = this.canvas.project.activeLayer.children.find(child => (child.data || {}).type === 'bg-image-1')
            let heatmapImage = this.canvas.project.activeLayer.children.filter(child => (child.data || {}).type === 'bg-image-heatmap')
            heatmapImage && heatmapImage.forEach(hImage => {
                hImage.remove()
            })
            if (!image) return
            if (!points) return
            const imageCanvas = document.createElement('canvas')
            imageCanvas.width = image.bounds.size.width
            imageCanvas.height = image.bounds.size.height

            colorConditions && colorConditions.forEach((condition, index) => {
                points.forEach(point => {
                    if (point[condition.key] === condition.value || (condition.key === 'default' && condition.value === 'default')) {
                        point._gradient = {
                            0.25: condition['0.25'],
                            0.55: condition['0.55'],
                            0.85: condition['0.85'],
                            1: condition['1.0'],
                        }
                        point._condition = index
                    }
                })
            })
            let groupBy = (arr, property) => {
                return arr.reduce(function (memo, x) {
                    if (!memo[x[property]]) { memo[x[property]] = []; }
                    memo[x[property]].push(x);
                    return memo;
                }, {})
            }
            let sortedPoints = groupBy(points, '_condition')
            let imageSrc = []
            for (let prop in sortedPoints) {
                if (Object.prototype.hasOwnProperty.call(sortedPoints, prop)) {
                    if (Array.isArray(sortedPoints[prop]) && sortedPoints[prop].length > 0) {
                        let data = { max: sortedPoints[prop].length, data: [], gradient: null }
                        sortedPoints[prop].forEach(point => {
                            data.data.push({
                                x: Math.floor(image.bounds.size.width / 2 + point.centerDot.x),
                                y: Math.floor(image.bounds.size.height / 2 + point.centerDot.y),
                                value: data.max * Number(scaleFactor),
                            })
                            if (!data.gradient) data.gradient = point._gradient
                        })
                        const heatmapDiv = document.createElement('div')
                        heatmapDiv.style.width = `${image.bounds.size.width}px`
                        heatmapDiv.style.height = `${image.bounds.size.height}px`
                        const heatmapInstance = Heatmap.create({
                            container: heatmapDiv,
                            width: image.bounds.size.width,
                            height: image.bounds.size.height,
                            gradient: data.gradient
                        })
                        heatmapInstance.setData(data)
                        imageSrc.push(heatmapInstance.getDataURL())
                    }
                }
            }
            await Promise.all(
                imageSrc.map(async (imageSrc, i) => {
                    const heatmapLayerImage = new Image()
                    const syncPromise = new Promise((resolve) => {
                        heatmapLayerImage.onload = () => {
                            imageCanvas.getContext("2d").drawImage(heatmapLayerImage, 0, 0)
                            resolve()
                        }
                        heatmapLayerImage.src = imageSrc
                    })
                    await syncPromise
                })
            ).then(() => {
                new paper.Raster({
                    source: imageCanvas.toDataURL(),
                    position: [0, 0],
                    crossOrigin: 'anonymous',
                    locked: true,
                    data: { type: 'bg-image-heatmap' }
                })
            })
        }
    },
    created() {
        emitter.on("annotatorEvent", ({ type, value }) => {
            console.log("emitted annotatorEvent", type, value)
            if (type == "exchangeTool") {
                this.exchangeTool(value.value)
            } else if (type == "filterObjectsArray") {
                this.filterObjectsArray(value)
            }
        })
    },
    mounted() {
        console.log('annotator canvas | mounted')

        if (this.element.defaultView && (!this._c_activeView || !_.isEqual(_.get(this.computedValue, 'activeView'), this.element.defaultView))) {
            console.log('annotator canvas: init() - set default view')
            this.onUpdate({ key: `${this.computedKey}.activeView`, value: this.element.defaultView, autoSave: this.element.autoSave })
        } else {
            this.init({ zoom: this.element.zoom !== undefined ? this.element.zoom : true, pan: this.element.pan !== undefined ? this.element.pan : true, defaultView: this.element.defaultView })
        }
        console.log(this.element)
        // this.init({ zoom: true, pan: true })


    },
    beforeUnmount() {
        // clearing all events
        emitter.all.clear()
    },
    beforeUnmount() {
        console.log('beforeUnmount | destroyCanvas')
        this.destroyCanvas()
    }

}
</script>
