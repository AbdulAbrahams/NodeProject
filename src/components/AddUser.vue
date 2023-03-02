<template>
    <tr :key="users.id" style="font-size: 14px;">
                  <td>{{ users.firstName.value }}</td>
                  <td>{{ users.lastName.value }}</td>
                  <td>{{ users.emailAdd.value }}</td>
                  <td>{{ users.userRole.value }}</td>
                  <td><img :src="users.userProfile" style="width: 60px; height: 50px;"></td>
                  <td>
                    <a href="#" class="btn btn-dark btn-md edit" data-bs-toggle="modal" :data-bs-target="`#editModal${users.userID}`" id="addCart" style="font-size: 12px;">Edit</a>
    <div class="modal fade" :id="`editModal${users.userID}`" :key="users.userID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
          <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form autocomplete="off">
            <p>First Name</p>
              <input class="col-12 my-3" id="Name" type="text" :value="users.firstName" required>
              <p>Last Name</p>
              <input class="col-12 my-3" id="Brand" type="text" :value="users.lastName" required>
              <p>Email Address</p>
              <input class="col-12 my-3" id="Price" type="text" :value="users.emailAdd" required>
              <p>User Role</p>
              <input class="col-12 my-3" id="Price" type="text" :value="users.userRole" required>
              <p>Profile Image</p>
              <input class="col-12 my-3" id="img" type="text" :value="users.userProfile" required>
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
</template>

<script>
import axios from 'axios';
    export default {
        name: 'AddUser',
        data() {
       return {
           users: []
       };
   },
   created() {
       this.fetchUsers();
   },
   methods: {
    async createUser() {
           try {
               await axios.delete(`https://sneaker-station-sqk8.onrender.com/users`);
               this.createUser();
           } catch(err) {
               console.log(err);
           }
       },
   },
};
  
</script>

<style  scoped>

</style>