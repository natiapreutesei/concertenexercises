<script setup>
import {ref, onMounted} from "vue";
import ConcertenService from "../../services/ConcertenService";


const concerten = ref(null);

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
    <div v-if="concerten" class="position-absolute top-50 start-50 translate-middle alert alert-danger">
      <h2>Organizers:</h2>
      <ul class="p-0 list-unstyled">
        <div v-for="concert in concerten" :key="concert.id" class="btn btn-light d-flex mt-2">
          <RouterLink class="text-decoration-none text-dark" :to="{name:'concert-details', params:{id:concert.id}}">
            <li>{{ concert.organizer }}</li>
          </RouterLink>
        </div>
      </ul>
    </div>
</template>