<template>
    <div>
        <img src="/404.png" /><br />
        You will be redirected in {{ count }} seconds...
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import router from '../router'

    const count = ref(3)

    onMounted(() => {
        waitForReload()
    })

    async function waitForReload(){
        while(count.value > 0){
            await Sleep(1000)
            count.value--
        }
        // router.push('/')
        // router.push({name: 'home', query: { redirected: true }})
        router.push({name: 'home', params: {}, state: { redirected: true }})
    }

    async function Sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

</script>