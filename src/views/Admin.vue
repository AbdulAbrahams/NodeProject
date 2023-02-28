<template>
  <h1 class="users">Users</h1>
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
              <tr style="font-size: 12px;">
                  <td>Air Forces</td>
                  <td>Nike</td>
                  <td>R2800</td>
                  <td><img src="https://i.postimg.cc/SKBrHCGy/Nike-sb.jpg" style="width: 60px; height: 50px;"></td>
                  <td><a href="#" class="btn btn-dark btn-sm edit" data-bs-toggle="modal" data-bs-target="#editModal" id="addCart" style="font-size: 12px;">Edit</a>
                    <a href="#" id="${index}" class="btn btn-primary btn-sm delete" style="font-size: 12px;">Del</a>
                  </td>
              </tr>
              <tr style="font-size: 12px;">
                  <td>Air Forces</td>
                  <td>Nike</td>
                  <td>R2800</td>
                  <td><img src="https://i.postimg.cc/SKBrHCGy/Nike-sb.jpg" style="width: 60px; height: 50px;"></td>
                  <td><a href="#" class="btn btn-dark btn-sm edit" data-bs-toggle="modal" data-bs-target="#editModal" id="addCart" style="font-size: 12px;">Edit</a>
                    <a href="#" id="${index}" class="btn btn-primary btn-sm delete" style="font-size: 12px;">Del</a>
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
              <tr style="font-size: 12px; border-bottom: 1px solid white;">
                  <td>Air Forces</td>
                  <td>Nike</td>
                  <td>R2800</td>
                  <td><img src="https://i.postimg.cc/SKBrHCGy/Nike-sb.jpg" style="width: 60px; height: 50px;"></td>
                  <td><a href="#" class="btn btn-dark btn-sm edit" data-bs-toggle="modal" data-bs-target="#editModal" id="addCart" style="font-size: 12px;">Edit</a>
                    <a href="#" id="${index}" class="btn btn-primary btn-sm delete" style="font-size: 12px;">Del</a>
                  </td>
              </tr>
              <tr style="font-size: 12px;">
                  <td>Air Forces</td>
                  <td>Nike</td>
                  <td>R2800</td>
                  <td><img src="https://i.postimg.cc/SKBrHCGy/Nike-sb.jpg" style="width: 60px; height: 50px;"></td>
                  <td><a href="#" class="btn btn-dark btn-sm edit" data-bs-toggle="modal" data-bs-target="#editModal" id="addCart" style="font-size: 12px;">Edit</a>
                    <a href="#" id="${index}" class="btn btn-primary btn-sm delete" style="font-size: 12px;">Del</a>
                  </td>
              </tr>
            </tbody>
        </table>
        </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

h1{
  text-align: center;
}

.users{
  margin-top: 80px;
}

thead{
  background: black;
  color: white;
}

tbody{
  background: black;
  color: white;
}

tr:hover{
  opacity: 80%;
}
</style>
