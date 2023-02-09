<template>
  <div>
    <ul class="tag-list">
      <li
        v-for="tag in tagList"
        :key="tag"
        class="tag-default tag-pill tag-outline"
      >
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HaTagList',

  props: {
    tagList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
