<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
  import Nav from '@/components/Nav';
  import { mapActions } from 'vuex';
  export default {
    name: 'App',
    mounted() {
      this.authActions();
    },
    components: { Nav },
    methods: {
      ...mapActions('auth', ['authActions']),
    },
  };
</script>

<style></style>
