import {mapGetters, mapActions} from 'vuex'

export const formMixin = {
  computed: {
    ...mapGetters({
      'formList': 'form/list'
    })
  },
  methods: {
    ...mapActions({
      'submitForm': 'form/addFormItem'
    })
  }
}
