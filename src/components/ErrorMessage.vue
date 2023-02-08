<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'HaErrorMessage',
  props: {
    message: {
      type: String,
      required: false,
      default: 'Something went wrong'
    }
  }
}
</script>
