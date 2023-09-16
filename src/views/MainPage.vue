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
    <h2 style="color:white">Welcome back! </h2>
    <p style="color:white"> Choose a store and order flowers you like <br>
        for yourself  or whoever else you'd like! </p> <br>
      <div class="input-group mb-3 mx-auto" style="max-width: 300px;">
      <div class="input-group-prepend">
         <label class="input-group-text" for="inputGroupSelect01">City</label>
       </div>
       <select class="custom-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">Pula</option>
          <option value="2">Zagreb</option>
          <option value="3">Osijek</option>
          <option value="4">Slavonski Brod</option>
          <option value="5">Split</option>
        </select>
      </div> <br>
   </div>

   <div class="container">
  <div class="row">
    <div class="col"> <br>
      <my-shop-card 
      image-source="../assets/logo.png"
      title="Flower shop #1"
      description="Delivery: 1,20€"
      link="#"
      button-text="Go to shop"/>
    </div>
    <div class="col"> <br>
     <my-shop-card 
      image-source="../assets/logo1.png"
      title="Flower shop #2"
      description="Delivery: 1,90€"
      link="#"
      button-text="Go to shop"/>
    </div>
    <div class="w-100"></div>
    <div class="col"> <br>
     <my-shop-card 
      image-source="../assets/logo1.png"
      title="Flower shop #3"
      description="Delivery: 1,00€"
      link="#"
      button-text="Go to shop"/>
    </div>
    <div class="col"> <br>
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

<style scoped>
.about {
  background: linear-gradient(to right, #885AEB, #C358B9);
  width: 100%;
  border-bottom-left-radius: 100px; 
  border-bottom-right-radius: 100px;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>