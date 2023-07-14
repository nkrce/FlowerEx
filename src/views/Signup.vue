<template>
   <div class="about">
    <h1>Sign up form: </h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input type="password" class="form-control"
id="exampleInputPassword1" placeholder="Name" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control"
id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control"
id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Confirm password</label>
              <input type="password" class="form-control"
id="exampleInputPassword1" placeholder="Confirm password" />
            </div>
            <button type="submit" class="btn btn-dark">Sign up</button>
            <small id="emailHelp" class="form-text text-muted" >Already have an account? <a href="/login">Log in</a></small>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
