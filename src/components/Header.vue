<template>
  <h1> {{title}} </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    title:String
  }
});

</script>

<style scoped>

h1 {
  padding: 25px 0;
  margin: 0;
  margin-bottom: 45px;
  font-weight: 500;
  font-size:46px;
}

</style>
