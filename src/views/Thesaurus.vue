<template>
  <div class="flex-center">
    <aside>
      <div class="wrapper">
        <h2 class="bottom-24">Configuration</h2>
        <InputRange
          :show="true"
          :value="letters"
          :min="2"
          :max="14"
          @update="(v) => (letters = parseInt(v))"
        />
        <p class="top-12">Number of letters: {{ letters }}</p>

        <h3 class="top-24"> Tot. words: {{ filteredWords.length }} </h3>
      </div>
    </aside>

    <section>
      <div class="list">
        <ul>
          <li v-for="word in filteredWords" :key="word"> {{ word }} </li>
        </ul>
      </div> 
    </section>

  </div>
</template>

<script setup>
//==============================
// Imports
//==============================
import { computed, onMounted, ref } from "@vue/runtime-core";
import InputRange from "../components/InputRange.vue";

//==============================
// Computed
//==============================
const filteredWords = computed(() =>
  words.value.filter((word) => word.length == letters.value)
);

//==============================
// Consts
//==============================
const data = ref(undefined);
const words = ref([]);
const letters = ref(5);

//==============================
// Functions
//==============================
function onUpdate(e) {
  console.log(e);
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
    });
});
</script>

<style lang="scss" scoped>
aside {
  box-sizing: border-box;
  width: 30%;
  height: 100vh;
  background-color: #666;
  display: flex;
  flex-direction: column;
  .wrapper {
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
    }
  }
}
</style>
