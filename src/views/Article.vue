<template>
  <div>
    <div class="article-page">
      <div class="banner">
        <div class="container" v-if="article">
          <h1>{{ article.title }}</h1>
          <div class="article-meta">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username}
              }"
            >
              <img :src="article.author.image" alt="" />
            </router-link>
            <div class="info">
              <router-link
                :to="{
                  name: 'userProfile',
                  params: {slug: article.author.username}
                }"
              >
                {{ article.author.username }}
              </router-link>
              <span class="date">{{ article.createdAt }}</span>
            </div>
            <span v-if="isAuthor">
              <router-link
                class="btn btn-outline-secondary btn-sm"
                :to="{name: 'editArticle', params: {slug: article.slug}}"
              >
                <i class="ion-edit"></i>
                Edit Article
              </router-link>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="deleteArticle"
              >
                <i class="ion-trash-a"></i>
                Delete Article
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container page">
      <ha-loading v-if="isLoading"></ha-loading>
      <ha-error-message v-if="error"></ha-error-message>
      <div class="row article-content" v-if="article">
        <div class="xol-xs-12">
          <div>
            <p>{{ article.body }}</p>
          </div>
          <ha-tag-list :tagList='article.tagList'></ha-tag-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {actionTypes as articleActionTypes} from '@/store/modules/article'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'
import {mapState, mapGetters} from 'vuex'
import HaLoading from '@/components/Loading.vue'
import HaErrorMessage from '@/components/ErrorMessage.vue'
import HaTagList from '@/components/TagList.vue'
export default {
  name: 'HaArticle',
  computed: {
    ...mapState({
      isLoading: state => state.article.isLoading,
      error: state => state.article.error,
      article: state => state.article.data
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    }),
    isAuthor() {
      if (!this.currentUser || !this.article) {
        return false
      }
      return this.currentUser.username === this.article.author.username
    }
  },
  components: {
    HaLoading,
    HaErrorMessage,
    HaTagList
  },
  mounted() {
    this.$store.dispatch(articleActionTypes.getArticle, {
      slug: this.$route.params.slug
    })
  },
  methods: {
    deleteArticle() {
      this.$store
        .dispatch(articleActionTypes.deleteArticle, {
          slug: this.$route.params.slug
        })
        .then(() => {
          this.$router.push({name: 'globalFeed'})
        })
    }
  }
}
</script>
