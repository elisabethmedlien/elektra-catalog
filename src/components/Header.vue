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

}

</style>
