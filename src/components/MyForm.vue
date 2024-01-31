<template>
    <div id="formWrapper">
      <Form @submit="onSubmit" v-slot="{ meta }"> <!-- :validation-schema="schema" -->

        <div class="flex flex-wrap align-items-center mb-3 gap-2">
          <Field name="name" rules="required|min:7" v-slot="{ field, errorMessage, meta }">
            <table>
            <tr>
              <td><PrimeInputText placeholder="Name" v-bind="field" :class="{invalid: errorMessage}" /></td>
              <td><PrimeInlineMessage v-if="meta.touched && !meta.valid"><ErrorMessage name="name" /></PrimeInlineMessage></td>
            </tr>
            </table>
          </Field>
          <Field name="email" rules="required|email|min:10" v-slot="{ field, errorMessage, meta }">
            <table>
            <tr>
              <td><PrimeInputText placeholder="Email" v-bind="field" :class="{invalid: errorMessage}" /></td>
              <td><PrimeInlineMessage v-if="meta.touched && !meta.valid"><ErrorMessage name="email" /></PrimeInlineMessage></td>
            </tr>
            </table>
          </Field>
        </div>
        <br />
        <PrimeButton :disabled="!meta.valid" @click="emit('close')">Sign up for newsletter</PrimeButton>
      </Form>
    </div>
</template>

<script setup>

import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from 'yup';

  const emit = defineEmits(['close'])

  function onSubmit(){
    alert("Form submitted")
  }   

  const schema = yup.object({
    email: yup.string().email("Invalid email format").required()
  })

  // const mail = ref("")
  // const mailOk = ref(false)
  // function checkMail(){
  //   console.info(mail.value.includes("@"))
  //   if(mail.value.includes("@")){
  //     mailOk.value = true
  //   }else{
  //     mailOk.value = false
  //   }
  // }

</script>

<style scoped>

#formWrapper {
  display: flex;
  width: 100%;
  /* border: 1px solid yellow; */
  padding: 40px;
}
.invalid {
  border: 1px solid red;
}

form {
  margin-left: 50px;
}

table td:nth-child(odd) {
  width: 250px;
  /* border: 1px solid yellow; */
}
table td input {
  width: 100%;
  /* border: 1px solid yellow; */
}

table td:nth-child(even) {
  width: 500px;
  /* border: 1px solid yellow; */
}

/* table td input {
  float: right;
} */
table td div {
  float: left;
}

form button {
  float: left;
}

</style>