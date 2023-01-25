<template>
  <input
    v-model="inputValue"
    type="range"
    :min="min"
    :max="max"
    :step="step"
    @input="emit('update', inputValue)"
  />
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
  value: Number,
  min: Number,
  max: Number,
  step: Number,
});

const emit = defineEmits(["update"]);

//==============================
// Consts
//==============================
const inputValue = ref(props.value);
</script>

<style lang="scss" scoped>
$thumb: 25px;

input {
  appearance: none;
  width: 100%;
  background: transparent;
  cursor: pointer;
  transition-duration: 500ms;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: $thumb;
    width: $thumb;
    border-radius: 50%;
    background-color: #eee;
    &:hover {
      background-color: cadetblue;
      transition-duration: 500ms;
    }
  }
  &:focus {
    outline: none;
  }
  &::-ms-track {
    width: 100%;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    transition-duration: 500ms;
    height: $thumb;
    background: #444;
    border-radius: 25px;
  }
}
</style>
