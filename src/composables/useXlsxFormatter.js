export function useXlsxFormatter() {

    const convertXlsxArrayToJson = (xlsxDataArray, importRules) => {

        let formattedJson = []

        let formattedImportRules = {}
        importRules.forEach(element => {
            formattedImportRules[element.sourceFieldName] = { ...element, targetKeyName: element.targetKeyName || element.sourceFieldName }
        })

        for (let index = 1; index < xlsxDataArray.length; index++) {
            const element = xlsxDataArray[index]
            let jsonObject = {}
            for (let elementIndex = 0; elementIndex < element.length; elementIndex++) {
                let value = element[elementIndex]

                value = value.toString().trim()

                switch (formattedImportRules[xlsxDataArray[0][elementIndex]].dataType) {
                    case "string":
                        // value = value.toString()
                        break;
                    case "number":
                        value = Number(value.toString())
                        break;
                    case "date":
                        // update value here for date
                        break;
                    case "time":
                        // update value here for time
                        break;
                }

                jsonObject[formattedImportRules[xlsxDataArray[0][elementIndex]].targetKeyName] = value
            }
            formattedJson.push(jsonObject)
            // break // remove after debug
        }

        return formattedJson
    }

    return {
        convertXlsxArrayToJson
    }
}
