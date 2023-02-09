<template>
  <div>
    <ha-topbar></ha-topbar>

    <router-view></router-view>
  </div>
</template>

<script>
import HaTopbar from '@/components/Topbar'
import {actionTypes} from '@/store/modules/auth'
export default {
  name: 'HaApp',
  components: {
    HaTopbar
  },
  mounted() {
  this.$store.dispatch(actionTypes.getCurrentUser)
  }
}
</script>
