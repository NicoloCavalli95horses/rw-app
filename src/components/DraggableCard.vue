<template>
 <div
   class="card"
   :style="{ 'width' :  `${size}px`, 'height':  `${size*1.3}px` }"
   draggable="true"
   @dragstart="e => drag(e)"
  >
    <span class="content">{{ content }}</span>
  </div>
</template>

<script setup>
//==============================
// Imports
//==============================
import { reactive, ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

//==============================
// Props and emits
//==============================
const props = defineProps({
  size: Number,
  content: String
});

const emit = defineEmits(["update"]);
//==============================
// Consts
//==============================

//==============================
// Functions
//==============================
function drag( e ) {
  e.dataTransfer.setData("text", props.content);
}

//==============================
// Life cycle
//==============================
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  border-radius: 8px;
  .content {
      color: black;
      font-size: 52px;
      font-weight: bold;
      text-transform: uppercase;
    }
}
</style>
