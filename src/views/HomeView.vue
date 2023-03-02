<template>
  <Navbar/>
  <div class="home">
    <div class="container">
      <h1>Welcome</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ducimus, accusantium facilis omnis deserunt maxime velit. Non veritatis totam est molestias aliquam ipsa dolorem velit accusamus libero, repellendus vel tenetur?</p>
    </div>
  
          <div class="container">
            <div class="row">
              <h1 class="prodHead">Our Products</h1>
              <div class="container">
                  <div class="box">
                    <div class="search">
                 <input class="filter-input" id="search" v-model="search" type="text" placeholder="Search">
             </div>
          </div>
              </div>
              <Product/>
            </div>
          </div>
          
          
    </div>
    <Footer/>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Product from '../components/Product.vue'
export default {
  name: 'HomeView',
  components: {
   Navbar, Product, Footer
  },
  computed: {
       sortedAndFilteredProducts() {
           let sortedProducts = this.sortProducts();
           let filteredProducts = this.filteredProducts(sortedProducts);
           let searchedProducts = this.searchProducts(filteredProducts);
           return searchedProducts;
       },
    methods: {
        sortProducts() {
            let sortKey = this.sortBy;
            return this.products.sort((a, b) => {
                if (a[sortKey] < b[sortKey]) return -1;
                if (a[sortKey] > b[sortKey]) return 1;
                return 0;
            });
        },
        filteredProducts(products) {
            if (this.filterBy === 'all') {
                return products;
            } else {
                return products.filter(product => product.category === this.filterBy);
            }
        },
        searchProducts(products) {
            if (this.search === '') {
                return products;
            } else {
                return products.filter(product => product.name.toLowerCase().includes(this.search.toLowerCase()));
            }
        }
    }
}
}
</script>

<style>
.home{
  margin-top: 120px;
  min-height: 100vh;
}

.box{
  background-color: rgb(30, 30, 30);
  width: 250px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  float: right;
  padding: 0px 25px;
}

.box input{
  color: white;
  background: transparent;
  width: 240px;
  border: none;
  outline: none;
}
</style>
