<template>
  <h1 class="users">Users</h1>
       <div class="table crud-table">
            <table class="table align-middle container-sm">
            <thead class="">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Profile Image</th>
                <th>Edit</th>
            </thead>
            <tbody id="shoe-list" class="">
              <tr v-for="user in users" :key="user.id" style="font-size: 14px;">
                  <td>{{ user.firstName }}</td>
                  <td>{{ user.lastName }}</td>
                  <td>{{ user.emailAdd }}</td>
                  <td>{{ user.userRole }}</td>
                  <td><img :src="user.userProfile" style="width: 60px; height: 50px;"></td>
                  <td>
                    <a href="#" class="btn btn-dark btn-md edit" data-bs-toggle="modal" data-bs-target="#editModal" id="addCart" style="font-size: 12px;">Edit</a>
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add a Shoe</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form autocomplete="off">
                <input class="col-12 my-3" id="Name" type="text" value="${details.Name}" required>
                <input class="col-12 my-3" id="Brand" type="text" value="${details.Brand}" required>
                <input class="col-12 my-3" id="Price" type="text" value="${details.Price}" required>
                <input class="col-12 my-3" id="img" type="text" value="${details.img}" required>
                <div class="modal-footer">
                    <button type="Submit" class="btn btn-primary" data-bs-dismiss="modal" id="submit" value="submit">Edit Shoe</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
    <a href="#" id="${index}" class="btn btn-danger btn-md delete" onsubmit="delShoe(td)" style="font-size: 12px;">Del</a>
                  </td>
    </tr>

            </tbody>
        </table>
        </div>

        <h1>Products</h1>
        <div class="table crud-table">
            <table class="table align-middle container-sm">
            <thead class="">
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Image</th>
                <th>Edit</th>
            </thead>
            <tbody id="shoe-list" class="">
              <tr v-for="item in items" :key="item.id" style="font-size: 14px;">
                  <td>{{ item.prodName }}</td>
                  <td>{{ item.prodDescription }}</td>
                  <td>R{{ item.price }}</td>
                  <td><img :src="item.imgURL" style="width: 60px; height: 50px;"></td>
                  <td>
                    <a href="#" class="btn btn-dark btn-md edit" data-bs-toggle="modal" data-bs-target="#editModal" id="addCart" style="font-size: 12px;">Edit</a>
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
          <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form autocomplete="off" class="itemForm">
              <p>Product Name</p>
                <input class="col-12 my-3" id="Name" type="text" :value="item.prodName" required>
                <p>Product Description</p>
                <input class="col-12 my-3" id="Brand" type="text" :value="item.prodDescription" required>
                <p>Product Price</p>
                <input class="col-12 my-3" id="Price" type="text" :value="item.price" required>
                <p>Image URL</p>
                <input class="col-12 my-3" id="img" type="text" :value="item.imgURL" required>
                <div class="modal-footer">
                    <button type="Submit" class="btn btn-light" data-bs-dismiss="modal" id="submit" value="submit">Edit Product</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
    <a href="#" id="${index}" class="btn btn-danger btn-md delete" onsubmit="delShoe(td)" style="font-size: 12px;">Del</a>
                  </td>
    </tr>
            </tbody>
        </table>
        </div>
</template>

<script>
import axios from "axios";
  export default {
    name: 'Admin',
    data() {
       return {
           items: [],
           users: []
       };
   },
   created() {
       this.getProducts();
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
       async deleteUser(id) {
           try {
               await axios.delete(`https://sneaker-station-sqk8.onrender.com/users${id}`);
               this.fetchUsers();
           } catch(err) {
               console.log(err);
           }
       },
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
               await axios.delete(`https://sneaker-station-sqk8.onrender.com/products${id}`);
               this.getProducts();
           } catch(err) {
               console.log(err);
           }
       },
   },
};

</script>

<style scoped>

h1{
  text-align: center;
}

.users{
  margin-top: 100px;
}

thead{
  background: black;
  color: white;
}

tbody{
  background: black;
  color: white;
}

.modal-content{
  background: black;
}
.itemForm p{
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: white;
}

.itemForm input{
    width: 100%;
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    height: 40px;
    color: white;

}

.modal-header{
  border-bottom: 0px;
}

.modal-footer{
  border-top: 0px;
}
</style>
