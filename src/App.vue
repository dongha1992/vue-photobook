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
      this.authAction();
    },
    components: { Nav },
    methods: {
      ...mapActions('auth', ['authAction']),
    },
  };
</script>

<style></style>
