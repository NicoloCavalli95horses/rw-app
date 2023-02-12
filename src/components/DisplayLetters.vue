<template>
  <!-- Letter -->
  <div class="letter">
    <div v-if="audio" class="sound" @click="readLetter()">
      <Icon icon="fa-solid fa-music" />
    </div>
    <p :style="{ 'text-transform' : uppercase ? 'uppercase' : 'lowercase' }">{{ currentLetter }}</p>
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
</template>

<script setup>
//==============================
// Imports
//==============================
import Btn from "./Btn.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRightLong,
  faLeftLong,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

//==============================
// Props and emits
//==============================
const props = defineProps({
  set: Array,
  audio: Boolean,
  audio_speed: Number,
  uppercase: Boolean,
});

//==============================
// Consts
//==============================
library.add(faRightLong, faLeftLong, faMusic);
const index = ref(0);
const currentLetter = ref( props.set.at(index.value) );
let msg;
let voices;

//==============================
// Function
//==============================
function changeLetter(i) {
  index.value += i;
  if (index.value >= props.set.length || index.value <= -props.set.length) {
    index.value = 0;
  }
  currentLetter.value = props.set.at(index.value);
}

function readLetter() {
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
  msg.rate = props.audio_speed;
  msg.lang = "it";
});
</script>

<style scoped lang="scss">
.letter {
  position: relative;
  p {
    font-size: 330px;
    display: block;
    text-align: center;
    width: max-content;
    min-width: 330px;
    padding: 10px 22px;
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
</style>
