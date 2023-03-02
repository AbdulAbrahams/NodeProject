import { createStore } from 'vuex';
import axios from "axios";
import router from "@/router";

const SneakerStation = "https://sneaker-station-sqk8.onrender.com";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    token: null,
    showSpinner:true
  },
  getters: {
    fetchUsers: (state) => state.users,
    fetchUser: (state) => state.user,
    fetchProducts: (state) => state.products,
    fetchProduct: (state) => state.product
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setUser(state, user) {
      state.user = user;
    },

    setProducts(state, products) {
      state.products = products;
    },

    setSingleProduct(state, product) {
      state.product = product;
    },
  },
  actions: {
    async registerUser(context, payload) {
      const res = await axios.post(`${SneakerStation}register`, payload)
      const { msg, err } = await res.data;
      if (msg) {
        context.commit('setMessage', msg);
      } else {
        context.commit('setMessage', err);
      }
    },
  },

  // addUser: async (context, payload) => {
  //   const {
  //     firstName,
  //     lastName,
  //     emailAdd,
  //     userPass,
  //   } =
  //   payload;
  //   await fetch("https://sneaker-station-sqk8.onrender.com" + "users/" + context.state.user.userID , {
  //       method: "PUT",
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //       body: JSON.stringify({
  //         firstName: firstName,
  //         lastName: lastName,
  //         email: emailAdd,
  //         userPass: userPass,
  //       }),
  //     })
  //     .then((response) => response.json())
  //     .then((json) =>
  //       context.commit(
  //         "setUser",
  //         json,
  //         swal({
  //           icon: "success",
  //           title: `Success`,
  //           buttons: false,
  //           timer: 2000,
  //         }),
  //         router.push({
  //           name: "users",
  //         })
  //       )
  //     );
  // },

  // Register: async (context, payload) => {
  //   const {
  //     firstName,
  //     lastName,
  //     emailAdd,
  //     gender,
  //     userPass
  //   } =
  //   payload;
  //   await fetch("https://sneaker-station-sqk8.onrender.com" + "register", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //       body: JSON.stringify({
  //         firstName: firstName,
  //         lastName: lastName,
  //         emailAdd: emailAdd,
  //         gender: gender,
  //         userPass: userPass,
  //       }),
  //     })
  //     .then((response) => response.json())
  //     .then((json) =>
  //       context.commit(
  //         "setUsers",
  //         json,
  //         swal({
  //           icon: "success",
  //           title: `Registration Successful`,
  //           buttons: false,
  //           timer: 2000,
  //         }),
  //         router.push({
  //           name: "login",
  //         })
  //       )
  //     )
  //     .catch((e) =>
  //       context.commit(
  //         swal({
  //           icon: "success",
  //           title: `Registration Successful`,
  //           buttons: false,
  //           timer: 2000,
  //         }),
  //         router.push({
  //           name: "login",
  //         })
  //       )
  //     );
      
  // },
  modules: {
  }
})
