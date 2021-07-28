<template>
  <Header title="ElektraCatalog"/>
  <Search @oninput="handleSearchString" />

  <div class="inventory" v-if='products.length'>
    <div class="card" v-for="product in products" v-bind:key="product.name">
      <Product :product="product" /> 
    </div>
  </div>

  <p v-else>Loading...</p> <!-- need a loading thingy here -->

    
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import Header from '@/components/Header.vue';
import Search from '@/components/Search.vue';
import Product from '@/components/Product.vue';

import firebase from "firebase/app";
import "@firebase/storage";

interface ProductItem {
  id: number,
  name: string,
  description: string,
  image: string,
  quantity: number,
  price: string,
  placement: string,
  link: string
}

export default defineComponent({
  name: 'Catalog',
  components: {
    Header,
    Search,
    Product
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    handleSearchString(value:string) {
      console.log('Searching for: ', value);
    }
  },
  beforeCreate() {

    const firebaseConfig = {
      apiKey: "AIzaSyCPCsYgkHDAwvrtlbfvfvPlDzInBfjs2EE",
      authDomain: "elektracatalog.firebaseapp.com",
      projectId: "elektracatalog",
      storageBucket: "elektracatalog.appspot.com",
      messagingSenderId: "698223650938",
      appId: "1:698223650938:web:8faf17ae2cf22fc8b2f3c3"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }

  },
  mounted () {

    fetch("https://script.google.com/macros/s/AKfycbxncBJpmQyM7QfiNIpRrG3tp4sSvyiogGnJ8-8FQfckF4AtdElN7xs9AOAFfVrYes9Zaw/exec", {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8'}
    }).then(response => response.json()).then(json => {

      json.forEach((item:ProductItem) => {
        let storageRef = firebase.storage().ref().child(item.image);

        storageRef.getDownloadURL().then((res:string) => {
          let productItem:ProductItem = {
          id: item.id,
          name: item.name, 
          description: item.description, 
          image: res, 
          quantity: item.quantity ,
          price: item.price,
          placement: item.placement,
          link: item.link
        };

        this.products.push(productItem)
        })
        .catch(error => {
          console.log(error);
          return ""
        });
      });
    });
  }
});


</script>

<style scoped>

  .inventory {
    display: flex;
    flex-wrap: wrap;
    margin: 25px 0;
    flex-direction: column;
    align-content: stretch;
  }

  .card {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;

    padding: 0 15px;
    text-decoration: none;
    border: none;
    border-bottom: 0.5px solid rgba(255,255,255,0.1);
  }

</style>


