<template>
    <div class="body">
        <div class="loginbox">
            <h1 class="my-5">Register</h1>
            <form action="/register" method="post" class="mx-4 my-5">
                <div class="row">
        <div class="col">
            <p>FirstName</p>
          <input type="text" class="form-control" name="name" placeholder="Enter FirstName" aria-label="First name" required>
        </div>
        <div class="col">
            <p>LastName</p>
          <input type="text" class="form-control" name="lastname" placeholder="Enter LastName" aria-label="Last name" required>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <p>Email</p>
          <input type="text" class="form-control" name="name" placeholder="Enter Email" aria-label="First name" required>
        </div>
        <div class="col">
            <p>Phone Number</p>
          <input type="text" class="form-control" name="lastname" placeholder="Enter Phone Number" aria-label="Last name" required>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <p>Gender</p>
          <input type="text" class="form-control" name="name" placeholder="First name" aria-label="First name" required>
        </div>
        <div class="col">
            <p>Password</p>
          <input type="text" class="form-control" name="lastname" placeholder="Enter Password" aria-label="Last name" required>
        </div>
      </div>

<div>
<button class="btn btn-light" type="submit" value="LOGIN">Register</button>
</div>

<router-link to="/login"><a href="">Already have an account?</a></router-link>
</form>
            

        
    </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.body{
    margin: 0;
    padding: 0;
    background: url(https://i.postimg.cc/RZQhSy1N/camila-damasio-m-WYhr-Oi-Agm-A-unsplash.jpg);
    background-position: center;
    background-size: cover;
    min-height: 100vh;
}

.loginbox{
    min-width: 300px;
    max-width: 700px;
    background-color: #000;
    color: white;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
}

h1{
    margin: 0;
    padding: 0 0 10px;
    text-align: center;
    font-size: 28px;
}

.loginbox p{
    margin: 0;
    padding: 0;

}

.loginbox form input{
    /* width: 100%; */
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    height: 30px;
    color: white;
    border-radius: 0px;

}

.loginbox button{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 0px;
}

.loginbox button:hover{
    transition: 0.3s;
    opacity: 80%;
}

.loginbox a{
    text-decoration: none;
    color: white;
}

.loginbox a:hover{
    color: rgb(198, 191, 191);
    transition: 0.3s;
}

@media screen and (width <= 650){
    .loginbox{
        width: 70% !important;
    }
}
</style>
