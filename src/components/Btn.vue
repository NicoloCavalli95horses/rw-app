<template>
  <button :class="{ disabled: disabled }">
    <div>
      <h3>{{ text }}</h3>
      <slot name="icon" />
    </div>
  </button>
</template>

<script setup>
// ==============================
// Props
// ==============================
const props = defineProps({
  text: String,
  disabled: Boolean,
});
</script>

<style lang="scss" scoped>
button {
  text-decoration: none;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  padding: 12px 18px;
  border-radius: 8px;
  letter-spacing: 3px;
  cursor: pointer;
  transition-duration: 400ms;

  &:hover {
    transition-duration: 400ms;
    background-color: var(--blue-secondary);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }
}

.disabled {
  opacity: 0.5;
  touch-action: none;
  pointer-events: none;
  &:hover {
    filter: none;
  }
}
</style>
