<template>
  <div class="fill-height d-flex flex-column overflow-y-auto">
    <message-box message="teste" time="12:30 PM" class="mx-3 pa-1 rounded-lg"/>
    <v-responsive class="message-input px-3">
      <v-text-field variant="solo" placeholder="Mensagem">
        <template #append-inner>
          <div
              class="button-icon"
          >
            <font-awesome-icon :icon="['fas', 'paper-plane-top']"></font-awesome-icon>
          </div>
        </template>
      </v-text-field>
    </v-responsive>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import MessageBox from "../components/MessageBox"
</script>

<style scoped>
.message-input {
  width: calc(100% - 420px);
  position: absolute;
  bottom: 0;
}
.button-icon {
  cursor: pointer;
}
</style>
