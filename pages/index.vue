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
        placeholder="Digite seu nickname aqui"
        variant="solo"
        class="username-input rounded-pill"
      />

      <v-btn block class="login-btn rounded-lg">
        ENTRAR
      </v-btn>
    </section>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      logoImg: new URL('~/assets/logo.png', import.meta.url).href
    }
  }
}
</script>

<style scoped>
.main-container  {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/background.png");
  background-color: black;
}
.main-container small {
  color: white;
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

.username-input {
  width: 100%;
}

.login-btn {
  height: 56px;
  background-color: #6300E0;
  color: white;
  font-weight: 700;
}

</style>
