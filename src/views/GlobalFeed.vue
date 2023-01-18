<template>
  <div class="home-page">
    BANNER
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <ha-feed :api-url='apiUrl'></ha-feed>
        </div>
        <div class="col-md-3">
          Popular Tags
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HaFeed from '../components/Feed.vue'
export default {
  components: {HaFeed},
  name: 'HaGlobalFeed',
  data() {
    return {
      apiUrl: '/articles'
    }
  }
}
</script>

<style lang="scss" scoped></style>
