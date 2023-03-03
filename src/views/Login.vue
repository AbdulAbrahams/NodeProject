<template>
    <div class="body">
        <div class="loginbox p-2  animate__animated animate__fadeIn">
            <h1 class="my-4">Login</h1>
            
            <form @submit.prevent="loginForm" method="post" class="mx-3 my-3">
    <div>
        <p>Email</p>
       <input type="email" v-model="emailAdd" name="userEmail" id="email" class="my-2" placeholder="Enter Email" required> 
    </div>
    <div>
        <p>Password</p>
        <input type="password" v-model="userPass" name="password" id="password" class="my-2" placeholder="Enter Password" required>
    </div>
    <div>
        <router-link to="/"><button class="btn btn-light" type="submit">Login</button></router-link>
    </div>
    
    <a href="">Forgot Password?</a><br>
    <router-link to="/register"><a href="">Don't have an account?</a></router-link>
     </form>

        
    </div>
        </div>
</template>

<script>
import 'animate.css';
    export default {
           computed: {
        user() {
            return this.$store.state.user
        }
    },
        data() {
        return {
           emailAdd: "",
           userPass: "",
        
            
        };
    },
    methods: {
       async loginForm () {
       await this.$store.dispatch("loginUser", {
            emailAdd: this.emailAdd,
            userPass: this.userPass
        });
       },
    }
}
</script>

<style scoped>
.my-element {
  animation: fadeIn;
  animation-duration: 5s;
}


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

.loginbox input{
    width: 100%;
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    height: 40px;
    color: white;

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

</style>