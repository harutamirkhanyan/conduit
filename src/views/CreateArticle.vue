<template>
  <div>
    Create Article
    <ha-article-form
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
    ></ha-article-form>
  </div>
</template>

<script>
import HaArticleForm from '@/components/ArticleForm'
export default {
  name: 'HaCreateArticle',
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      validationErrors: null,
      isSubmitting: false
    }
  },
  components:{HaArticleForm},
  methods: {
    onSubmit(data) {
      console.log('Onsubmit in createArticle', data)
    }
  }
}
</script>

<style lang="scss" scoped></style>
