<script setup>

import {onMounted, onUnmounted} from "vue";

  defineProps({
    index: Number
  })

  const MIN_NUMBER_OK = 3;
  const MIN_NUMBER_GOOD = 5;

  onMounted(() => {
    console.info("Box mounted")
  })

  onUnmounted(() => {
    console.info("Box unmounted")
  })

</script>

<template>

    <div v-if="index >= MIN_NUMBER_GOOD" class="box bgGreen"/>
    <div v-else-if="index >= MIN_NUMBER_OK" class="box bgYellow"/>
    <div v-else class="box bgRed"/>

</template>

<style scoped>

.box {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid white;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 20%;
}

.bgGreen{
  background-color: green;
}

.bgYellow{
  background-color: yellow;
}

.bgRed{
  background-color: red;
}

</style>