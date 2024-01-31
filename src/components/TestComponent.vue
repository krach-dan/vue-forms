<template>
    <h2 v-if="test">This prop was given to me: {{ test }}</h2>
</template>

<script setup>

    const props = defineProps({
        test: String
    })

</script>