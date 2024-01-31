<template>

    <div class="wrapper">
        <PrimeButton label="Newsletter" @click="dialogs.form1=true" />
        <PrimeButton label="Login" @click="dialogs.form2=true" />
        <PrimeButton label="Subscribe to another Newsletter" @click="dialogs.form3=true" />

        <PrimeDialog v-model:visible="dialogs.form1" modal header="Newsletter" :style="{ width: '35rem' }">
            <MyFormBasic />
        </PrimeDialog>
        <PrimeDialog v-model:visible="dialogs.form2" modal header="Login" :style="{ width: '40rem' }">
            <MyFormYup />
        </PrimeDialog>
        <PrimeDialog v-model:visible="dialogs.form3" modal header="Another Newsletter" :style="{ width: '40rem' }">
            <MyForm @close="dialogs.form3=false" />
        </PrimeDialog>
    </div>

</template>

<script setup>
import MyFormBasic from '@/components/MyFormBasic.vue';
import MyFormYup from '@/components/MyFormYup.vue';
import MyForm from '@/components/MyForm.vue';
import { reactive } from 'vue';

    const dialogs = reactive({
        form1: false,
        form2: false,
        form3: false
    })

</script>

<style scoped>

    .wrapper {
        margin-top: 30px;
    }
    .wrapper > button {
        margin-right: 30px;
    }

</style>