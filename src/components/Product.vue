<template>
  <FlipImage :img="product.image" :id=product.id />

  <div>
    <h2 class="product_name">{{ product.name }}</h2>
    <small class="product_availability available">{{product.quantity}} på lager</small>
    <small> Plassering: {{product.placement}} </small>

    <p>{{product.description}}</p>
    <p class="price"> {{product.price}},- </p>
    <a class="button orange-bg-color" :href="product.link" target="_blank" rel="no-follow"> Link til info </a>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FlipImage from "./FlipImage.vue";

export default defineComponent({
  name: 'Product',
  components: {
    FlipImage
  },
  props: {
    product: {}
  }
});

</script>

<style scoped>

  div:first-of-type {
    flex-grow: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div:nth-of-type(2) {
    padding: 20px 10px;
    justify-content: space-between;
    word-wrap: break-word;
    flex-grow: 1;
    flex-shrink: 1;
  }


  h2 {
    text-shadow: 0px 1px black;
    margin: 0 0 5px 0;
    font-size: 18px;
    font-weight: 400;
    text-transform:uppercase;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
  }

  .button {
    padding: 3px 10px;
    border-radius: 5px;
  }
  

</style>
