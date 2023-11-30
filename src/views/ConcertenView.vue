<script setup>
import ConcertCard from "@/components/ConcertCard.vue";
import {onMounted, ref} from "vue";
import ConcertenService from "../../services/ConcertenService";
//array of objects
const concerten = ref(null);
//life cycle hooks
onMounted(() => {
  ConcertenService.getConcerten()
      .then((response) => {
    concerten.value = response.data;
  }).catch((error) => {
    console.log(error)
  })
})
</script>

<template>
<div class="home">
  <div id="wrapper" class="d-flex justify-content-evenly my-2">
    <ConcertCard v-for="concert in concerten" :key="concert.id" :concert="concert"/>
  </div>
</div>
</template>
