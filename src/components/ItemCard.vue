<template>
<div class="card" style="width: 12rem;">
  <img class="card-img-top" src="../assets/1.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Bouqet</h5>
    <p class="price">€19.99</p>
    <a href="#" class="btn btn-light" style="background-color: #b9a3e9;">Add to Cart</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    msg: String
  }
}
</script>

