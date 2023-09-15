<template>
   <div class="about">
    <br>
    <h1>Log in form: </h1>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" v-model="username" class="form-control"
id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" v-model="password" class="form-control"
id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="button" @click="login()" class="btn btn-dark">Log in</button>
            <small id="emailHelp" class="form-text text-muted" >Don't have an account? <a href="/signup">Sign up</a></small>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "Login",
   data() {
    return {
      username: '',
      password: '',
    };
  }, 
  methods: {
    login() {
      console.log("login..." + this.username);

      firebase
      .auth()
      .signInWithEmailAndPassword(this.username, this.password)
      .then((result) => {
        console.log("Successful log in", result);

        this.$router.replace({name: 'Main page'})
      }).catch(function(e) {
        console.error("Error", e);
      })
  },
  }
}
</script>
