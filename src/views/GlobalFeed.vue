<template>
  <div class="home-page">
    BANNER
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <ha-feed :api-url='apiUrl'></ha-feed>
        </div>
        <div class="col-md-3">
          <ha-pupular-tags></ha-pupular-tags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HaFeed from '../components/Feed.vue'
import HaPupularTags from '../components/PopularTags.vue'
export default {
  components: {HaFeed, HaPupularTags},
  name: 'HaGlobalFeed',
  data() {
    return {
      apiUrl: '/articles'
    }
  }
}
</script>

<style lang="scss" scoped></style>
