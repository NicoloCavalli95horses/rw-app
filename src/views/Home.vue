<template>
  <template v-if="syllables[0]">
  <div class="cards-wrapper" :class="{'notouch' : isSolved }">
    <div v-for="s in syllables[0].length" :key="s">
      <DraggableCard :size="200" :content="syllables[0].at(s - 1)" />
    </div>
  </div>
  </template>
  <div class="drop-area">
    <WordSplitter
      :word="WORD"
      :alternatives="4"
      @syllablesCreated="(s) => onSyllablesCreated(s)"
      @correctAnswer="onCorrectAnswer()"
      />
  </div>
</template>
<script setup>
//==============================
// Imports
//==============================
import { ref } from "@vue/reactivity";
import DraggableCard from "../components/DraggableCard.vue";
import WordSplitter from "../components/WordSplitter.vue";

//==============================
// Consts
//==============================
const WORD = 'ca-gno-li-no';
const syllables = ref([]);
const isSolved = ref( false );

//==============================
// Function
//==============================
function onSyllablesCreated( s ){
  syllables.value.push( s );
}

function onCorrectAnswer(){
  isSolved.value = true;
}

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
  left: 50%;
  margin: 0 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  box-sizing: border-box;
}
</style>
