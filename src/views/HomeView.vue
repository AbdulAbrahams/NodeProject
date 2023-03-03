<template>
  <Navbar/>
  <div class="home">
    <div class="container text">
      <h1>Welcome</h1>
      <p>We Sell a Variety of Shoes to meet your pleasure!</p>
    </div>
  
          <div class="container">
            <div class="row">
              <h1 class="prodHead">Our Products</h1>
              <div class="container">
                  <div class="box">
                    <div class="search">
                 <input class="filter-input" id="search" @click="searchProducts"  type="text" placeholder="Search">
             </div>
          </div>
          <button id="sort" @click="sortPrice"><i class="bi bi-arrow-down"></i>Price<i class="bi bi-arrow-up"></i></button>
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
      methods: {
        sortPrice(){
            this.$store.commit("sortProductsPrice")
        }},
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

.text{
  text-align: center;
}
.home{
  margin-top: 150px;
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
