<template>
  <div
    class="area"
    :class="{ 'valid' : isValid }"
    :style="{ width: size, height: size }"
    @dragover="(e) => e.preventDefault()"
    @drop="(e) => drop(e)"
  >
    <span class="content">{{ content }}</span>
  </div>
</template>

<script setup>
//==============================
// Imports
//==============================
import { ref } from "@vue/reactivity";
import { computed, watch } from "@vue/runtime-core";

//==============================
// Props and emits
//==============================
const props = defineProps({
  size: String, // area size in px
  solution: String,
});

const emits = defineEmits(['correctAnswer']);

//==============================
// Consts
//==============================
const content = ref('');

//==============================
// Computed
//==============================
const isValid = computed(() => content.value == props.solution );

//==============================
// Functions
//==============================
function drop(ev) {
  ev.preventDefault();
  content.value = ev.dataTransfer.getData("text");
}

//==============================
// Watchers
//==============================
watch( isValid, () => {
  if ( isValid ){
    emits('correctAnswer', content.value)
  }
})
</script>

<style lang="scss" scoped>
.area {
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  background: repeating-linear-gradient(
    45deg,
    var(--blue),
    var(--blue) 10px,
    var(--blue-secondary) 10px,
    var(--blue-secondary) 20px,
);
  &.valid {
    background: repeating-linear-gradient(
    45deg,
    var(--green),
    var(--green) 10px,
    var(--green-secondary) 10px,
    var(--green-secondary) 20px,
);
  }
  .content {
    font-size: 92px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
    }
}
</style>
