<template>
  <div class="p-10">
    <ul class="flex justify-end"></ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Nav',
    methods: {
      async logout() {},
    },
    computed: {
      ...mapGetters({}),
    },
  };
</script>

<style scoped></style>
