<template>
<div class="overflow-auto">
<b-pagination
  v-model="currentPage"
  :total-rows="rows"
  :per-page="perPage"
  aria-controls="my-table"
></b-pagination>
<p class="mt-3">Current Page: {{ currentPage }}</p>

<b-table
  id="my-table"
  :current-page="currentPage"
  :items="words"
  :per-page="perPage"
  small
  :fields="fields"
  striped
  primary-key="a"
  :tbody-transition-props="transProps"
>
</b-table>
</div>
</template>

<script>
import WordService from '../services/word-service'
// const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'content ' + (i+1) }));
export default {
  name: 'Base',
  data () {
    return {
      transProps: {
        // Transition name
        name: 'flip-list'
      },
      perPage: 10,
      currentPage: 1,

      words: [{
        id: '',
        en: '',
        pt: '',
        difficulty: ''
      }],

      fields: [
        { key: 'id', sortable: true },
        { key: 'en', sortable: true },
        { key: 'pt', sortable: true },
        { key: 'difficulty', sortable: true }
      ]
    }
  },
  computed:
    {
      rows () {
        return this.words.length
      }
    },
  beforeMount () {
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
