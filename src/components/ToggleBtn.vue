<template>
  <div class="btn-box">
    <div class="cursor"></div>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "@vue/reactivity";

const emits = defineEmits(["update"]);

// ==============================
// Variables
// ==============================
const value = ref("");
</script>

<style lang="scss" scoped>
$cursorSize: 25px;
.btn-box {
  width: $cursorSize * 2;
  height: $cursorSize;
  border-radius: 25px;
  background-color: #444;
  .cursor {
    width: $cursorSize;
    height: $cursorSize;
    border-radius: 50%;
    background-color: #eee;
  }
}
</style>
