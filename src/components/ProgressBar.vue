<template>
  <div class="bar">
    <div class="value" :style="{ width: `${(value * 100) / total}%` }"></div>
  </div>
  <span class="tip"> {{ value }} / {{ total }} </span>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

// ==============================
// Props
// ==============================
const props = defineProps({
  value: Number,
  total: Number,
});

const emits = defineEmits(["completed"]);

// ==============================
// Watch
// ==============================
watch(
  () => props.value,
  (v) => {
    if (v == props.total) {
      emits("completed");
    }
  }
);
</script>

<style lang="scss" scoped>
.bar {
  position: relative;
  box-sizing: border-box;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(0, 200, 0, 0.4);
  border: 2px solid var(--green-secondary);
  overflow: hidden;

  .value {
    position: absolute;
    height: inherit;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    background-color: var(--green);
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
}
  .tip {
    color: white;
    font-size: 22px;
    margin: 10px 10px 0 0;
    float: right;
  }

</style>
