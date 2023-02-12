<template>
  <div class="wrapper">
    <h1>Il regno delle parole</h1>

    <div class="btns-wrapper">
      <Btn text="login" :disabled="true"></Btn>
      <RouterLink to="/levels">
        <Btn class="l-12" :def="true" text="gioca"></Btn>
      </RouterLink>
      </div>
  </div>
</template>
<script setup>
//==============================
// Imports
//==============================
import { RouterLink } from 'vue-router'
import Btn from "../components/Btn.vue";

//==============================
// Consts
//==============================

//==============================
// Function
//==============================

//==============================
// Life cycle
//==============================

</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background-image: url('/img/bg.jpg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btns-wrapper {
    margin-top: 22px;
    display: flex;
  }
}

</style>
