<template>
  <div class="home-page">
    <ha-banner/>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <ha-feed-toggler />
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
import HaFeed from '@/components/Feed.vue'
import HaPupularTags from '@/components/PopularTags.vue'
import HaBanner from '@/components/Banner.vue'
import HaFeedToggler from '@/components/FeedToggler.vue'
export default {
  components: {HaFeed, HaPupularTags, HaBanner, HaFeedToggler},
  name: 'HaGlobalFeed',
  data() {
    return {
      apiUrl: '/articles'
    }
  }
}
</script>

<style lang="scss" scoped></style>
