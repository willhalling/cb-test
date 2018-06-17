<template>
  <div id="app">
    <h1>CB Test</h1>
    <Summary :list="formList" v-if="formSubmitted"/>
    <Form v-if="!formSubmitted"/>
  </div>
</template>

<script>
  import Summary from '@/components/Summary.vue'
  import Form from '@/components/Form/form.vue'
  import {formMixin} from '@/mixins/formMixin'

  export default {
    name: 'app',
    mixins: [formMixin],
    components: {
      Summary,
      Form
    },
    computed: {
      formSubmitted() {
        return this.formList.length > 0
      }
    }
  }
</script>

<style lang="scss">

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px 0;
    padding: 0 10%;
    .required {
      color: red;
    }
  }
</style>
