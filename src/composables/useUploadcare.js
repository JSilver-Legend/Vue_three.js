import _ from 'lodash'
import uploadcare from 'uploadcare-widget/uploadcare.lang.en.min.js'

import { usePlatformSysStore } from '@/store/platformSys'

//const publicKey = "c304577ae1bc1f2a79d7"  // testaccount
//const publicKey = "e89bdc3fe12505a88878"  // HEO COATING
const publicKey = "b4ccf4929cab310dd354"  // HEO COATING DWP

export function useUploadcare() {

    const platformSysStore = usePlatformSysStore()

    const uploadcareStandardFileUpload = async ({ type = 'object', files, key, uploaderResponseKey = 'dataObject', onSingleFileUploadCallback = () => null }) => {

        return new Promise((resolve) => {

            const uploadedFiles = uploadcare.filesFrom(type, files, {
                publicKey,
                multiple: true
            })

            const promises = []

            uploadedFiles.forEach((file, index) => {

                // initialize image object
                onSingleFileUploadCallback({
                    key: `${key}[${index}]`,
                    value: { [uploaderResponseKey]: {} }
                })

                promises.push(new Promise((resolve, reject) => {
                    file.progress(function (uploadInfo) {
                        // console.log(`file.progress - [${index}] -> ${Math.round(uploadInfo.progress * 100)}%`)
                        _.set(platformSysStore.uploadcareProgressHelper, `${key}[${index}]`, Math.round(uploadInfo.progress * 100))
                    }).done(function (fileInfo) {
                        // console.log(`uploaded success - [${index}] -> `, fileInfo)
                        _.set(platformSysStore.uploadcareProgressHelper, `${key}[${index}]`, -1)
                        // return uploaded image object
                        onSingleFileUploadCallback({
                            key: `${key}[${index}]`,
                            value: { [uploaderResponseKey]: fileInfo }
                        })
                        resolve({ [uploaderResponseKey]: fileInfo })
                    }).fail(function (errorType, fileInfo, error) {
                        // console.log(`upload error - [${index}] -> `, errorType, fileInfo, error)
                        _.set(platformSysStore.uploadcareProgressHelper, `${key}[${index}]`, -1)
                        reject()
                    })
                })
                )
            })

            Promise.all(promises).then((response) => {
                // console.log('Promise.all', response)
                resolve(response)
            });

        })
    }

    return {
        uploadcareStandardFileUpload
    }
}
