<template>
  <div>
    <ha-loading v-if="isLoading" />
    <ha-error-message v-if="error" />
    <div v-if="feed">
      <div
        class="article-preview"
        v-for="(article, index) in feed.articles"
        :key="index"
      >
        <div class="article-meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
          >
            <img :src="article.author.image" alt="" />
          </router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username}
              }"
              class="author"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <div class="pull-xs-right">
          <ha-add-to-favorites 
          :isFavoreted='article.favorited'
          :article-slug='article.slug'
          :favorites-count='article.favoritesCount'
          ></ha-add-to-favorites>
          </div>
        </div>
        <router-link
          :to="{name: 'article', params: {slug: article.slug}}"
          class="preview-link"
        >
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          <ha-tag-list :tagList='article.tagList'></ha-tag-list>
        </router-link>
        <div></div>
      </div>
      <ha-pagination
        :total="feed.articlesCount"
        :limit="limit"
        :current-page="currentPage"
        :url="baseUrl"
      ></ha-pagination>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/feed'
import HaPagination from '@/components/Pagination'
import {limit} from '@/helpers/variables'
import {stringify, parseUrl} from 'query-string'
import HaLoading from '@/components/Loading.vue'
import HaErrorMessage from '@/components/ErrorMessage'
import HaTagList from '@/components/TagList'
import HaAddToFavorites from '@/components/AddToFavorites'

export default {
  name: 'HaFeed',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  components: {
    HaPagination,
    HaLoading,
    HaErrorMessage,
    HaTagList,
    HaAddToFavorites
  },
  data() {
    return {
      limit,
      url: '/'
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feed: state => state.feed.data,
      error: state => state.feed.error
    }),
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    baseUrl() {
      return this.$route.path
    },
    offset() {
      return this.currentPage * limit - limit
    }
  },
  watch: {
    currentPage() {
      this.fetchFeed()
    },
    apiUrl(){
    this.fetchFeed()
    }
  },
  mounted() {
    this.fetchFeed()
  },
  methods: {
    fetchFeed() {
      const parsedUrl = parseUrl(this.apiUrl)
      const stringifiedParams = stringify({
        limit,
        offset: this.offset,
        ...parsedUrl.query
      })
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
      this.$store.dispatch(actionTypes.getFeed, {apiUrl: apiUrlWithParams})
    }
  }
}
</script>

<style lang="scss" scoped></style>
