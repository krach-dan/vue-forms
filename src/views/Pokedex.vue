<template>
    <div class="wrapper">
        <PrimeInputText v-model="search" @keyup.enter="callApi()" />
        <br />
        # {{ pokeData.number }}&nbsp;{{ pokeData.name }}
        <img :src="pokeData.image" />
    </div>

</template>

<script setup>
    import { ref, reactive } from 'vue'
    import axios from 'axios'

    const API_URI = "https://pokeapi.co/api/v2/pokemon/"
    const search = ref("")
    const pokeData = reactive({
        name: "",
        number: 0,
        image: ""
    })

    function callApi(){
        axios.get(API_URI + search.value)
            .then( response => {
                console.info(response)
                const data = response.data
                pokeData.number = data.id
                pokeData.name = data.name
                pokeData.image = data.sprites.front_default
            }).catch(error => {
                pokeData.number = 0
                pokeData.name = "missingno"
                pokeData.image = "https://www.pokewiki.de/images/b/b7/Missingno.png"
            })
    }

</script>

<style scoped>

    .wrapper {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        height: 50vh;
        border: 1px solid red;
    }

</style>