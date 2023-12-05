<script setup>
import {ref, onMounted} from "vue";
import ConcertenService from "../../../services/ConcertenService";
import {RouterLink, useRoute, useRouter} from "vue-router";

/*const props = defineProps({
  id: {
    required: true
  }
})*/

const concert = ref(null);
const route = useRoute();
const router = useRouter();

/*  const id= ref(1);*/

onMounted(() => {
  ConcertenService.getConcert(route.params.id)
      .then((response) => {
        concert.value = response.data;
      })
      .catch((error) => {
        router.push({
          name: '404Resource',
          params: {resource: 'concert'}
        });
        console.log(error)
      });
});
</script>

<template>
  <div v-if="concert" class="position-absolute top-50 start-50 translate-middle alert alert-warning">
    <h1>{{concert.title}}</h1>
    <hr>
    <div id="nav" class="d-flex justify-content-evenly">
      <RouterLink class="text-decoration-none text-success" :to="{name:'concert-details', params:{id:route.params.id}}" >Details</RouterLink>
      <RouterLink class="text-decoration-none text-success" :to="{name:'concert-register', params:{id:route.params.id}}">Register</RouterLink>
      <RouterLink class="text-decoration-none text-success" :to="{name:'concert-edit', params:{id:route.params.id}}">Edit</RouterLink>
    </div>
    <hr>
    <RouterView :concert="concert"/>
  </div>
</template>