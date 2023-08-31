<template>
  <div class="card" style="width: 18rem;">
    <img :src="imageSource" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <a :href="link" class="btn btn-light" style="background-color: #b9a3e9;">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSource: String,
    title: String,
    description: String,
    link: String,
    buttonText: String
  }
};
</script>
