<template>
  <div class="ribbon">
    <div class="ribbon-stripes-top"></div>
    UNDER CONSTRUCTION
    <div class="ribbon-stripes-bottom"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.ribbon {
  position: absolute;
  z-index: 500;
  width: 506px;
  height: 50px;
  top: 30px;
  left: -97px;
  padding-left: 50px;
  background-color: yellow;
  line-height: 50px;
  font-size: 24px;
  font-weight: bold;
  color: black;
  transform: rotate(-45deg);
  box-shadow: 3px 3px 10px rgb(0 0 0 / 20%);
}

.ribbon::before,
.ribbon::after {
  content: "";
  position: absolute;
  border-width: 0 15px 15px 0;
  border-style: solid;
}

.ribbon::before {
  top: 0;
  left: 0;
  border-color: transparent transparent yellow yellow;
}

.ribbon::after {
  bottom: 0;
  right: 0;
  border-color: yellow yellow transparent transparent;
}

.ribbon-stripes-top,
.ribbon-stripes-bottom {
  position: relative;
  height: 5px;
  top: -5px;
  left: -50px;
  background-image: linear-gradient(to right, black 50%, yellow 50%);
  background-size: 20px 100%;
}
</style>
