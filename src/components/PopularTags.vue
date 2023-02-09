<template>
  <div>
   <ha-loading v-if="isLoading"/>
   <ha-error-message v-if="error"/>
    <div class="sidebar" v-if="popularTags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
        class="tag-default tag-pill"
          v-for="popularTag in popularTags"
          :key="popularTag"
          :to="{name: 'tag', params: {slug: popularTag}}"
        >{{popularTag}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/popularTags'
import HaLoading from '@/components/Loading'
import HaErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'HaPupularTags',
  computed: {
    ...mapState({
      isLoading: state => state.popularTags.isLoading,
      error: state => state.popularTags.error,
      popularTags: state => state.popularTags.data
    })
  },
  components:{
    HaLoading,
    HaErrorMessage
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  }
}
</script>

