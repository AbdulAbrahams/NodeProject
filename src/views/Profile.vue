<template>
    <UserProfile/>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
    export default {
        name: 'Profile',
        components: {
            UserProfile
        },
        data() {
       return {
           users: []
       };
   },
   created() {
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
   },
};
</script>


<style scoped>
</style>