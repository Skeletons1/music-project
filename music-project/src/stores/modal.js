import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => {
    return { isOpen: false };
  },
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? 'hidden' : '';
    }
  },
  actions: {
    toggleAuthModal() {
      this.isOpen = !this.isOpen;
    }
  }
});
