import InputMask from 'primevue/inputmask'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Calendar from 'primevue/calendar'
import Checkbox from 'primevue/checkbox'
import axios from 'axios'

export default {
  data () {
    return {
      respostaCnpj: 'Estamos quase lá, agora é hora de configurar seus dados de acesso e termo de aceite',
      form: {
        cnpj: ''
      }
    }
  },
  name: 'Segunda',
  components: {
    InputMask,
    Button,
    InputText,
    Calendar,
    Checkbox
  },
  mounted () {
    if (this.$route.params.cnpj !== undefined) {
      this.form.cnpj = this.$route.params.cnpj
    }
  },
  methods: {
    onCnpjInfo () {
      axios.get('https://www.receitaws.com.br/v1/cnpj/17401896000202').then(res => {

      })
    },
    onPagenext (index) {
      if (index === 1) {
        this.$router.push({ name: 'Segunda', params: { cnpj: this.form.cnpj } })
      } else if (index === 2) {
        this.$router.push('segunda')
      }
    }
  }
}
