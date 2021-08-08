<template>

  <div class="wrapper"> 
    <span class="material-icons">search</span>
    <input type="search" placeholder="Søk etter produkter.." v-on:input="signalInput"  />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Search',
  props: {
  method: { type: Function },
  },
  methods: {
    signalInput: function(e:Event){
      const target = e.target as HTMLTextAreaElement;
      this.$emit("oninput", target.value.toLowerCase());
    }
  }
});

</script>

<style scoped>

input[type="search"] {
  background-color: rgba(31,32,35, 0.98);
  width: 100%;
  color:white;
  border-style: none;
  /* border-bottom: rgba(255,255,255, 0.5) 0.5px solid; */
}

input[type="search"]:focus-visible {
  outline:none;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}

.wrapper {
  position: relative;
  display: flex;
  min-width: 100px;
  border-bottom: 0.5px solid rgba(255,255,255,0.6);
  width: 90%;
  margin:auto;
  padding-bottom:7px;

}

span {
  margin-right: 10px;
}

</style>
