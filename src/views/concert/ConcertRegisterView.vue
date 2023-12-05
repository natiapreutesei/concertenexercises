<script setup>
import {inject, onBeforeMount, ref} from "vue";
const myAlert = inject('myAlertVar');
const isRegistered = ref(false);
const props = defineProps({
  concert: {
    required: true
  }
})
const register = () => {
 if (isRegistered.value){
   myAlert.alertMessage = 'You are already registered for ' + props.concert.title + "!";
 } else {
   myAlert.alertMessage = 'You are registered!';
   isRegistered.value = true;
 }
}
onBeforeMount(() => {
  myAlert.alertMessage;
});

</script>

<template>
  <div v-if="myAlert.alertMessage" class="alert alert-success">{{myAlert.alertMessage}}</div>
  <p>{{concert.title}} - Register here!</p>
  <button class="btn btn-success" @click="register">Register</button>
</template>