<template>
  <div>
    <b-form-input v-model="value" type="text" debounce="500"></b-form-input>
    <div class="mt-2">Value: "{{ value }}"</div>
  </div>
</template>

<script>
export default {
  name: 'New',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
