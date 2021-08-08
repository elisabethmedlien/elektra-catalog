<template>

  <div class="wrapper"> 
    <div class="circle">
      <span class="material-icons">list</span>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FloatingIcon',
  props: {},
  methods: {}
});

</script>

<style scoped>

.wrapper {
  display:flex;
  justify-content: flex-end;
  width: 90%;
  margin: auto;
  z-index: 1;
  position: fixed;
  bottom: 15px;
}

.circle {
  border-radius: 50%;
  background-color: #e91e63;
  width: 60px;
  height: 60px;
}

span {
  text-align: right;
  font-size: 40px;
  line-height: 60px;
}

</style>
