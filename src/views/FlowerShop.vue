<template>
<nav class="navbar navbar-light" style="background-color: #885AEB;">
  <a class="navbar-brand" href="/mainpage">
    <img src="../assets/back.png" width="30" height="30" alt="">
  </a>
</nav>
   <div class="about">
    <h2 style="color:white">Flower shop #1</h2>
    <p style="color:white"> Delivery: 1,20€ </p> <br>
   </div>

<div class="container">
  <div class="row">
    <div class="col-sm"> <br>
      <my-item-card/>
    </div>
    <div class="col-sm"> <br>
       <my-item-card/>
    </div>
    <div class="col-sm"> <br>
       <my-item-card/>
    </div>
  </div>
  <div class="row">
    <div class="col-sm"> <br>
      <my-item-card/>
    </div>
    <div class="col-sm"> <br>
       <my-item-card/>
    </div>
    <div class="col-sm"> <br>
       <my-item-card/>
    </div>
  </div>
</div>

</template>

<script>
// @ is an alias to /src
import ItemCard from '@/components/ItemCard.vue'

export default {
  name: 'ItemCard',
  components: {
    'my-item-card': ItemCard,
  }
}
</script>

<style scoped>
.about {
  background:#885AEB;
  width: 100%;
  height: 12vh;
  border-bottom-left-radius: 100px; 
  border-bottom-right-radius: 100px; 
}
.col-sm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

