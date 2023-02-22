<template>
  <div class="main-container">
    <section class="login-section">
      <v-img
        aspect-ratio="1"
        width="180"
        height="70"
        :src="logoImg"
      />

      <small class="mb-12">Conectando as pessoas ao seu redor</small>

      <v-text-field
        v-model="nickname"
        placeholder="Digite seu nickname aqui"
        variant="solo"
        class="nickname-input"
        @keyup.enter="createConnection"
      />

      <v-btn
        block
        class="text-white rounded-lg font-weight-bold"
        color="#6300E0"
        height="56"
        :loading="loading"
        @click="createConnection"
      >
        ENTRAR
      </v-btn>
    </section>

    <v-snackbar
      v-model="error"
      :timeout="2000"
      color="red-darken-1"
    >
      {{ errorMessage }}
    </v-snackbar>
  </div>
</template>

<script setup>
  import { io } from 'socket.io-client';
  import { useUserStore } from '@/stores/user';

  const error = useState('error', '');
  const loading = useState('loading', () => false);
  const errorMessage = useState('errorMessage', '');
  const nickname = useState('nickname', '');
  const logoImg = new URL('~/assets/logo.png', import.meta.url).href;

  const userStore = useUserStore();
  console.log(userStore.getUser)

  const createConnection = async () => {
    loading.value = true
    const router = useRouter();

    const connectionOptions = {
      "force new connection": true,
      "reconnectionAttempts": "Infinity",
      "timeout": 10000,
      "transports": ["websocket"]
    };

    const socket = io.connect('http://54.175.169.227:5000', connectionOptions);

    // Adiciona usuário no grupo
    socket.emit('join', { name: nickname.value, room: 'geral' }, ({ statusCode, message }) => {
      loading.value = false;

      if (statusCode === 400) {
        error.value = true;
        errorMessage.value = message;
        return;
      }

      userStore.setUser({ nickname: nickname.value });
      router.push('/home');
    });
  }
</script>

<style scoped>
.main-container  {
  display: flex;
  width: 100vw;
  height: 100vh;
  color: white;
  background-image: url("../assets/background.png");
  background-color: black;
}

.login-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  min-width: 300px;
  background: linear-gradient(124.3deg, rgba(223, 223, 223, 0.4) -1.34%, rgba(223, 223, 223, 0.1) 98.93%);
  backdrop-filter: blur(7.5px);
  border: 1px solid #B5B5B5;
  padding: 18px 24px;
  border-radius: 25px;
  margin: auto;
}

.nickname-input {
  width: 100%;
}
</style>
