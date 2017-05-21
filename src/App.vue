<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import db from '@/configs/firebase'
export default {
    name: 'app',
    mounted(){
        console.log(db)
    }
}
</script>
