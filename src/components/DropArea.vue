<template>
  <div
    class="area"
    :class="{ 'error' : onError }"
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
const showAnimation = ref( true );

//==============================
// Computed
//==============================
const isValid = computed(() => content.value == props.solution );
const onError = computed(() => {
  if ( content.value && !isValid.value && showAnimation.value ) {
    setTimeout(() => showAnimation.value = false, 1000)
    return true
  } else {
    showAnimation.value = true;
    return false
  }
})
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
    emits('correctAnswer', content.value);
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
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: repeating-linear-gradient(
    45deg,
    var(--blue),
    var(--blue) 10px,
    var(--blue-secondary) 10px,
    var(--blue-secondary) 20px,
);
  &.error {
    transition-duration: 500ms;
    background: repeating-linear-gradient(
    45deg,
    var(--red),
    var(--red) 10px,
    var(--red-secondary) 10px,
    var(--red-secondary) 20px,
    );
    animation: shake 400ms linear;
  }
  .content {
    font-size: 92px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
