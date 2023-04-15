<template>
  <div class="main">
    <!-- Title -->
    <h1>Scegli l'esercizio</h1>

    <!-- Levels -->
    <div class="levels-grid">
      <RouterLink to="/level-0">
        <Btn text="vocali" width="200px" :card="true"></Btn>
      </RouterLink>  
      <RouterLink to="/level-1">
        <Btn text="alfabeto" width="200px" :card="true"></Btn>
      </RouterLink>  
      <RouterLink to="/level-2">
        <Btn text="sillabe" width="200px" :card="true"></Btn>
      </RouterLink>  
      <RouterLink to="/level-3">
        <Btn text="sillabe invertite" width="200px" :card="true"></Btn>
      </RouterLink>  
      <!-- <RouterLink to="/level-4"> -->
        <Btn text="parole" width="200px" :card="true" :disabled="true"></Btn>
      <!-- </RouterLink>  -->
      <!-- <RouterLink to="/level-5"> -->
        <Btn text="parole da completare" width="200px" :card="true" :disabled="true"></Btn>
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
    margin: 22px auto;
  }
  
  .levels-grid {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    width: 80%;
    overflow-y: auto;
    max-height: 60%;
    margin-top: 22px;
    gap: 22px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    place-items: center;
  }
}
</style>
