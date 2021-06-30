<template>
  <div></div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data: () => ({
      userName: '',
      password: '',
      email: '',
      error: '',
    }),

    methods: {
      ...mapActions(['login']),

      async userLogin() {
        try {
          await this.login({
            userName: this.userName,
            password: this.password,
          });
        } catch (error) {
          this.error;
        }
      },
    },
  };
</script>

<style scoped></style>
