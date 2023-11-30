<script setup>
  import {ref, onMounted} from "vue";
  import ConcertenService from "../../services/ConcertenService";

  const props = defineProps({
    id: {
      required: true
    }
  })
  const concert = ref(null);
/*  const id= ref(1);*/
  onMounted(() => {
    ConcertenService.getConcert(props.id)
        .then((response) => {
          concert.value = response.data;
        })
        .catch((error) => {
          console.log(error)
        });
  });
</script>

<template>
  <div v-if="concert" class="position-absolute top-50 start-50 translate-middle alert alert-warning">
    <h1>{{concert.title}}</h1>
    <p>{{concert.time}} - {{concert.date}} - {{concert.location}}</p>
    <p>{{concert.description}}</p>
  </div>
</template>