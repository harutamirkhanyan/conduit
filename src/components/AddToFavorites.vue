<template>
  <button
    @click="handleLike"
    :class="{
      btn: true,
      'btn-sm': true,
      'btn-primary': isFavoretedOptimistic,
      'btn-outline-primary': !isFavoretedOptimistic
    }"
  >
    <i class="ion-heart"></i>
    <span>&nbsp; {{ favoritesCountoptimistic }}</span>
  </button>
</template>

<script>
import {actionTypes} from '@/store/modules/addToFavorites'
export default {
  name: 'HaAddToFavorites',

  props: {
    isFavoreted: {
      type: Boolean,
      required: true
    },
    articleSlug: {
      type: String,
      required: true
    },
    favoritesCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isFavoretedOptimistic: this.isFavoreted,
      favoritesCountoptimistic: this.favoritesCount
    }
  },
  methods: {
    handleLike() {
      this.$store.dispatch(actionTypes.addToFavorites, {
        slug: this.articleSlug,
        isFavoreted: this.isFavoretedOptimistic
      })
      if (this.isFavoretedOptimistic) {
        this.favoritesCountoptimistic -= 1
      } else {
        this.favoritesCountoptimistic += 1
      }
      this.isFavoretedOptimistic = !this.isFavoretedOptimistic
    }
  }
}
</script>

<style lang="scss" scoped></style>
