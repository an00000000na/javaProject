<template>
  <div align="center">
    <b-card bg-variant="dark"
            text-variant="white"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
    >

      <b-card-text >
        <em class="small text">en:</em>  {{words.en}}<br />
        <em class="small text">pt:</em> {{words.pt}}<br />
        <em class="small text">id:</em> {{words.id}}
        <em class="small text">difficulty:</em>  {{words.difficulty}}<br />
      </b-card-text>

      <b-button v-on:click="methods.reloadPage()" pill variant="light">Next</b-button>
    </b-card>
  </div>
</template>
<script>
import WordService from '../services/word-service'
export default {
  name: 'Card',
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
      ],
      methods: {
        reloadPage () {
          window.location.reload()
        }
      }
    }
  },
  mounted () {
    WordService.getWordById(Math.floor(Math.random() * (16 - 1 + 1)) + 1).then(
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
