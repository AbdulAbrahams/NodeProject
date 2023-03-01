<template>
    <nav class="navbar navbar-light bg-transparent fixed-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <span class="name">Sneaker Station</span>
          <button type="button" class="btn position-relative">
            <i class="fa fa-shopping-cart cart"></i>
  <!-- <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill numbers">
    0
  </span> -->
</button>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
      <a href="/profile" class="d-flex align-items-center link-dark text-decoration-none my-3 mx-2">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>Abdul Abrahams</strong>
      </a>
            <button type="button" class="btn-close btn-light text-reset mx-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" data-bs-dismiss="offcanvas">
                <li class="nav-item my-4 mx-2">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item my-4 mx-2">
                    <router-link to="/admin">Admin</router-link>
                </li>
                <li class="nav-item my-4 mx-2">
                    <router-link to="/contact">Contact</router-link>
                </li>
              </ul>
            </div>
            <a href="/login" class="logBut bg-dark mx-5 my-3 p-2">Login</a>
          </div>
        </div>
      </nav>

</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style  scoped>

.navbar{
    opacity: 92%;
}

.offcanvas{
    background-color: rgb(242, 242, 242);
    max-width: 55vw;
}

nav {
  padding: 30px;
}

nav a {
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #cd0808;
}
.navbar-toggler{
    border: 2px solid grey;
}
.cart{
    font-size: 29px;
}

.name{
  font-family: 'Rock Salt', cursive !important;
}

.numbers{
    color: black;
    font-size: 18px;
}

.logBut{
            text-align: center;
            text-decoration: none;
            max-width: 75%;
            color: white;
        }

        .logBut:hover{
            color: white;
           opacity: 90%;
        }

</style>