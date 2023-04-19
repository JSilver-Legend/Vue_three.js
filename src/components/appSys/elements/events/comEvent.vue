<template>
    <template v-if="buttonState == 'initial'">
        <container @click.stop="onClick(element.value)" :element="getFilteredContainerObject(element)"
            :entityData="entityData" />
    </template>
    <template v-else>
        <container :element="getFilteredContainerObject(element)" :entityData="formattedResponse" />
    </template>
</template>

<script setup>
import _ from "lodash"
import { ref, toRefs } from "vue"

import { usePlatformUserManagement } from '@/composables/usePlatformUserManagement'
import { useHelperFunctions } from "@/composables/useHelperFunctions"

import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda"; // ES Modules import

const props = defineProps(["element", "entityData"])

const { element, entityData } = toRefs(props)

const helperFunctions = useHelperFunctions()
const platformUserManagement = usePlatformUserManagement()

const buttonState = ref('initial') // initial, progress, response 
const formattedResponse = ref({})

const getFormattedPayload = (tPayload) => {
    try {
        let payload = tPayload
        Object.keys(payload).forEach(key => {
            payload[key] = helperFunctions.resolveStaticValueExpression(payload[key], entityData.value)
        })
        Object.keys(payload.templateData).forEach(key => {
            payload.templateData[key] = helperFunctions.resolveStaticValueExpression(payload.templateData[key], entityData.value)
        })
        // console.log('payloadAssignment: ', payload)
        return payload
    } catch {
        return tPayload
    }
}

function Utf8ArrayToStr(array) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
            case 12: case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }

    return JSON.parse(out);
}

const reset = (timeOut = true) => {
    setTimeout(() => {
        buttonState.value = 'initial'
        formattedResponse.value = {}
    }, timeOut ? (element.value.responseDelay ? element.value.responseDelay : 2000) : 0);
}

const onSendEmail = async () => {

    console.log('comEvent | onSendEmail', getFormattedPayload(element.value.payloadAssignment))
    buttonState.value = 'progress'

    try {
        const client = new LambdaClient(await platformUserManagement.getAWSCconfig())
        const command = new InvokeCommand({
            FunctionName: 'infra-services-sendEmailCognito',
            Payload: JSON.stringify(getFormattedPayload(element.value.payloadAssignment))
        })

        const response = await client.send(command);
        formattedResponse.value = Utf8ArrayToStr(response.Payload)
        buttonState.value = 'response'
        console.log('Response', formattedResponse.value)
        reset()
    } catch (error) {
        console.log('error', error)
        reset(false)
    }

}

const onSendSMS = async () => {

    console.log('comEvent | onSendSMS', getFormattedPayload(element.value.payloadAssignment))
    buttonState.value = 'progress'

    try {
        const client = new LambdaClient(await platformUserManagement.getAWSCconfig());
        const command = new InvokeCommand({
            FunctionName: 'infra-services-sendSMSCognito',
            Payload: JSON.stringify(getFormattedPayload(element.value.payloadAssignment))
        })

        const response = await client.send(command);
        formattedResponse.value = Utf8ArrayToStr(response.Payload)
        buttonState.value = 'response'
        console.log('Response', formattedResponse.value)
        reset()

    } catch (error) {
        console.log('error', error)
        reset(false)
    }

}

const onClick = async () => {
    console.log('onClick | comEvent | eventType -> ', element.value.eventType)
    switch (element.value.eventType) {
        case "sendEmail":
            onSendEmail()
            break
        case "sendSMS":
            onSendSMS()
            break
    }
}


const getFilteredContainerObject = (element) => {
    let finalObject = { ...element }
    if (buttonState.value == 'progress') {
        finalObject.children = finalObject.progressIndicator
    } else if (buttonState.value == 'response') {
        finalObject.children = finalObject.response
    }
    return {
        ..._.omit(finalObject, ['eventType', 'progressIndicator', 'response']), 'type': 'container'
    }
}
</script>
