<template>
  <div class="wrapper">
    <!-- Progress bar -->
    <div class="progress-bar">
      <ProgressBar :value="points" :total="2" @completed="show.modal = true" />
    </div>

    <!-- Drop area -->
    <template v-if="splittedWord.at(0)">
      <div class="drop-area">
        <WordSplitter
          :word="splittedWord"
          :alternatives="ALTERNATIVES"
          @syllablesCreated="(s) => (syllables = s)"
          @correctAnswer="onCorrectAnswer()"
        />
      </div>
    </template>

    <!-- Cards to choose from -->
    <template v-if="syllables.at(0)">
      <div class="cards-wrapper">
        <div v-for="s in syllables.length" :key="s">
          <DraggableCard :content="syllables.at(s - 1)" />
        </div>
      </div>
    </template>

    <!-- Tip -->
    <span class="abs-center-bottom disabled"
      >Press <code>space</code> to skip</span
    >

    <!-- Modal -->
    <Transition name="fade">
      <Modal v-if="show.modal" title="Nice job!">
        <template #default>
          <p>You completed all the exercises! Well done!</p>
        </template>
        <template #footer>
          <Btn text="continue" @click="onBtnClick()" />
        </template>
      </Modal>
    </Transition>
  </div>
</template>
<script setup>
//==============================
// Imports
//==============================
import { reactive, ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { randomInterval, splitSyllables } from "../utils.js";
import DraggableCard from "../components/DraggableCard.vue";
import WordSplitter from "../components/WordSplitter.vue";
import ProgressBar from "../components/ProgressBar.vue";
import Modal from "../components/Modal.vue";
import Btn from "../components/Btn.vue";

//==============================
// Consts
//==============================
const splittedWord = ref([]);
const word = ref([]);
const syllables = ref([]);
const isSolved = ref(false);
const data = ref(undefined);
const words = ref([]);
const points = ref(0);
const ALTERNATIVES = 4;
const show = reactive({
  modal: false,
});

//==============================
// Function
//==============================
function onkeydown(e) {
  if (e.code == "Space") {
    getNewWord();
  }
}

function getNewWord() {
  word.value = words.value.at(randomInterval(0, words.value.length - 1));
  splittedWord.value = splitSyllables(word.value);
}

function onCorrectAnswer() {
  getNewWord();
  points.value++;
}

function onBtnClick() {
  points.value = 0;
  show.modal = false;
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
        words.value.push(line);
      });
      getNewWord();
    });

  document.addEventListener("keydown", onkeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", onkeydown);
});
</script>
<style lang="scss" scoped>
.cards-wrapper {
  box-sizing: border-box;
  width: calc(100% - 44px); //consider margins
  position: absolute;
  bottom: 0px;
  margin: 0 22px;
  transform: translate(0%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 200px;
  gap: 22px;
  justify-content: center;
}

.drop-area {
  position: absolute;
  top: 200px;
  margin: 0 22px;
  width: calc(100% - 44px);
}

.progress-bar {
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 44px);
}

// Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.wrapper {
  width: 100%;
  height: 100vh;
  background-image: url("../../public/img/bg.jpg");
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>
