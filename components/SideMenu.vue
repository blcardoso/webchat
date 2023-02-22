<template>
  <div
    class="container float-left"
  >
    <div>
      <v-img
        :src="logoImg"
        class="mb-9" 
      />
    </div>
    <v-card>
      <v-text-field
        v-model="searchRef"
        density="compact"
        variant="solo"
        label="Pesquisar nome"
        bg-color="#a9a9a9"
        theme="lighten"
        single-line
        hide-details
      >
        <!-- <template #append>
          <i aria-hidden="true">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </i>
        </template> -->
      </v-text-field>
    </v-card>
  
    <v-list bg-color="transparent">
      <div class="section-title text-h6 pa-0 ma-0">
        Grupos
      </div>

      <v-list-item
        v-for="item in groupsMessages.filter(item => item.title.includes(searchRef))"
        :key="item.title"
        class="card-item rounded-lg"
        :prepend-avatar="''"
      >
        <template #prepend>
          <v-avatar
            class="avatar-icon"
            color="grey-lighten-1"
          >
            <v-icon color="white">
              <font-awesome-icon icon="fa-solid fa-user" />
            </v-icon>
          </v-avatar>
        </template>

        <v-list-item-title class="mb-1 text-h6">
          {{ item.title }}
        </v-list-item-title>
        <v-list-item-subtitle class="text-subtitle-2">
          {{ item.subtitle }}
        </v-list-item-subtitle>

        <template #append>
          <div class="d-flex align-self-center">
            <font-awesome-icon
              icon="fa-solid fa-message"
              class="message-icon"
            />
          </div>
        </template>
      </v-list-item>
    </v-list>

    <v-list bg-color="transparent">
      <div class="section-title text-h6 pa-0 ma-0">
        Usuários
      </div>

      <v-list-item
        v-for="item in usersMessages.filter(item =>  item.title.includes(searchRef))"
        :key="item.title"
        class="card-item rounded-lg"
      >
        <template #prepend>
          <v-avatar
            class="avatar-icon"
            color="grey-lighten-1"
          >
            <v-icon color="white">
              <font-awesome-icon icon="fa-solid fa-user" />
            </v-icon>
          </v-avatar>
        </template>

        <v-list-item-title class="mb-1 text-h6">
          {{ item.title }}
        </v-list-item-title>
        <v-list-item-subtitle class="text-subtitle-2">
          {{ item.subtitle }}
        </v-list-item-subtitle>

        <template #append>
          <div class="d-flex align-self-center">
            <font-awesome-icon
              icon="fa-solid fa-message"
              class="message-icon"
            />
          </div>
        </template>       
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { ref, computed, reactive, onMounted } from 'vue'

export default {
  name: 'SideMenu',
  setup() {
    const groupsMessages = reactive([
      {
        title: 'Rotaexata',
        subtitle: 'Daily agora, bora descer'
      },
      {
        title: 'Dev talks',
        subtitle: 'Hoje não vai dar, vamos remarcar.'
      },
    ]);
    const usersMessages = reactive([
      {
        title: 'Leo Bap',
        subtitle: 'Fala meu! Bora comer..dasdsadadasdasd'
      },
      {
        title: 'Luara B.',
        subtitle: 'Bora pro jiu!!'
      },
      {
        title: 'Matheus S.',
        subtitle: 'Reprovei teu PR MOB-982!'
      },
      {
        title: 'Moço',
        subtitle: 'Nem me deu bom dia hoje...'
      },
    ]);

    const searchRef = ref('');

    const logoImg = new URL('~/assets/logo.png', import.meta.url).href

    return {
      usersMessages,
      groupsMessages,
      logoImg,
      searchRef,
    }
  },
};
</script>

<style scoped>
::v-deep .v-field-label {
  color: #fff;
}

.container {
  background-color: #130b1f;
  color: #fff;
  width: 350px;
  padding: 0 24px 24px 24px;
  min-height: 100%;
}

.section-title {
  font-weight: 300;
  color: #A9A9A9;
}

.card-item {
  background-color: #190c2d;
  color: #fff;
  margin-bottom: 12px;
  padding: 11px 0 11px;
  transition: 0.5s background-color;
}

.card-item:hover {
  background-color: #2a0e56;
  cursor: pointer;
}

.message-icon {
  width: 24px;
  height: auto;
}

.avatar-icon {
  border: 2px solid #fff;
}
</style>

<style>
/* width */
::-webkit-scrollbar {
  background: #2A0E56 !important; 
  width: 10px;
  scroll-padding: 20px !important;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #190C2D !important;
  border-radius: 12px !important;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #2A0E56 !important; 
  border-radius: 12px !important;
  width: 2px !important;
}
</style>
