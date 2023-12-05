<script setup>
defineProps({
    concert: {
      required: true
    }
  })
</script>

<template>
    <p>{{concert.time}} - {{concert.date}} - {{concert.location}}</p>
    <p>{{concert.description}}</p>
</template>