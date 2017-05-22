<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name: 'app',
    mounted(){
        this.$store.dispatch('setAuthenticatedUser') 
    },
methods: {
    test(){alert(23)}
         }
}
</script>
