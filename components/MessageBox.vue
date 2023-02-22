<template>
  <div class="text-white message-box d-flex flex-column justify-space-between px-3">
    <span class="ma-0">{{ message }}</span>
    <span class="message-time ma-0">{{ time }}</span>
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
  min-width: 150px;
}
.message-time {
  font-size: 12px;
}
</style>
