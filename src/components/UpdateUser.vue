<template>
    <div class="modal fade" :id="`editModal${user.id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form autocomplete="off">
              <p>First Name</p>
                <input class="col-12 my-3" id="Name" type="text" :value="user.firstName" required>
                <p>Last Name</p>
                <input class="col-12 my-3" id="Brand" type="text" :value="user.lastName" required>
                <p>Email Address</p>
                <input class="col-12 my-3" id="Price" type="text" :value="user.emailAdd" required>
                <p>User Role</p>
                <input class="col-12 my-3" id="Price" type="text" :value="user.userRole" required>
                <p>Profile Image</p>
                <input class="col-12 my-3" id="img" type="text" :value="user.userProfile" required>
                <div class="modal-footer">
                    <button type="Submit" class="btn btn-primary" data-bs-dismiss="modal" id="submit" value="submit">Edit Shoe</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'UpdateUser'
    }
</script>

<style  scoped>

tbody{
  background: black;
  color: white;
}

.modal-content{
  background: black;
}
.modal-body p{
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: white;
}

.modal-body input{
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
  color: white;
  border-bottom: 0px;
}

.modal-footer{
  border-top: 0px;
}

.btn-close{
  background-color: white;
}

</style>