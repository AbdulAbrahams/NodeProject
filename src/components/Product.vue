<template>
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
</template>

<script>
import axios from "axios";
    export default {
        name: 'Product',
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

<style scoped>

.prodHead{
  text-align: center;
}

.card{
 max-height: 420px; 
}

</style>