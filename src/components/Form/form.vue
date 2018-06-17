<template>
  <div class="Form">
    <p>Fields marked <span class="required">*</span> are required.</p>
    <p class="Form__error" v-if="errors">Oh no, you have {{ errors }} errors.</p>
    <p class="Form__message" v-for="message in messages">{{ message }}</p>
    <field name="First name" v-model="form.first_name" :required="true"></field>
    <field name="Surname" v-model="form.surname" :required="true"></field>
    <field name="E-mail address" v-model="form.email_address" :required="true"></field>
    <field name="Customer query" v-model="form.customer_query" type="textarea"></field>
    <button-cta full @click="validateForm">Add</button-cta>
  </div>
</template>

<script>
  import Field from '@/components/Form/Field/field.vue'
  import ButtonCta from '@/components/ButtonCta/button-cta.vue'
  import {formMixin} from '@/mixins/formMixin'

  export default {
    name: 'Summary',
    mixins: [formMixin],
    components: {
      Field,
      ButtonCta
    },
    data: () => ({
      messages: [],
      form: {
        first_name: '',
        surname: '',
        email_address: '',
        customer_query: ''
      },
      errors: 0
    }),
    methods: {
      validateForm() {

        this.resetForm()

        if (this.form.first_name === '') {
          this.addErrorMessage('First Name')
          this.errors++
        }
        if (this.form.surname === '') {
          this.addErrorMessage('Surname')
          this.errors++
        }
        if (this.form.email_address === '') {
          this.addErrorMessage('Email Address')
          this.errors++
        }
        if (!this.validateEmail(this.form.email_address)) {
          this.messages.push('Please add a valid Email Address.')
          this.errors++
        }

        if (this.errors) {
          return
        }

        this.submitForm(this.form)
      },
      resetForm() {
        this.messages = []
        this.errors = 0
      },
      addErrorMessage(name) {
        return this.messages.push(`You need to add a ${name}.`)
      },
      // regular expression thanks to: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
      }
    }
  }
</script>

<style lang="scss">

  .Form {
    &__error {
      color: red
    }
    &__message {
      padding: 1em;
      color: #31708f;
      background-color: #d9edf7;
      border: 1px solid #bce8f1;
    }
  }

</style>
