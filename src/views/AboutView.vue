<template>
    <div>  
        <h1>This is an about page</h1>

        Count: {{ store.count }}
        DoubleCount: {{ store.doubleCount }}

        <PrimeButton @click="store.increment()">+</PrimeButton>
        <PrimeButton @click="store.reset()">Reset</PrimeButton>

        <TestComponent />
    </div>
</template>

<script setup>
    import TestComponent from '@/components/TestComponent.vue'
    import { useCounterStore } from '@/stores/counter'

    const store = useCounterStore();

</script>

<style scoped>
    button {
        margin-left: 10px;
    }
</style>
