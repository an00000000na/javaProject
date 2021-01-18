import axios from 'axios'

const API_URL = 'http://localhost:8080/words'

class WordsService {
  getAllWords () {
    return axios.get(API_URL + '/all')
  }

  getWordById (id) {
    return axios.get(API_URL + '/search/id?id=' + id)
  }

  getWordPage (filters, currentPage, perPage) {
    return axios.get(API_URL + '/search/page',
      {
        params: {
          en: filters.en,
          pt: filters.pt,
          difficulty: filters.difficulty,
          currentPage: currentPage,
          perPage: filters.perPage
        }
      })
  }

  deleteWordById (id) {
    return axios.delete(API_URL + '/delete',
      {
        params:
          {
            id: id
          }
      })
  }

  saveWord (form) {
    return axios.post(API_URL + '/save/word',
      {
        en: form.en,
        pt: form.pt,
        difficulty: form.difficulty,
        id: form.id
      })
  }
}

export default new WordsService()
