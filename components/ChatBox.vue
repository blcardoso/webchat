<template>
<v-responsive max-width="100%" class="message-input">
  <v-text-field variant="solo"></v-text-field>
</v-responsive>
</template>

<script>
export default {
  name: "ChatBox"
}
</script>

<style scoped>
.message-input {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
