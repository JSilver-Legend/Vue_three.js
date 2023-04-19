<template>
  <ag-grid-vue :class="element.class" :columnDefs="columnDefs" :rowData="rowData.value" :defaultColDef="defaultColDef"
    :detailCellRendererParams='{ ...detailCellRendererParams }' :rowGroupPanelShow="rowGroupPanelShow"
    :sideBar="sideBarDefs" :onFirstDataRendered="onFirstDataRendered" :getRowId="getRowId" :masterDetail="masterDetail"
    rowSelection="multiple" :isExternalFilterPresent="isExternalFilterPresent"
    :doesExternalFilterPass="doesExternalFilterPass" :rowSelection="'single'" @selection-changed="onSelectionChanged"
    animateRows="true" enableCellTextSelection="true" @grid-ready="onGridReady">
  </ag-grid-vue>
</template>

<script>
import _ from "lodash"
import * as dayjs from 'dayjs'
import { AgGridVue } from "ag-grid-vue3"  // the AG Grid Vue Component
import * as customParseFormat from 'dayjs/plugin/customParseFormat'
import { reactive, onMounted, onBeforeUnmount, ref, computed } from "vue"

import emitter from '@/services/emitter'

import { useElementCondition } from '@/composables/appSys/useElementCondition'
import { usePlatformUserManagement } from '@/composables/usePlatformUserManagement'
import { usePlatformSysStore } from '@/store/platformSys'
import { useDynamicAppsStore } from "@/store/dynamicApps"

import CellRenderer from "@/components/agGridComponents/cellRenderer.vue"
import LinkCellRenderer from "@/components/agGridComponents/linkCellRenderer.vue"
import ImgCellRenderer from "@/components/agGridComponents/imgCellRenderer.vue"
import CustomFilter from "@/components/agGridComponents/customFilter.vue"

import "ag-grid-community/styles/ag-grid.css" // Core grid CSS, always needed
import 'ag-grid-enterprise'
import "ag-grid-community/styles/ag-theme-balham.css" // Optional theme CSS

export default {
  props: ["element", "entityData"],
  // name: "App",
  components: {
    'ag-grid-vue': AgGridVue,
    CellRenderer,
    // eslint-disable-next-line vue/no-unused-components
    LinkCellRenderer,
    // eslint-disable-next-line vue/no-unused-components
    ImgCellRenderer,
    // eslint-disable-next-line vue/no-unused-components
    CustomFilter,
  },

  setup(props, ctx) {

    dayjs.extend(customParseFormat)

    const { isConditionQualified } = useElementCondition()
    const platformUserManagement = usePlatformUserManagement()
    const platformSysStore = usePlatformSysStore()
    const dynamicAppsStore = useDynamicAppsStore()

    const gridApi = ref(null) // Optional - for accessing Grid's API
    const gridColumnApi = ref(null)
    const dialogState = ref(false) // Optional - for accessing Grid's API
    const type = ref('') // Optional - for accessing Grid's API

    const dateFormats = ref(["DD.MM.YY hh:mm", "YYYY-MM-DD"])
    if (props.element.sourceDateFormats) {
      dateFormats.value = props.element.sourceDateFormats
    }

    // Obtain API from grid's onGridReady event
    const onGridReady = (params) => {
      gridApi.value = params.api
      gridColumnApi.value = params.columnApi
    }

    const rowData = reactive({}) // Set rowData to Array of Objects, one Object per Row

    const getCellMarkup = (cellRenderer) => {
      let merkup = null
      props.element.children.forEach(element => {
        if (element.id == cellRenderer) {
          merkup = element
        }
      })
      return merkup
    }

    const cellRendererSelector = (cellRenderer) => {
      return (() => {
        return {
          component: 'CellRenderer',
          params: { markup: getCellMarkup(cellRenderer), entityData: props.entityData }
        }
      })
    }

    const formatDate = (params) => {
      // console.log('formatDate | params', params.colDef.displayDateFormat)
      // return 'format!!!'
      return dayjs(params.value, dateFormats.value/* params.colDef.sourceDateFormat */).format(params.colDef.displayDateFormat)
    }

    const filterDateParams = {
      buttons: ['reset', 'apply', 'cancel'],
      comparator: (filterLocalDateAtMidnight, cellValue) => {
        if (cellValue == null) return -1
        const dateObject = dayjs(cellValue, dateFormats.value)
        const cellDate = new Date(
          Number(dateObject.format("YYYY")),
          Number(dateObject.format("MM")) - 1,
          Number(dateObject.format("DD"))
        )
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1
        }
        return 0
      },
      browserDatePicker: true,
    }

    // HELPER FOR DATE COMPARISON
    const _monthToNum = (date) => {
      if (date === undefined || date === null) {
        return null
      }

      const dateObject = dayjs(date, dateFormats.value)

      const yearNumber = Number(dateObject.format("YYYY"))
      const monthNumber = Number(dateObject.format("MM"))
      const dayNumber = Number(dateObject.format("DD"))

      const result = yearNumber * 10000 + monthNumber * 100 + dayNumber
      return result
    }

    // DATE COMPARATOR FOR SORTING
    const dateComparator = (date1, date2) => {
      const date1Number = _monthToNum(date1)
      const date2Number = _monthToNum(date2)

      if (date1Number === null && date2Number === null) {
        return 0
      }
      if (date1Number === null) {
        return -1
      }
      if (date2Number === null) {
        return 1
      }

      return date1Number - date2Number
    }

    const getFormattedColumnDefs = (columnDefs) => {
      columnDefs.forEach(element => {

        if (element.cellRenderer && element.cellRenderer !== 'agGroupCellRenderer') {
          element.cellRendererSelector = cellRendererSelector(element.cellRenderer)
        }

        if (element.valueFormatter) {
          if (element.valueFormatter == 'formatDate') {
            element.valueFormatter = formatDate
          }
        }

        if (element.filterParams) {
          if (element.filterParams == 'filterDateParams') {
            element.filterParams = filterDateParams
          }
        }

        if (element.comparator) {
          if (element.comparator == 'dateComparator') {
            element.comparator = dateComparator
          }
        }
      })
      return columnDefs
    }

    // Each Column Definition results in one Column.
    const columnDefs = reactive(getFormattedColumnDefs(props.element.columnDefs))
    const masterDetail = reactive(_.get(props.element, 'masterDetail', false))

    // DefaultColDef sets props common to all Columns
    const defaultColDef = props.element.defaultColDef

    // DefaultColDef sets props common to all Columns
    const sideBarDefs = props.element.sideBarDefs

    const detailCellRendererParams = reactive(props.element.detailCellRendererParams)
    if (detailCellRendererParams?.detailKey) {
      detailCellRendererParams.getDetailRowData = (params) => {
        params.successCallback(params.data[detailCellRendererParams.detailKey]);
      }
    }

    const toggleDialog = () => {
      dialogState.value = !dialogState.value
    }

    let formattedQuery = computed(() => props.element.query ? [...props.element.query] : [{}])

    // Example load data from sever

    const getRowId = (params) => {
      if (props.element.platformUsers === true) {
        return params.data.email // for platformUser -- set email as row id
      } else {
        return params.data._id
      }
    }

    onMounted(() => {
      if (props.element.platformUsers === true) {
        platformUserManagement.platformUserGet().then(remoteRowData => {
          console.log('platformUserManagement.platformUserGet', remoteRowData)
          rowData.value = remoteRowData
        })
      } else if (props.element.assignedKey) {
        rowData.value = props.entityData[props.element.assignedKey]
      } else if (props.element.collection) {
        dynamicAppsStore.get({ apiPath: props.element.collection, params: formattedQuery.value }).then(remoteRowData => {
          rowData.value = remoteRowData
        })
      }
    })

    const ImgCellRendererF = () => {
      return {
        component: 'ImgCellRenderer',
        params: { values: ['Male', 'Female'] }
      }
    }

    const onFirstDataRendered = (params) => {
      // arbitrarily expand a row for presentational purposes
      setTimeout(function () {
        params.api.getDisplayedRowAtIndex(1).setExpanded(true)
      }, 0)
    }

    /******************* START ****************-/
    * Adding code to add/update/delete grid row data
    ********************************************/

    const agGridTransaction = (type, data) => {
      console.log('emitted agGridTransaction', type, data)

      // get only query data to update grid
      let transactionRow = data
      if (type !== 'remove') {
        let filteredKeys = _.get(formattedQuery.value, "[1]", null)
        if (filteredKeys && _.keysIn(filteredKeys).length > 0) {
          transactionRow = _.pick(data, _.keysIn(filteredKeys))
        }
      }
      const transactionResult = gridApi.value.applyTransaction({ [type]: [transactionRow] })

      // logging grid update result
      transactionResult[type].forEach(function (rowNode) {
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
        console.log('AG GRID TRANSACTION - ROW NODE ->', rowNode.data)
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
      })
    }

    emitter.on('agGridTransaction', ({ type, data }) => {
      agGridTransaction(type, data)
    })


    //------------------ GRID EVENTS STARTS ---------------------
    const agGridClearSort = () => {
      gridColumnApi.value.applyColumnState({
        defaultState: { sort: null }
      })
    }

    const agGridSort = (data) => {
      gridColumnApi.value.applyColumnState(data)
    }

    const filterOptions = ref(null)

    const onFilterChanged = (data) => {
      filterOptions.value = data
      gridApi.value.onFilterChanged()
    }

    const isExternalFilterPresent = () => {
      // if ageType is not everyone, then we are filtering
      return filterOptions.value !== null
    }

    const doesExternalFilterPass = (node) => {
      if (node.data) {
        return isConditionQualified(filterOptions.value, node.data)
      }
      return true
    }

    emitter.on('agGridEvent', ({ type, data }) => {
      console.log('emitted agGridEvent')
      if (type == 'agGridClearSort') {
        agGridClearSort()
      }
      else if (type == 'agGridSort') {
        agGridSort(data)
      }
      else if (type == 'agGridFilter') {
        onFilterChanged(data)
      }
    })
    //------------------ GRID EVENTS END ---------------------

    onBeforeUnmount(() => {
      // clearing all events
      emitter.all.clear()
    })


    /******************* END *****************/



    /*---------------  ROW SELECTION -  START   --------------*/
    const selectedRows = ref({})
    const onSelectionChanged = (params) => {
      console.log('onSelectionChanged!!!', params)
      selectedRows.value = gridApi.value.getSelectedRows()
      if (selectedRows.value.length) {
        ctx.emit('return', selectedRows.value[0])
        if (props.element.toggleDialog) {
          platformSysStore.toggleDialog(
            props.element.dialogKey
          )
        }
      }
    }
    /*---------------  ROW SELECTION -  END   --------------*/

    return {
      ImgCellRendererF,
      onGridReady,
      columnDefs,
      rowData,
      type,
      toggleDialog,
      dialogState,
      defaultColDef,
      detailCellRendererParams,
      sideBarDefs,
      rowGroupPanelShow: 'always',
      masterDetail,
      deselectRows: () => {
        gridApi.value.deselectAll()
      },
      onFirstDataRendered,

      // debug functions
      formatDate,
      getRowId,
      filterOptions,
      isExternalFilterPresent,
      doesExternalFilterPass,

      selectedRows,
      onSelectionChanged
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ag-grid {
  height: 100%;
}

.dialog-main {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 999;
  max-width: 600px;
  background-color: #fff;
  border: solid 1px #eee;
  padding: 20px;
  margin: 0 auto;
}

.dialog:before {
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  z-index: 99;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
</style>
