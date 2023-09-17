<template>
  <div class="home">
    <img alt="FlowerEx logo" src="../assets/logo1.png" style="width:200px;height:200px;">
    <HelloWorld msg="FlowerEx" style="color:white"/>
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
.home {
  background: linear-gradient(to right, #885AEB, #C358B9);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
