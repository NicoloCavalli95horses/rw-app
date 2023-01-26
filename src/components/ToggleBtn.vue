<template>
  <div
    class="btn-box"
    @click="
      () => {
        toggle = !toggle;
        emits('update', toggle);
      }
    "
  >
    <div class="cursor" :class="{ active: toggle }"></div>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "@vue/reactivity";

// ==============================
// Emits
// ==============================
const emits = defineEmits(["update"]);

// ==============================
// Variables
// ==============================
const toggle = ref(false);
</script>

<style lang="scss" scoped>
$cursorSize: 25px;
.btn-box {
  width: $cursorSize * 2;
  height: $cursorSize;
  border-radius: 25px;
  background-color: #444;
  cursor: pointer;
  .cursor {
    width: $cursorSize;
    height: $cursorSize;
    border-radius: 50%;
    background-color: #eee;
    transition-duration: 400ms;

    &.active {
      margin-left: $cursorSize;
      background-color: var(--blue);
      transition-duration: 400ms;
    }
  }
}
</style>
