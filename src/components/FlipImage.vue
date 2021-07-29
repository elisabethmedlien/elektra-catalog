<template>

  <div class="flip-box">
    <div class="flip-box-inner">
      <figure class="flip-box-front">
        <img v-bind:src='img'>
      </figure>
      <div class="flip-box-back">
        <canvas v-bind:id="'canvas-' + qr"></canvas>
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
    qr: String,
  }, mounted(){
    let canvas = document.getElementById('canvas-'+this.qr)

    QRCode.toCanvas(canvas, 'canvas-'+this.qr, function (error:Error) {
      if (error) console.error(error)
      console.log('success!');
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

.flip-box:hover .flip-box-inner {
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
