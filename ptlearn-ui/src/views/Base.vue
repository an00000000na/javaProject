<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form>
          <b-form-group id="input-group-1"  label="Id:"  label-for="input-1" size="sm">
            <b-form-input id="input-1" v-model="words.id" type="text"  required size="sm" placeholder="Enter id" ></b-form-input>
          </b-form-group>

          <b-form-group  id="input-group-2" label="English:" label-for="input-2">
            <b-form-input  type="text" v-model="words.en" id="input-2" required size="sm" placeholder="Enter the word on english"></b-form-input>
          </b-form-group>

          <b-form-group  id="input-group-3" label="Portuguese:" label-for="input-3">
            <b-form-input  type="text" v-model="words.pt" id="input-3" required size="sm" placeholder="Enter the word on portuguese"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4"  label="Difficulty:"  label-for="input-4" size="sm">
            <b-form-input id="input-4" v-model="words.difficulty" type="text"  required size="sm" placeholder="Enter difficulty" ></b-form-input>
          </b-form-group>

          <b-row align-h="center">
            <b-col cols="6"><b-button  type="submit" class="m-2" variant="primary" @click="saveWord">Submit</b-button></b-col>
            <b-col cols="6"><b-button  type="reset" class="m-2" variant="info " @click="onReset">Reset</b-button></b-col>
          </b-row>
        </b-form>
      </b-col>
      <b-col cols="10">
<div class="overflow-auto">
  <b-pagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    aria-controls="my-table"
    align="center"
    pills
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
      </b-col>
    </b-row>
  </b-container>
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
      perPage: 12,
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
  methods: {
    saveWord () {
      WordService.saveWord(this.words).then(
        response => {
          console.log(response)
          this.words = response.data.words
        },
        error => {
          this.message =
            (error.response && error.response.data) ||
            error.data.message.toString() ||
            error.message
        }
      )
    },
    onReset (evt) {
      evt.preventDefault()
      // reset our form values
      this.words.id = ''
      this.words.en = ''
      this.words.pt = ''
      this.words.difficulty = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
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
