<template>
  <div class="mt-10 flex flex-col items-center">
    <form class="flex flex-col items-center" @submit.prevent="login">
      <div class="flex flex-col">
        <TextInput name="사용자 이름" v-model="username" type="text" />
      </div>
      <div class="flex flex-col mt-10">
        <TextInput name="비밀번호" v-model="password" type="password" />
      </div>
      <button class="btn-blue">Sign In</button>
    </form>
    <div v-if="error" class="text-red-600 mt-10">{{ error.message }}</div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import TextInput from '@/components/TextInput';

  export default {
    name: 'Login',
    data: () => ({
      username: '',
      password: '',
      email: '',
      error: '',
    }),

    components: { TextInput },

    methods: {
      ...mapActions({
        userLogin: 'auth/login',
      }),

      async login() {
        try {
          await this.userLogin({
            username: this.username,
            password: this.password,
          });
          this.$router.push('/albums');
        } catch (error) {
          this.error = error;
        }
      },
    },
  };
</script>

<style scoped></style>
