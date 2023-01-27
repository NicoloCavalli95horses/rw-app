<template>
  <div class="syllabe-box" v-for="s in syllables" :key="s">
    <template v-if="s != solution">
      <span>{{ s }}</span>
    </template>
    <template v-else>
      <DropArea
        size="250px"
        :solution="solution"
        @correctAnswer="emits('correctAnswer')"
      />
    </template>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import DropArea from "../components/DropArea.vue";
import { randomInterval } from "../utils.js";

// ==============================
// Props and emits
// ==============================
const props = defineProps({
  word: String,  // HO-ME
  alternatives: Number, // number of alternatives to generate
});

const emits = defineEmits(['syllablesCreated', 'correctAnswer']);

// ==============================
// Variables
// ==============================
const syllables = ref([]);
const solution = ref('');
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

// ==============================
// Functions
// ==============================
function getSyllables( solution ){
  let root = solution.slice(0, solution.length-1);
  let arr = [];

  for ( let i = 0; i < props.alternatives - 1; i++ ) {
    let s = createSyllabesFromRoot( root );
    if ( !arr.includes(s) && s != solution ){
      arr.push(s);
    } else {
      s = createSyllabesFromRoot( root );
      i--;
    }
  }
  arr.splice( randomInterval(0, arr.length-1), 0, solution )

  return arr;
}

function createSyllabesFromRoot( root ){
  return root + VOWELS.at( randomInterval(0, VOWELS.length -1));
}

// ==============================
// Life cycle
// ==============================
onMounted(() => {
  // Split word received and get syllables (e.g., HO-ME => ['ho', 'me'])
  props.word.split('-').forEach( syllabe => {
    syllables.value.push( syllabe );
  })
  // Set random solution as one of the syllables (e.g, solution.value = ['me'] )
  solution.value = syllables.value[ randomInterval(0, syllables.value.length - 1)];

  // Emits n alternative syllables to choose from, plus the solution (e.g, ['ma', 'me', 'mi'])
  // The parent will create the card according to these alternatives 
  emits('syllablesCreated', getSyllables(solution.value));
})

</script>

<style lang="scss" scoped>
.syllabe-box {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 92px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
}
</style>
