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
        regime: '',
        ces: ''
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
      this.onCnpjInfo(this.form.cnpj)
    }
  },
  methods: {
    onCnpjInfo (cnpj) {
      cnpj = cnpj.replace(/[^0-9]/g, '')
      console.log(cnpj)
      axios.get('https://localhost:5001/api/dataOn/doCNPJ/GetData?cnpj=' + cnpj, { headers: { Authorization: 'Basic ZGF0YW9uOkRhdGFPbkFQSUAj' } }).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
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
