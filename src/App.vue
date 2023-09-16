<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #a142b9;
    }
  }
}
</style>

<script>
import store from "@/store";
import { firebase } from "@/firebase";

firebase.auth().onAuthStateChanged(user => {
   if (user) {
    // User is signed in.
    console.log(user.email);
    store.currentUser = user.email;
  }
  else {
    // User is not signed in.
    console.log("No user");
    store.currentUser = null;
  }

});

export default {
  name: 'app',
   data() {
    return {
      store,
    };
  } 

}
</script>
