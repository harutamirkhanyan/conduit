<template>
  <div class="home-page">
    <ha-banner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <ha-feed-toggler :tag-name="tagName" />
          <ha-feed :api-url="apiUrl"></ha-feed>
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
  name: 'HaTagFeed',
  components: {HaFeed, HaPupularTags, HaBanner, HaFeedToggler},
  computed: {
    tagName() {
      return this.$route.params.slug
    },
    apiUrl() {
      console.log(this.tagName, 'tagname')
      return `/articles?tag=${this.tagName}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
