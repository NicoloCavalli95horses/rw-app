<template>
  <div>
    <h1>Thesaurus</h1>
    
    <div class="list">
     <h3> Tot. words: {{ words.length  }} </h3>
     <ul>
       <li v-for="word in words" :key="word">
        {{ word }} 
      </li>
    </ul>
    </div>
  </div>
</template>

<script setup>
//==============================
// Imports
//==============================
import { onMounted, ref } from "@vue/runtime-core";

//==============================
// Consts
//==============================
const data = ref( undefined );
const words = ref([]);

//==============================
// Functions
//==============================


//==============================
// Life cycle
//==============================
onMounted(() => {
  fetch('/dictionary/words.txt')
    .then( res => res.text())
    .then( text => {
      data.value = text;
      data.value.split(/\r?\n/).forEach((line) => {
        words.value.push( line );
      });
    });
  })
</script>

<style lang="scss" scoped>
  .list {
    margin: 30px;
  }
</style>
