<template>
  <div class="fill-height chatbox-content overflow-y-auto justify-end">
    <message-box
        v-for="(msg, index) in data.messages"
        :key="index"
        :message="msg.message"
        time="agora"
        class="mx-3 pa-1 rounded-lg my-2"
    />
    <div class="pa-3">
      <v-text-field
          class="text-field"
          variant="solo"
          placeholder="Mensagem"
          hide-details
          v-model="inputValue"
          @keyup.enter="sendMessage"
      >
        <template #append-inner>
          <div
              class="button-icon"
          >
            <font-awesome-icon :icon="['fas', 'paper-plane-top']"></font-awesome-icon>
          </div>
        </template>
      </v-text-field>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import MessageBox from "../components/MessageBox"
import { reactive, ref } from "vue";

const inputValue = ref('')

const data = reactive({
   messages: []
})

function sendMessage(e) {
  if (e?.target?.value?.length) {
    data.messages.push({
      message: e.target.value,
      time: 'agora'
    })

    inputValue.value = ''
  }
}
</script>

<style scoped>
.chatbox-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.button-icon {
  cursor: pointer;
}
</style>
