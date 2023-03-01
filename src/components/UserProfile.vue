<template>
    <div class="profile">
        <h1 class="mx-5">Profile</h1>
        <div class="container">
            <div class="main">
                <div class="row">
                    <div class="col md-4 mt-1">
                        <div class="card text-center sidebar">
                            <div class="card-body">
                                <img src="https://i.postimg.cc/q7tPbdZY/samsung-uk-MBRr-Xdf8i-SQ-unsplash.jpg" alt="" class="my-4">
                                <div class="card-text">
                                    <h3 class="my-4">Abdul Abrahams</h3>
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
                                    Abdul Wahhaab Abrahams
                                </div>
                            </div>
                            <div class="row my-5 aboutRow">
                                <div class="col aboutHead">
                                    Email
                                </div>
                                <div class="col-8">
                                    abdulabrahams2002@gmail.com
                                </div>
                        </div>
                        <div class="row my-5 aboutRow">
                                <div class="col aboutHead">
                                    Phone Number
                                </div>
                                <div class="col-8">
                                    0834004653
                                </div>
                    </div>
                    <div class="row my-5 aboutRow">
                                <div class="col aboutHead">
                                    Gender
                                </div>
                                <div class="col-8">
                                    Male
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
    export default {
        name: 'UserProfile'
    }
</script>

<style scoped>
.profile{
    overflow-x: hidden;
    margin-top: 80px;
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