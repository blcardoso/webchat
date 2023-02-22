<template>
  <v-app>
    <v-navigation-drawer width="auto" permanent>
      <SideMenu />
    </v-navigation-drawer>
    <v-app-bar
      color="#190C2D"
      class="d-flex justify-space-between"
    >
      <v-card
        color="#130B1F"
        class="pa-2 text-white d-flex align-center justify-space-between"
        min-width="230px"
      >
        <div class="user-avatar rounded-circle d-flex justify-center align-center">
          <font-awesome-icon :icon="['fas', 'user']" />
        </div>
        <span class="font-weight-regular">20Matar70Correr</span>
      </v-card>
    </v-app-bar>
    <v-main class="chat-box">
      <ChatBox />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ChatBox from "~/components/ChatBox";
import SideMenu from "~/components/SideMenu.vue";

onMounted(() => {
  fetch('http://54.175.169.227:5000/usuarios/geral', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then((res) => {
    console.log(res)
  })

})
</script>

<style scoped>
.user-avatar {
  border: 2px solid white;
  background-color: #AB0067;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 25px;
}
.chat-box {
  background-color: #0C001B;
 }
</style>
