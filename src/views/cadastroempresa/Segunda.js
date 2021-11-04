import InputMask from 'primevue/inputmask'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import axios from 'axios'

export default {
  data () {
    return {
      respostaCnpj: 'Ebaaaa !! Conseguimos encontrar os dados de sua empresa agora por favor confirme os dados e vamos prosseguir',
      form: {
        cnpj: '',
        regime: ''
      },
      regimes: [// aqui pegar da api os regimes
        { descricao: 'Simples Nacional', id: '1' },
        { descricao: 'Lucro Presumido', id: '2' }
      ]
    }
  },
  name: 'Segunda',
  components: {
    InputMask,
    Button,
    InputText,
    Dropdown
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
        this.$router.push({ name: 'Home', params: { cnpj: this.form.cnpj } })
      } else if (index === 3) {
        this.$router.push('terceira')
      }
    }
  }
}
