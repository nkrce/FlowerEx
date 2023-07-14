<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>
      Simple and easy way <br>
      to order flowers ✿
    </p>
 
    <router-link to="/login"><button type="submit" class="btn btn-dark">Log in</button></router-link> <br> <br>
    <router-link to="/signup"><button type="submit" class="btn btn-outline-light">Sign up</button></router-link>
    
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
