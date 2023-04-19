<template>
<h1>Authenticating...</h1>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { Auth } from 'aws-amplify'

const router = useRouter()
const route = useRoute()

onMounted(async () => {
    console.log('magicLinkValidation...')
    if (route.params.challenge) {
        try {
            const [email, code] = route.params.challenge.split(',');
            console.log('email, code', email, code)
            const user = await Auth.signIn(email);
            await Auth.sendCustomChallengeAnswer(user, code);
            await Auth.currentSession();
            console.log('Sign in password less ', user)
            router.push('/')
        } catch (e) {
            console.log(e);
            router.push("/login")
        }
    }
    else {
        router.push("/login")
    }
})
</script>