<template>
  <div class="text-white message-box d-flex flex-column">
    <span>{{ message }}</span>
    <span class="message-time">{{ time }}</span>
  </div>
</template>

<script setup>
import { onMounted  } from 'vue'

defineProps({
  message: String,
  time: String
})

onMounted(() => {

})
</script>

<style scoped>
.message-box {
  gap: 10px;
  background-color: #363636;
}
.message-time {
  font-size: 12px;
}
</style>
