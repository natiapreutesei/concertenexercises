<script setup>
import ConcertCard from "@/components/ConcertCard.vue";
import {onMounted, ref, watchEffect} from "vue";
import ConcertenService from "../../services/ConcertenService";
//array of objects
const concerten = ref(null);
const isLastPage = ref(false)
const concertenPerPagina = ref(3); //initialized at 3
const totaalAantalPaginas = ref(0);

const totaalConcerten = ref(0);

const props = defineProps({
  page: {
    type: Number
  }
})
//life cycle hooks
const updateConcerten = () => {
  ConcertenService.getConcerten(concertenPerPagina.value, props.page)
      .then((response) => {
        concerten.value = response.data;
        isLastPage.value = response.data.length < concertenPerPagina.value;
        totaalAantalPaginas.value = Math.ceil(totaalConcerten.value / concertenPerPagina.value);
      })
      .catch((error) => {
        console.log(error);
      });
};

onMounted(() => {
  ConcertenService.getAllConcerten()
      .then((response) => {
        totaalAantalPaginas.value = Math.ceil(response.data.length / concertenPerPagina.value)
        totaalConcerten.value = response.data.length
      }).catch((error) => {
    console.log(error)
  });
  watchEffect(() => {
    updateConcerten();
  })
})

const changeNConcertenPerPagina  = (aantal) => {
  concertenPerPagina.value = aantal;
  updateConcerten();
}
</script>

<template>
<div class="home">
  <div class="dropdown d-flex justify-content-center">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      #items to see
    </button>
    <ul class="dropdown-menu">
      <li v-for="nConcert in totaalConcerten" :key="nConcert" >
        <a class="text-decoration-none btn w-100" href="#" @click.prevent="changeNConcertenPerPagina(nConcert)"> {{nConcert}}</a>
      </li>
    </ul>
  </div>

  <div id="wrapper" class="d-flex justify-content-evenly my-2">
    <ConcertCard v-for="concert in concerten" :key="concert.id" :concert="concert"/>
  </div>
  <ul class="pagination d-flex justify-content-center">
<!--previous -->
    <li class="page-item" v-if="page !== 1">
      <RouterLink :to="{name:'concerten', query:{page: page-1}}" class="page-link">Previous</RouterLink>
    </li>
<!--page number-->
    <li class="page-item" v-for="pageNumber in totaalAantalPaginas" :key="pageNumber" :class="{ 'active': pageNumber === page }">
      <RouterLink class="page-link" :to="{name:'concerten', query:{page: pageNumber}}" >{{ pageNumber}} </RouterLink>
    </li>
    <!--next -->
    <li class="page-item" v-if="!isLastPage">
      <RouterLink :to="{name:'concerten', query:{page: page+1}}" class="page-link">Next</RouterLink>
    </li>
  </ul>
</div>
</template>
