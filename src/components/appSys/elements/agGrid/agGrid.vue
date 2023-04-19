<template>
  <ag-grid-vue :class="element.class" :style="element.style" :rowHeight="element.rowHeight"
    :headerHeight="element.headerHeight" :rowData="rowData.value" :getRowId="getRowId" :columnDefs="columnDefs"
    :defaultColDef="defaultColDef" :sideBar="element.sideBar" :detailCellRendererParams="detailCellRendererParams"
    :rowGroupPanelShow="element.rowGroupPanelShow" :rowSelection="element.rowSelection" :animateRows="true"
    :enableCellTextSelection="true" :isExternalFilterPresent="isExternalFilterPresent"
    :doesExternalFilterPass="doesExternalFilterPass" :masterDetail="masterDetail" @grid-ready="onGridReady"
    @selection-changed="onSelectionChanged">
  </ag-grid-vue>
</template>

<script>
import _ from "lodash"
import "ag-grid-enterprise"
import { AgGridVue } from "ag-grid-vue3"

import { reactive, onMounted, onBeforeUnmount, ref } from "vue"

import emitter from "@/services/emitter"

import CellRenderer from "@/components/agGridComponents/cellRenderer.vue"

import { usePlatformSysStore } from "@/store/platformSys"
import { useDynamicAppsStore } from "@/store/dynamicApps"

import { useAppNavigation } from "@/composables/navigation/useAppNavigation"
import { usePlatformUserManagement } from "@/composables/usePlatformUserManagement"
import { useElementCondition } from "@/composables/appSys/useElementCondition"
import { useHelperFunctions } from "@/composables/useHelperFunctions"

import { useMq } from "vue3-mq"

import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-balham.css"

export default {
  props: ["element", "entityData"],
  components: {
    AgGridVue,
    CellRenderer
  },
  setup(props, ctx) {

    const $mq = useMq()
    const appNavigation = useAppNavigation()
    const platformSysStore = usePlatformSysStore()
    const dynamicAppsStore = useDynamicAppsStore()
    const platformUserManagement = usePlatformUserManagement()
    const helperFunctions = useHelperFunctions()
    const { isConditionQualified } = useElementCondition()
    const color = ref('#ff0000')

    const gridApi = ref(null)
    const gridColumnApi = ref(null)

    const onGridReady = (params) => {
      gridApi.value = params.api
      gridColumnApi.value = params.columnApi
    }

    const getCellMarkup = (cellRenderer) => {
      let markup = null
      // for navigation cellRenderer is the markup instead of children 
      props.element?.cellRenderer?.forEach(element => {
        if (element.id == cellRenderer) {
          markup = element
        }
      })
      return markup
    }

    const cellRendererSelector = (cellRenderer) => {
      return (() => {
        return {
          component: "CellRenderer",
          params: {
            markup: getCellMarkup(cellRenderer),
            entityData: props.entityData,
            collection: props.element.collection
          }
        }
      })
    }

    const valueGetterFunc = (expression) => {
      return ((params) => {
        return eval(expression)
      })
    }

    const valueFormatterFunc = (expression) => {
      return ((params) => {
        return eval(expression)
      })
    }

    const getFormattedColumnDefs = (columnDefs) => {
      columnDefs.forEach(element => {

        if (element.cellRenderer && element.cellRenderer !== "agGroupCellRenderer") {
          element.cellRendererSelector = cellRendererSelector(element.cellRenderer)
        }

        if (element.valueGetter) {
          element.valueGetter = valueGetterFunc(element.valueGetter)
        }

        if (element.valueFormatter) {
          element.valueFormatter = valueFormatterFunc(element.valueFormatter)
        }

        /* if (element.valueFormatter) {
          if (element.valueFormatter == "formatDate") {
            element.valueFormatter = formatDate
          }
        }

        if (element.filterParams) {
          if (element.filterParams == "filterDateParams") {
            element.filterParams = filterDateParams
          }
        }

        if (element.comparator) {
          if (element.comparator == "dateComparator") {
            element.comparator = dateComparator
          }
        } */
      })
      return columnDefs
    }

    const rowData = reactive({})
    const getRowId = (params) => {
      if (props.element.platformUsers === true) {
        return params.data.email // for platformUser -- set email as row id
      } else {
        return params.data._id
      }
    }

    const columnDefs = getFormattedColumnDefs(props.element.columnDefs)
    const defaultColDef = props.element.defaultColDef
    const rowGroupPanelShow = props.element.rowGroupPanelShow

    const sideBarDefs = props.element.sideBarDefs
    const detailCellRendererParams = ref(props.element.detailCellRendererParams)
    if (detailCellRendererParams.value?.detailGridOptions?.columnDefs) {
      detailCellRendererParams.value.detailGridOptions.columnDefs = getFormattedColumnDefs(detailCellRendererParams.value.detailGridOptions.columnDefs)
    }
    if (detailCellRendererParams.value?.detailKey) {
      detailCellRendererParams.value.getDetailRowData = (params) => {
        params.successCallback(params.data[detailCellRendererParams.value.detailKey])
      }
    }

    const masterDetail = _.get(props.element, "masterDetail", false)

    const formattedQuery = ref(props.element.query ? [...props.element.query] : [{}])
    formattedQuery.value[0] = helperFunctions.interpretQuery(formattedQuery.value[0])
    // set query object to dynamicAppStore to use while cddp event
    _.set(dynamicAppsStore.apps, `${props.element.collection}.parentAssignment`, formattedQuery.value[0])

    const selectFirstRow = () => {
      if (props.element.selectFirst === true) {
        forwardAppNavigation(rowData.value[0])
      }
    }

    onMounted(() => {
      if (props.element.platformUsers === true) {
        platformUserManagement.platformUserGet().then(remoteRowData => {
          console.log("platformUserManagement.platformUserGet", remoteRowData)
          rowData.value = remoteRowData
          selectFirstRow()
        })
      } else if (props.element.subDocuments) {
        rowData.value = _.get(props.entityData, props.element.subDocuments, [])
        selectFirstRow()
      } else if (props.element.collection) {
        dynamicAppsStore.get({ apiPath: props.element.collection, params: formattedQuery.value }).then(remoteRowData => {
          rowData.value = remoteRowData
          selectFirstRow()
        })
      }
    })

    /*---------------  ROW SELECTION -  START   --------------*/
    // const selectedRows = ref({})
    const onSelectionChanged = async () => {

      const selectedRows = gridApi.value.getSelectedRows()
      // console.log('onSelectionChanged', selectedRows[0])

      if (selectedRows.length) {

        if (props.element.saveOnRowClick !== false)
          ctx.emit("return", selectedRows[0])
        /* if (props.element.toggleDialog) {
          platformSysStore.toggleDialog(
            props.element.dialogKey
          )
        }  */

        // Navigation cell selection 
        if (props.element.listType === 'folderList' || props.element.listType === 'documentList') {
          await forwardAppNavigation(selectedRows[0])
        }
      }
      // gridApi.value.refreshCells({ force: true })
    }

    const forwardAppNavigation = async ({ _id }) => {
      // select document
      let list = await dynamicAppsStore.get({
        apiPath: props.element.collection,
        params: [{ _id }],
      })
      if (list && list.length) {
        dynamicAppsStore.select({ apiPath: props.element.collection, data: list[0] })
        if ($mq.current == 'xs' || $mq.current == 'small' && props.element.listType !== 'folderList') {
          platformSysStore.showSidebar = false
        }
      }

      // navigate to child menu for foderList
      if (props.element.listType === 'folderList') {
        appNavigation.forwardAppNavigation(props.element)
      }
    }
    /*---------------  ROW SELECTION -  END   --------------*/

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

    emitter.on("agGridEvent", ({ type, data }) => {
      console.log("emitted agGridEvent")
      if (type == "agGridClearSort") {
        agGridClearSort()
      }
      else if (type == "agGridSort") {
        agGridSort(data)
      }
      else if (type == "agGridFilter") {
        onFilterChanged(data)
      }
    })
    //------------------ GRID EVENTS END ---------------------


    /************************** START ************************
    ***** Adding code to add/update/delete grid row data *****
    *********************************************************/

    const agGridTransaction = (type, data) => {
      console.log("emitted agGridTransaction", type, data)

      // get only query data to update grid
      let transactionRow = data
      if (type !== "remove") {
        let filteredKeys = _.get(formattedQuery.value, "[1]", null)
        if (filteredKeys && _.keysIn(filteredKeys).length > 0) {
          transactionRow = _.pick(data, _.keysIn(filteredKeys))
        }
      }
      const transactionResult = gridApi.value.applyTransaction({ [type]: [transactionRow] })

      // logging grid update result
      transactionResult[type].forEach(function (rowNode) {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
        console.log("AG GRID TRANSACTION - ROW NODE ->", rowNode.data)
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
      })
    }

    emitter.on("agGridTransaction", ({ type, data }) => {
      agGridTransaction(type, data)
    })

    /************************** END ************************
    ***** Adding code to add/update/delete grid row data *****
    *********************************************************/

    //-- agGridWrite -- START 

    const agGridWrite = () => {

      // Loop through all the master rows
      gridApi.value.forEachNode(function (masterNode) {

        // check if the master row is checked 
        if (masterNode.isSelected()) {

          let finalData = masterNode.data
          console.log('masterNode', masterNode)

          // Check if this master row has a detail grid
          if (masterNode.detailNode) {

            finalData = { ...finalData, [detailCellRendererParams.value.detailKey]: [] }

            // Get the detail grid instance for this master row
            var detailGridInfo = gridApi.value.getDetailGridInfo("detail_" + masterNode.id);
            var detailApi = detailGridInfo.api;

            // Create an empty array to hold the checked rows for this detail grid
            var checkedRows = [];

            // Loop through all the rows that match the current filter and sort criteria for this detail grid
            detailApi.forEachNodeAfterFilterAndSort(function (node) {
              // Check if the row is selected
              if (node.isSelected()) {
                // If it is, add the corresponding data object to the checkedRows array
                checkedRows.push(node.data);
              }
            });

            // Log the checked rows for this detail grid to the console
            finalData = { ...finalData, [detailCellRendererParams.value.detailKey]: checkedRows }
          }

          console.log('Checked rows for master and detail: ', finalData);
          ctx.emit("return", finalData)
        }
      })
    }

    emitter.on(props.element.agGridId + "agGridWrite", (info) => {
      console.log('Emitted - ', info)
      agGridWrite()
    })

    //-- agGridWrite -- END 

    onBeforeUnmount(() => {
      // clearing all events
      emitter.all.clear()
    })

    return {
      rowData,
      getRowId,
      columnDefs,
      defaultColDef,
      sideBarDefs,
      rowGroupPanelShow,
      detailCellRendererParams,
      masterDetail,
      onGridReady,
      onSelectionChanged,
      isExternalFilterPresent,
      doesExternalFilterPass
    }
  }
}
</script>


<style lang="scss" scoped>
.ag-grid {
  height: 100%;
}

/*.ag-theme-balham {
  !* bright green, 10% opacity *!
!*  --ag-background-color: v-bind(color);*!
  !*--ag-background-color: transparent;*!
  !*--ag-background-color: #ff0000;*!
  --ag-selected-row-background-color: rgba(102, 255, 0, 0.5);
  --ag-cell-horizontal-padding: 0px;
  --ag-borders: none;
  --ag-borders-row:  none;
  --ag-cell-horizontal-border: 1px solid transparent;
}*/
</style>
