<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

// const route = useRoute()
const store = useCounterStore()

// const from404 = ref(false)
// onMounted(() => {
//    console.info(route.state)

//    if(route.state?.redirected){
//       from404.value = true
//    }
// })

</script>

<template>
   <div>
      <h1>Hello I am the Home View</h1>
      <h2>stored CounterValue: {{ store.count }}</h2>
   <!-- <h2 v-if="from404">Welcome back from nirvana</h2> -->
   </div>
</template>
