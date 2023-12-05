<script setup>
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>

<template>
  <div class="position-absolute top-50 start-50 translate-middle alert alert-danger text-white text-center">
    <h1>404</h1>
    <hr>
    <h2>{{resource}} not found</h2>
    <hr>
    <p>Sorry, the page you are looking for does not exist.</p>
    <p class="btn btn-danger">Go back to <RouterLink class="text-decoration-none text-white" :to="{name:'concerten'}">home</RouterLink></p>
  </div>
</template>