<template>
       <div class="table crud-table">
            <table class="table align-middle container-sm table-hover">
            <thead class="table-white">
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Image</th>
                <th>Edit</th>
            </thead>
            <tbody id="shoe-list" class="table-dark">
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

</style>
