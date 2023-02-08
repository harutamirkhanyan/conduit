<template>
  <div class="home-page">
    <ha-banner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
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
export default {
  name: 'HaTagFeed',
  components: {HaFeed, HaPupularTags, HaBanner},
  computed: {
    apiUrl() {
      const tagName = this.$route.params.slug
      console.log(tagName, 'tagname')
      return `/articles?tag=${tagName}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
