<template>
  <ul class="error-messages">
    <li v-for="errorMessage in errorMessages" :key="errorMessage">
      {{ errorMessage }}
    </li>
  </ul>
  <!-- <div>here are sharable validation errors {{ validationErrors }}</div> -->
</template>

<script>
export default {
  name: 'HaValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorMessages() {
    return  Object.keys(this.validationErrors).map(name => {
      const messages=this.validationErrors[name].join(', ')
        return `${name} ${messages}`
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
