<template>
  <div class="main">
    <!-- Title -->
    <h1>Scegli la tua avventura</h1>

    <!-- Levels -->
    <div class="levels-grid">
      <RouterLink to="/level-0">
        <Btn text="vocali" :card="true"></Btn>
      </RouterLink>  
      <!-- <RouterLink to="/level-1"> -->
        <Btn text="alfabeto" :card="true" :disabled="true"></Btn>
      <!-- </RouterLink>   -->
      <!-- <RouterLink to="/level-2"> -->
        <Btn text="sillabe" :card="true" :disabled="true"></Btn>
      <!-- </RouterLink>   -->
      <!-- <RouterLink to="/level-3"> -->
        <Btn text="sillabe invertite" :card="true" :disabled="true"></Btn>
      <!-- </RouterLink>   -->
      <!-- <RouterLink to="/level-4"> -->
        <Btn text="parole" :card="true" :disabled="true"></Btn>
      <!-- </RouterLink>  -->
      <!-- <RouterLink to="/level-5"> -->
        <Btn text="parole da completare" :card="true" :disabled="true"></Btn>
      <!-- </RouterLink>       -->
    </div>

    <!-- Back buttons -->
    <div class="abs-center-bottom">
      <RouterLink to="/">
        <Btn class="l-12" text="indietro"></Btn>
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
.main {
  width: 100%;
  height: 100vh;
  background-image: url('/img/levels.jpg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 22px;
    width: max-content;
  }
  
  .levels-grid {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: grid;
    gap: 22px;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
}
</style>
