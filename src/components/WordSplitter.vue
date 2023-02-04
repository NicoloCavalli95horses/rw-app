<template>
  <div class="syllabe-box">
    <div v-for="s in syllables" :key="s">
      <template v-if="s != solution">
        <p>{{ s }}</p>
      </template>
      <template v-else>
        <DropArea
          class="drop-area"
          :solution="solution"
          @correctAnswer="emits('correctAnswer')"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import DropArea from "../components/DropArea.vue";
import { randomInterval } from "../utils.js";

// ==============================
// Props and emits
// ==============================
const props = defineProps({
  word: Array,  // ['ho', 'me']
  alternatives: Number, // number of alternatives to generate
});

const emits = defineEmits([
  'syllablesCreated',
  'correctAnswer'
]);

// ==============================
// Variables
// ==============================
const syllables = ref( props.word );
const solution = ref('');
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

// ==============================
// Functions
// ==============================
function getSyllables( solution ){
  // Remove last letter of solution ('ho' => 'h')
  let root = solution.slice(0, solution.length-1);
  let arr = [];

  // Generate n alternatives with no repetitions
  for ( let i = 0; i < props.alternatives - 1; i++ ) {
    let s = createSyllabesFromPrefix( root );
    if ( !arr.includes(s) && s != solution ){
      arr.push(s);
    } else {
      s = createSyllabesFromPrefix( root );
      i--;
    }
  }
  // Insert the solution at random index
  arr.splice( randomInterval(0, arr.length-1), 0, solution )

  return arr;
}

function createSyllabesFromPrefix( root ){
  return root + VOWELS.at( randomInterval(0, VOWELS.length -1));
}

// ==============================
// Life cycle
// ==============================
onMounted(() => {
  // Set random solution as one of the syllables (e.g, solution.value = ['me'] )
  solution.value = syllables.value.at( randomInterval(0, syllables.value.length - 1) );

  // Emits n alternative syllables to choose from, plus the solution (e.g, ['ma', 'me', 'mi'])
  // The parent will create the card according to these alternatives 
  emits('syllablesCreated', getSyllables(solution.value));
})

// ==============================
// Watch
// ==============================
watch(() => props.word, (w) => {
  syllables.value = w;
  solution.value = syllables.value.at( randomInterval(0, syllables.value.length - 1) );
  emits('syllablesCreated', getSyllables(solution.value));
});

</script>

<style lang="scss" scoped>
.syllabe-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0px, 3vw, 66px);
  p {
    font-size: clamp(2rem, 10vw, 6rem);
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
  .drop-area {
    width: clamp(100px, 10vw, 160px);
    height: clamp(100px, 10vw, 160px);
  }
}
</style>
