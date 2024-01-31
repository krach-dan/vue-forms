import { defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
// import { required, email, min } from '@vee-validate/rules';

// defineRule('required', (value, name) => {
//   return !value ? `${name} ist ein Pflichtfeld` : true
// }) not working, name is not given

defineRule('required', AllRules.required)
defineRule('email', AllRules.email)
defineRule('min', AllRules.min)

configure({
    generateMessage: localize('de', {
      messages: {
        required: 'Dieses Feld muss befüllt werden',
        email: 'Email ist nicht valide',
        min: 'Feld \'{field}\' muss mindestens 0:{min} Zeichen lang sein'
      },
    }),
  });