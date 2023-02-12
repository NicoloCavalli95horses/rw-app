<template>
  <div class="main">
    
    <!-- Letter -->
    <div class="letter">
      <div class="sound" @click="readLetter()">
        <Icon icon="fa-solid fa-music" />
      </div>
      <p>{{ currentLetter }}</p>
    </div>

    <!-- Left-right arrows -->
    <div class="flex-center top-32">
      <Btn @click="changeLetter(-1)">
        <template #icon><Icon icon="fa-solid fa-left-long" /></template>
      </Btn>
      <Btn @click="changeLetter(1)" class="l-12">
        <template #icon><Icon icon="fa-solid fa-right-long" /></template>
      </Btn>
    </div>

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
import { RouterLink } from 'vue-router'
import Btn from "../../components/Btn.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRightLong, faLeftLong, faMusic } from '@fortawesome/free-solid-svg-icons'
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

//==============================
// Consts
//==============================
library.add(faRightLong, faLeftLong, faMusic);
const VOWELS = ['A', 'E', 'I', 'O', 'U'];
const index = ref( 0 );
const currentLetter = ref( VOWELS.at( index.value ) );
let msg;
let voices;

//==============================
// Function
//==============================
function changeLetter( i ){
  index.value += i;
  if ( index.value >= VOWELS.length || index.value <= -VOWELS.length ){
    index.value = 0;
  }
  currentLetter.value = VOWELS.at( index.value );
}

function readLetter(){
  msg.text = currentLetter.value;
  window.speechSynthesis.speak(msg);
}
//==============================
// Life cycle
//==============================
onMounted(() => {
  msg = new SpeechSynthesisUtterance();
  voices = window.speechSynthesis.getVoices();
  msg.voice = voices[1];
  msg.volume = 2;
  msg.lang = 'it';
  msg.rate = 0.1;
})
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100vh;
  background-image: url('/img/levels.jpg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .letter {
    position: relative;
    p {
      font-size: 330px;
      display: block;
      text-align: center;
      width: 300px;
      background-color: white;
      border-radius: var(--radius-xl);
      color: var(--grey);
    }
    .sound {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        padding: 22px;
        color: var(--blue);
      }
    }
  }
}
</style>