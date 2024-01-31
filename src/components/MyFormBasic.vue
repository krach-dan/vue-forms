<template>
    <div id="formWrapper">
      <form @submit.prevent="checkFormAndSubmit">
        <div class="flex flex-wrap align-items-center mb-3 gap-2">
              <div class="field">
                  <PrimeInputText v-model="name" placeholder="Name" :class="{invalid: errorName}" />
                  <PrimeInlineMessage class="errorMessage" v-show="errorName">{{ errorName }}</PrimeInlineMessage>
              </div>
              <br />
              <div class="field">
                  <PrimeInputText v-model="email" placeholder="Email" :class="{invalid: errorEmail}" /> <!-- optional bei jeder Änderung @input="checkEmail" -->
                  <PrimeInlineMessage class="errorMessage" v-show="errorEmail">{{ errorEmail }}</PrimeInlineMessage>
              </div>
        </div>
        <br /><br />
        <PrimeButton type="submit" label="Submit"/>
      </form>
    </div>
</template>

<script setup>
  import { ref } from 'vue'

  const name=ref("")
  const email=ref("")

  const errorName = ref("")
  const errorEmail = ref("")

  function checkFormAndSubmit(){
      errorName.value = ""
      errorEmail.value = ""
      if(name.value == ""){
        errorName.value = "Name is required"
      }
      if(email.value == ""){
        errorEmail.value = "Email is required"
      }
      console.info(email.value.includes("@"))
      if(!email.value.includes("@")){
        errorEmail.value = "Email ist nicht valide"
      }

      if(!errorEmail.value && !errorName.value)
      alert("Form submitted")
  }

  function checkEmail(){
    console.info("##input: ", email.value)
    errorEmail.value = ""
    if(email.value == ""){
        errorEmail.value = "Email is required"
        return
    }
    if(!email.value.includes("@")){
       errorEmail.value = "Email ist nicht valide"
    }
  }

</script>

<style scoped>

#formWrapper {
  display: flex;
  width: 100%;
  /* border: 1px solid yellow; */
  /* padding: 40px; */
}
.invalid {
  border: 1px solid red;
}

form {
  margin-left: 50px;
}

form button {
  float: left;
}

.field{
  width: 100%;
}

.errorMessage {
  margin-left: 10px;
}

</style>