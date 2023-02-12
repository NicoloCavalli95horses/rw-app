<template>
  <div class="flex-center">
    <aside>
      <div class="sidebar-wrapper">
        <div class="flex-center flex-start bottom-24">
          <h2 class="l-12">Numero massimo di lettere: {{ wordLength }}</h2>
        </div>
        <InputRange
          :show="true"
          :value="wordLength"
          :min="2"
          :max="14"
          @update="(v) => (wordLength = parseInt(v))"
        />

        <div class="flex-center flex-start bottom-24 top-32">
          <h2 class="l-12">Contains letters</h2>
        </div>
        <InputText
          placeholder="Type letters to be contained"
          @update="(v) => (containsLetters = v)"
        />
      </div>
    </aside>

    <section>
      <div class="list">
        <ul>
          <li v-for="word in filteredWords" :key="word">{{ word }}</li>
        </ul>
      </div>
    </section>
  </div>
  <h3 class="top-right-corner">
    Total words found: {{ filteredWords.length }}
  </h3>
</template>

<script setup>
//==============================
// Imports
//==============================
import { computed, onMounted, reactive, ref } from "@vue/runtime-core";
import InputRange from "../components/InputRange.vue";
import InputText from "../components/InputText.vue";
import ToggleBtn from "../components/ToggleBtn.vue";

//==============================
// Computed
//==============================
const filteredWords = computed(() => {
  return words.value.filter((word) => {
    return (
      word.length == wordLength.value && word.includes(containsLetters.value)
    );
  });
});

//==============================
// Consts
//==============================
const data = ref(undefined);
const words = ref([]);
const wordLength = ref(5);
const containsLetters = ref("");
const disable = reactive({
  length: false,
  contains: false
})

//==============================
// Functions
//==============================



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
    });
});
</script>

<style lang="scss" scoped>
aside {
  box-sizing: border-box;
  width: 450px;
  height: 100vh;
  background-color: #666;
  display: flex;
  flex-direction: column;
  .sidebar-wrapper {
    margin: 22px;
  }
}

section {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow: auto;
  .list {
    width: 100%;
    margin: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    li {
      list-style: none;
      line-height: 22px;
      color: white;
    }
  }
}
</style>
