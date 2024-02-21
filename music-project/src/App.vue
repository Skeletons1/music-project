<template>
  <app-header />

  <!-- <router-view> can no longer be used directly inside <transition> or <keep-alive> -->
  <transition name="fade" mode="out-in">
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </transition>

  <app-player />

  <auth />
</template>

<script>
import AppHeader from '@/components/Header.vue';
import Auth from '@/components/Auth.vue';
import AppPlayer from '@/components/Player.vue';
import { mapWritableState } from 'pinia';
import { useUserStore } from '@/stores/user';
import { auth } from './includes/firebase';

export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  }
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
