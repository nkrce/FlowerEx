<template>
<nav class="navbar navbar-light" style="background-color: #885AEB;">
  <a class="navbar-brand" href="/mainpage">
    <img src="../assets/back.png" width="30" height="30" alt="">
  </a>
</nav>
   <div class="about">
    <h2 style="color:white">Welcome! </h2>
   </div>

<div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm"> <br> 
          <form>
             <div class="input-group mb-3">
              <div class="input-group-prepend">
                 <span class="input-group-text" id="basic-addon1"><img src="../assets/back.png" width="20" height="20" alt=""></span>
              </div>
              <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
              </div>
            <div class="input-group mb-3">
             <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><img src="../assets/back.png" width="20" height="20" alt=""></span>
              </div>
              <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><img src="../assets/back.png" width="20" height="20" alt=""></span>
              </div>
              <input type="text" class="form-control" placeholder="Adress" aria-label="Adress" aria-describedby="basic-addon1">
            </div>
            <small id="emailHelp" @click="logout()" class="form-text text-muted" ><a href="#">Log out?</a></small>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>

</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";

export default {
  name: 'app',
   data() {
    return {
      store,
    };
  },
   methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push({name: 'home'})
      });
    },
  }, 

}
</script>



<style scoped>
.about {
  background:#885AEB;
  width: 100%;
  height: 10vh;
  border-bottom-left-radius: 100px; 
  border-bottom-right-radius: 100px;
}
</style>