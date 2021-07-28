<template>
<input type="search" />

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Search',
  props: {}
});

</script>

<style scoped>

input[type="search"] {
  background-color: rgba(31,32,35, 0.98);
  width: 100%;
  color:white;
  border-style: none;
  border-bottom: rgba(255,255,255, 0.5) 0.5px solid;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}

</style>
