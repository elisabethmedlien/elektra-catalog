<template>

  <div class="flip-box" @click="flip" v-bind:id="'flip-'+id">
    <div class="flip-box-inner">
      <figure class="flip-box-front">
        <img v-bind:src='img'>
      </figure>
      <div class="flip-box-back">
        <canvas v-bind:id="'canvas-' + id"></canvas>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QRCode from 'qrcode';


export default defineComponent({
  name: 'FlipImage',
  props: {
    img: String,
    id: String,
  },
  state : {
    method: { type: Function },
  },
  methods: {
    flip: function(){
      let flip = document.getElementById('flip-'+this.id);
      let isFlipped = flip.className.includes("flipped");

      isFlipped ? flip.classList.remove("flipped") : flip.classList.add("flipped");
      
    }
  },
  mounted(){
    let canvas = document.getElementById('canvas-'+this.id)

    QRCode.toCanvas(canvas, 'canvas-'+this.id, function (error:Error) {
      if (error) console.error(error)
    })
  }
});

</script>

<style scoped>

.flip-box {
  background-color: transparent;
  margin: 15px 0;
  min-width: 150px;
  height: auto;
  perspective: 1000px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flipped .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
  background-color: rgba(255,255,255,0.01);
  color: black;
}

.flip-box-back {
  background-color:rgba(255,255,255,0.05);
  color: white;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center
}

figure {
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center
}

img {
  width: 135px;
}

</style>
