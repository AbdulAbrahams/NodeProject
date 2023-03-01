<template>
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
            <input type="text" placeholder="Search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
              </div>
              <div class="col-md-4 mt-5" v-for="item in items" :key="item.id">
                <div class="card" >
                  <img :src="item.imgURL" alt="" class="card-img-top w-100" style="height: 270px;">
                  <div class="card-body">
                    <h3 class="card-title">{{ item.prodName }}</h3>
                      <div class="d-flex justify-content-between">
                        <p>{{ item.prodDescription }}</p>
                        <p>R{{ item.price }}</p>
                      </div>
                      <button type="button" data-name="${Data.Name}" data-price="${Data.Price}" data-brand="${Data.Brand}" class="btn btn-sm btn-dark" id="addShoe" onclick="shoeAdd()">View More</button>
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
  name: 'HomeView',
  components: {
  
  },
  data() {
       return {
           items: [],
       };
   },
   created() {
       this.getProducts();
   },
   methods: {
       async getProducts() {
           try{
               const response = await axios.get("https://sneaker-station-sqk8.onrender.com/products");
               this.items = response.data.results;
               console.log(response);
           } catch (err) {
               console.log(err);
           }
       },
       async deleteProduct(id) {
           try {
               await axios.delete(`https://sneaker-station-sqk8.onrender.com/products/${id}`);
               this.getProducts();
           } catch(err) {
               console.log(err);
           }
       },
   },
};
</script>

<style>
.home{
  margin-top: 100px;
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

.prodHead{
  text-align: center;
}
</style>
