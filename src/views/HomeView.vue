<template>
  <div class="home">
    <img alt="FlowerEx logo" src="../assets/logo1.png" style="width:200px;height:200px;">
    <HelloWorld msg="FlowerEx"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/StartPage.vue'

export default {
  name: 'StartPage',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

</style>
