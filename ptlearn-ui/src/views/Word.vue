<template>
<div>
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
