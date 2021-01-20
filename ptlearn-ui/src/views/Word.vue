<template>
<div>
  <input type="text" v-model="nuevafruta" >
  <button @click="agregarFruta"> Diste click</button>
 <b-table striped hover :items="words" :fields="fields"></b-table>
</div>
</template>

<script>
import WordService from '../services/word-service'
export default {
  name: 'Word',
  data () {
    return {
      // content: '',
      nuevafruta: '',
      words: [{
        id: '',
        en: '',
        pt: '',
        difficulty: ''
      }],
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'en', label: 'English' },
        { key: 'pt', label: 'Portuguese' },
        { key: 'difficulty', label: 'Level' }
      ]
    }
  },
  methods: {
    agregarFruta () {
      console.log('diste click')
    }
  },
  mounted () {
    WordService.getAllWords().then(
      response => {
        console.log(response)
        this.words = response.data
      },
      error => {
        this.words =
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
      }
    )
  }
}
</script>

<style scoped>

</style>
