<template>
  <div
    class="area"
    :style="{ width: size, height: size }"
    @dragover="(e) => e.preventDefault()"
    @drop="(e) => drop(e)"
  >
    <p v-if="placeholder">{{ placeholder }}</p>
  </div>
</template>

<script setup>
//==============================
// Imports
//==============================
import { ref } from "@vue/reactivity";

//==============================
// Props and emits
//==============================
const props = defineProps({
  size: String, // area size in px
  placeholder: String, // text centered in the drag and drop area
});

const emit = defineEmits(["update"]);
//==============================
// Consts
//==============================
const placeholder = ref(props.placeholder);

//==============================
// Functions
//==============================
function drop(ev) {
  ev.preventDefault();
  placeholder.value = ev.dataTransfer.getData("text");
}
</script>

<style lang="scss" scoped>
.area {
  border: 2px dashed darkgray;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
}
</style>
