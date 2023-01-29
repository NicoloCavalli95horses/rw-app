<template>
  <!-- Progress bar -->
  <div class="progress-bar">
    <ProgressBar 
      :value="points"
      :total="10"
      @completed="onComplete()"
    />
  </div>
  
  
  <!-- Drop area -->
  <template v-if="splittedWord.at(0)">
    <div class="drop-area">
      <WordSplitter
        :word="splittedWord"
        :alternatives="4"
        @syllablesCreated="(s) => syllables = s"
        @correctAnswer="onCorrectAnswer()"
      />
    </div>
  </template>

  <!-- Cards to choose from -->
  <template v-if="syllables.at(0)">
  <div class="cards-wrapper">
    <div v-for="s in syllables.length" :key="s">
      <DraggableCard
       :size="200"
       :content="syllables.at(s - 1)"
      />
    </div>
  </div>
  </template>

  <!-- Tip -->
  <span class="abs-center-bottom disabled">Press <code>space</code> to skip</span>
</template>
<script setup>
//==============================
// Imports
//==============================
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { randomInterval, splitSyllables } from "../utils.js";
import DraggableCard from "../components/DraggableCard.vue";
import WordSplitter from "../components/WordSplitter.vue";
import ProgressBar from "../components/ProgressBar.vue";

//==============================
// Consts
//==============================
const splittedWord = ref([]);
const word = ref([]);
const syllables = ref([]);
const isSolved = ref( false );
const data = ref(undefined);
const words = ref([]);
const points = ref(0);

//==============================
// Function
//==============================
function onkeydown( e ){
  if ( e.code == 'Space') {
    getNewWord();
  }
}

function getNewWord() {
  word.value = words.value.at( randomInterval(0, words.value.length-1) );
  splittedWord.value = splitSyllables( word.value );
}

function onCorrectAnswer(){
  getNewWord();
  points.value++;
}

function onComplete(){
  console.log('exercize complete');
}

//==============================
// Life cycle
//==============================
onMounted(() => {
  fetch("/dictionary/words.txt")
    .then((res) => res.text())
    .then((text) => {
      data.value = text;
      data.value.split(/\r?\n/).forEach((line) => {
        words.value.push( line );
      });
      getNewWord();
    });

    document.addEventListener('keydown', onkeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onkeydown);
})

</script>
<style lang="scss" scoped>
.cards-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.drop-area {
  position: absolute;
  transform: translate(-50%, 50%);
  top: 44px;
  left: 50%;
  margin: 0 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  box-sizing: border-box;
}

.progress-bar {
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 44px);
}
</style>
