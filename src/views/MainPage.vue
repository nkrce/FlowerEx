<template>
<nav class="navbar navbar-light" style="background: linear-gradient(to right, #885AEB, #C358B9);">
  <a class="navbar-brand" href="/settings">
    <img src="../assets/settings.png" width="30" height="30" alt="">
  </a>

   <a class="navbar-brand ml-auto" href="/history">
      <img src="../assets/history.png" width="30" height="30" alt="">
    </a>
</nav>
   <div class="about">
    <h2>Welcome back! </h2>
    <p> Choose a store and order flowers you like <br>
        for yourself  or whoever else you'd like! </p>
   </div>

   <div class="container">
  <div class="row">
    <div class="col">
      <my-shop-card 
      image-source="../assets/logo.png"
      title="Flower shop #1"
      description="Delivery: 1,20€"
      link="#"
      button-text="Go to shop"/>
    </div>
    <div class="col">
     <my-shop-card 
      image-source="../assets/logo1.png"
      title="Flower shop #2"
      description="Delivery: 1,90€"
      link="#"
      button-text="Go to shop"/>
    </div>
    <div class="w-100"></div>
    <div class="col">
     <my-shop-card 
      image-source="../assets/logo1.png"
      title="Flower shop #3"
      description="Delivery: 1,00€"
      link="#"
      button-text="Go to shop"/>
    </div>
    <div class="col">
     <my-shop-card 
      image-source="../assets/logo1.png"
      title="Flower shop #4"
      description="Delivery: 1,50€"
      link="#"
      button-text="Go to shop"/>
    </div>
  </div>
</div>

</template>

<script>
// @ is an alias to /src
import ShopCard from '@/components/ShopCard.vue'

export default {
  name: 'ShopCard',
  components: {
    'my-shop-card': ShopCard,
  }
}
</script>
