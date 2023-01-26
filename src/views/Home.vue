<template>
  <p draggable="true" @dragstart="e => drag(e)">Click and drag me 👉</p>
  <div class="abs-center">
    <DragNDrop
      class="bottom-24"
      size="250px"
      placeholder="drop here"
      /> 
  </div>
</template>
<script setup>

//==============================
// Imports
//==============================
import { computed, onMounted, reactive, ref } from "@vue/runtime-core";
import DragNDrop from "../components/DragNDrop.vue";

//==============================
// Computed
//==============================

//==============================
// Functions
//==============================
function drag(e) {
  e.dataTransfer.setData("text", 'Voilà 😎');
}
</script>
<style lang="scss" scoped>
 p {
  margin: 50px;
 }
</style>