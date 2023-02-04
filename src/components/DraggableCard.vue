<template>
 <div
   class="card"
   draggable="true"
   @dragstart="e => drag(e)"
  >
    <p>{{ syllable }}</p>
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
  background: #f2f2f2;
  border-radius: 8px;
  height: 100%;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
   p {
    color: black;
    font-size: 50px;
    padding: 8px 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
