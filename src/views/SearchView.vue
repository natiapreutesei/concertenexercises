<script setup>
import {computed, onMounted, ref} from "vue";
import ConcertenService from "../../services/ConcertenService";

const concerten = ref([]);

onMounted(() => {
  ConcertenService.getAllConcerten()
      .then((response) => {
        concerten.value = response.data;
        console.log(concerten.value);
      })
      .catch((error) => {
        console.log(error);
      });
});

const input = ref("");

const filteredList = computed(() => {
  return concerten.value.filter((concert) =>
      concert.title.toLowerCase().includes(input.value.toLowerCase())
  );
});
</script>

<template>
  <div>
    <input type="text" v-model="input" placeholder="Search concerts..." />
    <div class="item concert" v-for="concert in filteredList" :key="concert.id">
      <p>{{ concert.title }}</p>
    </div>
    <div class="item error" v-if="input && !filteredList.length">
      <p>No results found!</p>
    </div>
  </div>
</template>
