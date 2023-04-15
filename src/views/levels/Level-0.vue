<template>
  <div class="main">
    <DisplayLetters
      :set="VOWELS"
      :uppercase="true"
    />

    <!-- Back buttons -->
    <div class="top-left-corner">
      <RouterLink to="/levels">
        <Btn class="l-12" text="indietro"></Btn>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
//==============================
// Imports
//==============================
import { RouterLink } from "vue-router";
import Btn from "../../components/Btn.vue";
import DisplayLetters from "../../components/DisplayLetters.vue";

//==============================
// Consts
//==============================
const VOWELS = ["a", "e", "i", "o", "u"];
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100vh;
  background-image: url("/img/level.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
