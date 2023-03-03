<template>
    <div class="profile">
        <h1 class="mx-5">Profile</h1>
        <div class="container" v-for="user in users" :key="user.id">
            <div class="main" :data-bs-target="`#ProfUser${user.userID}`">
                <div class="row" :id="`ProfUser${user.userID}`">
                    <div class="col md-4 mt-1">
                        <div class="card text-center sidebar">
                            <div class="card-body">
                                <img :src="user.userProfile" alt="" class="my-4">
                                <div class="card-text">
                                    <h3 class="my-4">{{ user.firstName }} {{ user.lastName }}</h3>
                                    <a href="/login" class="logBut bg-white mx-5 my-3 p-2 px-5">Log Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9 mt-1 about">
                        <div class=" mx">
                            <h1>About</h1>
                            <div class="row my-5 aboutRow">
                                <div class="col aboutHead">
                                    Full Name
                                </div>
                                <div class="col-8">
                                    {{ user.firstName }} {{ user.lastName }}
                                </div>
                            </div>
                            <div class="row my-5 aboutRow">
                                <div class="col aboutHead">
                                    Email
                                </div>
                                <div class="col-8">
                                    {{ user.emailAdd }}
                                </div>
                        </div>
                        <div class="row my-5 aboutRow">
                                <div class="col aboutHead">
                                    Role
                                </div>
                                <div class="col-8">
                                    {{ user.userRole }}
                                </div>
                    </div>
                    <div class="row my-5 aboutRow">
                                <div class="col aboutHead">
                                    Gender
                                </div>
                                <div class="col-8">
                                    {{ user.gender }}
                                </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'UserProfile',
        data() {
       return {
           users: []
       };
   },
   created() {
       this.fetchUsers();
   },
   methods: {
    async fetchUsers() {
           try{
               const response = await axios.get("https://sneaker-station-sqk8.onrender.com/users");
               this.users = response.data.results;
               console.log(response);
           } catch (err) {
               console.log(err);
           }
       },
   },
};
</script>

<style scoped>
.profile{
    overflow-x: hidden;
    margin-top: 150px;
    min-height: 100vh;
}

.card-body{
    height: 445px;
    background-color: black;
    color: white;
}

.card-body img{
    margin-top: 15px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
}

.logOut{
    margin-top: 30px !important;
}

.about{
    max-width: 100%;
}

.aboutRow{
    padding: 10px;
    border-bottom: 1px solid black;
}

.aboutHead{
    font-size: 20px;
    font-weight: bold;
}

.col-8{
    font-size: 18px;
}



.logBut{
            text-align: center;
            text-decoration: none;
            max-width: 100px !important;
            color: rgb(0, 0, 0);
        }

        .logBut:hover{
            color: rgb(0, 0, 0);
           opacity: 90%;
        }

</style>