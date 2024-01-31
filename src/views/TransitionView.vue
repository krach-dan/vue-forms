<template>
    <div style="display: flex; justify-content: center; margin-top: 30px;">
        <TransitionGroup name="list" tag="div">
            <Box v-for="i in count" :key="i" :index="i" />  
        </TransitionGroup>
    </div>
</template>

<script setup>
    import Box from '@/components/Box.vue';
    import { onMounted, ref } from 'vue';

    const count = ref(0)

    onMounted(() => {
        randomizeCounter()
    })

    async function randomizeCounter(){
        while(true){
            while(count.value<10){
                await Sleep(1000)
                count.value++
            }
            while(count.value>0){
                await Sleep(1000)
                count.value--
            }
        }
        
        // while(true){
        //     await Sleep(1000)
        //     console.info(Math.floor(Math.random() * 10))
        //     count.value = Math.floor(Math.random() * 10);
        // }
    }
    async function Sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
</script>

<style scoped>
/* .list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
} */

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>