import InputMask from 'primevue/inputmask'
import Button from 'primevue/button'

export default {
  data () {
    return {
      mascara: '99.999.999/9999-99',
      respostaCnpj: 'Ebaaaa !! Conseguimos encontrar os dados de sua empresa agora por favor confirme os dados e vamos prosseguir',
      form: {
        cnpj: ''
      }
    }
  },
  mounted () {
    if (this.$route.params.cnpj !== undefined) {
      console.log('entrou')
      this.form.cnpj = this.$route.params.cnpj
    }
  },
  name: 'Inicio',
  components: {
    InputMask,
    Button
  },
  methods: {
    onPagenext (index) {
      if (index === 2) {
        this.$router.push({ name: 'Segunda', params: { cnpj: this.form.cnpj } })
      }
    }
  }
}
