<template>
 <div
   class="card"
   :style="{ 'width' :  `${size}px`, 'height':  `${size*1.3}px` }"
   draggable="true"
   @dragstart="e => drag(e)"
  >
    <span class="content">{{ syllable }}</span>
  </div>
</template>

<script setup>
//==============================
// Imports
//==============================
import { reactive, ref } from "@vue/reactivity";
import { onMounted, onUnmounted, watch } from "@vue/runtime-core";

//==============================
// Props and emits
//==============================
const props = defineProps({
  size: Number,
  content: String
});

//==============================
// Consts
//==============================
const syllable = ref( props.content );

//==============================
// Functions
//==============================
function drag( e ) {
  e.dataTransfer.setData("text", props.content);
}

// ==============================
// Watch
// ==============================
watch(() => props.content, (c) => {
  syllable.value = c;
});

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
