import { defineAsyncComponent } from 'vue'
import { app } from './main-app';

app.component('container', defineAsyncComponent(() =>
    import('@/components/appSys/container.vue')
));

app.component('overlay', defineAsyncComponent(() =>
    import('@/components/appSys/container.vue')
));

app.component('element', defineAsyncComponent(() =>
    import('@/components/appSys/element.vue')
));

app.component('staticHtmlTag', defineAsyncComponent(() =>
    import('@/components/appSys/elements/system/staticHtmlTag.vue')
));

app.component('tableRow', defineAsyncComponent(() =>
    import('@/components/appSys/elements/system/tableRow.vue')
));


app.component('loopArray', defineAsyncComponent(() =>
    import('@/components/appSys/elements/system/loopArray.vue')
));

app.component('fileInput', defineAsyncComponent(() =>
    import('@/components/appSys/elements/generic/fileInput.vue')
));
app.component('radioGroup', defineAsyncComponent(() =>
    import('@/components/appSys/elements/generic/radioGroup.vue')
));
app.component('selectInput', defineAsyncComponent(() =>
    import('@/components/appSys/elements/generic/selectInput.vue')
));

app.component('textInput', defineAsyncComponent(() =>
    import('@/components/appSys/elements/tailwindUI/TailwindUITextInput.vue')
));
app.component('textareaInput', defineAsyncComponent(() =>
    import('@/components/appSys/elements/tailwindUI/tailwindUITextareaInput.vue')
));
app.component('checkboxInput', defineAsyncComponent(() =>
    import('@/components/appSys/elements/tailwindUI/tailwindUICheckboxInput.vue')
));
app.component('buttonGroup', defineAsyncComponent(() =>
    import('@/components/appSys/elements/tailwindUI/headlessUIButtonGroup.vue')
));
app.component('dropdownPanel', defineAsyncComponent(() =>
    import('@/components/appSys/elements/tailwindUI/headlessUIDropdownPanel.vue')
));
app.component('listboxSelectInput', defineAsyncComponent(() =>
    import('@/components/appSys/elements/tailwindUI/headlessUIListboxSelectInput.vue')
));
app.component('switchInput', defineAsyncComponent(() =>
    import('@/components/appSys/elements/tailwindUI/headlessUISwitchInput.vue')
));
app.component('radioInput', defineAsyncComponent(() =>
    import('@/components/appSys/elements/tailwindUI/tailwindUIRadioInput.vue')
));

app.component('toggleButton', defineAsyncComponent(() =>
    import('@/components/appSys/elements/tailwindUI/headlessUIToggleButton.vue')
));

app.component('draggable', defineAsyncComponent(() =>
    import('@/components/appSys/elements/vuedraggable/vueDraggableNext.vue')
));
app.component('dragItems', defineAsyncComponent(() =>
    import('@/components/appSys/elements/vuedraggable/dragItems.vue')
));
app.component('dragSectionPane', defineAsyncComponent(() =>
    import('@/components/appSys/elements/vuedraggable/dragSectionPane.vue')
));
app.component('qrcode', defineAsyncComponent(() =>
    import('@/components/appSys/elements/xtras/qrcode.vue')
));

app.component('authEvent', defineAsyncComponent(() =>
    import('@/components/appSys/elements/events/authEvent.vue')
));
app.component('cddpEvent', defineAsyncComponent(() =>
    import('@/components/appSys/elements/events/cddpEvent.vue')
));
// platform user management events
app.component('puEvent', defineAsyncComponent(() =>
    import('@/components/appSys/elements/events/puEvent.vue')
));
app.component('comEvent', defineAsyncComponent(() =>
    import('@/components/appSys/elements/events/comEvent.vue')
));
app.component('agGridEvent', defineAsyncComponent(() =>
    import('@/components/appSys/elements/events/agGridEvent.vue')
));

app.component('navEvent', defineAsyncComponent(() =>
    import('@/components/appSys/elements/events/navEvent.vue')
));
app.component('listEvent', defineAsyncComponent(() =>
    import('@/components/appSys/elements/events/listEvent.vue')
));
app.component('uploadEvent', defineAsyncComponent(() =>
    import('@/components/appSys/elements/events/uploadEvent.vue')
));
app.component('annotatorEvent', defineAsyncComponent(() =>
    import('@/components/appSys/elements/events/annotatorEvent.vue')
));

app.component('uploadcareStandardFileUpload', defineAsyncComponent(() =>
    import('@/components/appSys/elements/uploadcare/uploadcareStandardFileUpload.vue')
));

app.component('uploadcareCustomFileUpload', defineAsyncComponent(() =>
    import('@/components/appSys/elements/uploadcare/uploadcareCustomFileUpload.vue')
));

app.component('uploadcareFileProvision', defineAsyncComponent(() =>
    import('@/components/appSys/elements/uploadcare/uploadcareFileProvision.vue')
));

app.component('dropZone', defineAsyncComponent(() =>
    import('@/components/appSys/elements/xtras/dropZone.vue')
));

app.component('svgRating', defineAsyncComponent(() =>
    import('@/components/appSys/elements/xtras/svgRating.vue')
));

app.component('annotatorCanvas', defineAsyncComponent(() =>
    import('@/components/appSys/elements/annotator/annotatorCanvas.vue')
));

app.component('annotatorMeasurements', defineAsyncComponent(() =>
    import('@/components/appSys/elements/annotator/annotatorMeasurements.vue')
));

app.component('agGrid', defineAsyncComponent(() =>
    import('@/components/appSys/elements/agGrid/agGrid.vue')
));

app.component('videoPlayer', defineAsyncComponent(() =>
    import('@/components/appSys/elements/videoPlayer/videoPlayer.vue')
));

app.component('vueSplide', defineAsyncComponent(() =>
    import('@/components/appSys/elements/vueSplide/vueSplide.vue')
));

app.component('qrReader', defineAsyncComponent(() =>
    import('@/components/appSys/elements/qrReader/qrReader.vue')
));

app.component('heTree', defineAsyncComponent(() =>
    import('@/components/appSys/elements/heTree/heTree.vue')
));

app.component('heatMap', defineAsyncComponent(() =>
    import('@/components/appSys/elements/heatMap/heatMap.vue')
));

app.component('rangeSlider', defineAsyncComponent(() =>
    import('@/components/appSys/elements/rangeSlider/rangeSlider.vue')
));