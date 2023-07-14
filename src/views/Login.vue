<template>
   <div class="about">
    <h1>Log in form: </h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
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
            <button type="submit" class="btn btn-dark">Log in</button>
            <small id="emailHelp" class="form-text text-muted" >Don't have an account? <a href="/signup">Sign up</a></small>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
