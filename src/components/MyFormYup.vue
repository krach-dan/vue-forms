<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { errors, defineField, meta } = useForm({
  validationSchema: yup.object({
    email: yup.string()
    .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email format")
    .required('Email is required'),
    password: yup.string().required('Password is required')
                          .min(8, 'Password must be at least 8 characters long')
                          .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                          .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                          .matches(/[!@#$%^&*()_+={}[\]:;"'<,>.?/\\-]/, 'Password must contain at least one special character')
  }),
});

const [email, emailAttrs] = defineField('email', {validateOnModelUpdate: false});
const [password, passwordAttrs] = defineField('password');

function submit(){
  alert(email.value + " " + password.value)
}

</script>

<template>
  <div id="formWrapper">
    <form @submit.prevent="onSubmit">
      <br />
      <PrimeInputText type="email" v-model="email" v-bind="emailAttrs" placeholder="email" />
      <span v-if="errors.email">&nbsp;&nbsp;<PrimeInlineMessage>{{ errors.email }}</PrimeInlineMessage></span>
      <br />
      <br /><PrimeInputText type="password" v-model="password" v-bind="passwordAttrs" placeholder="password" />
      <span v-if="errors.password">&nbsp;&nbsp;<PrimeInlineMessage>{{ errors.password }}</PrimeInlineMessage></span>
      <br />
      <PrimeButton :disabled="!meta.valid" @click="submit()">Submit</PrimeButton>
    </form>
  </div>
</template>

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
  margin-top: 30px;
  float: left;
}

</style>