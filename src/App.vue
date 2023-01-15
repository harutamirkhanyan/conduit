<template>
  <div>
   <ha-topbar></ha-topbar>

    <router-view></router-view>
  </div>
</template>

<script>
import HaTopbar from '@/components/Topbar'
export default {
  name: 'HaApp',
  components: {
    HaTopbar
  },

}
</script>

