<template>
  <div class="mt-10">
    <form
      v-if="!confirmPassword"
      class="flex flex-col items-center"
      @submit.prevent="signUp"
    >
      <div class="flex flex-col mt-2">
        <TextInput name="사용자 이름" v-model="username" type="text" />
      </div>
      <div class="flex flex-col mt-2">
        <TextInput name="비밀번호" v-model="password" type="password" />
      </div>
      <div class="flex flex-col mt-2">
        <TextInput name="이메일" v-model="email" type="text" />
      </div>
      <button class="btn-blue">Sign Up</button>
    </form>
    <div v-if="error" class="text-red-600">{{ error.message }}</div>
    <div v-if="confirmPassword" class="w-4/12 m-auto pt-10">
      <h3 class="mb-4">Enter your code. Please check your email</h3>
      <TextInput name="코드" v-model="code" type="text" />
      <button class="btn-blue" @click="confirmSignUp">Confirm Code</button>
    </div>
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
  import TextInput from '@/components/TextInput';
  import Loading from '@/components/Loading';

  export default {
    name: 'SignUpPage',
    data: () => ({
      username: '',
      password: '',
      email: '',
      error: '',
      confirmPassword: false,
      code: '',
      isLoading: false,
    }),
    components: { TextInput, Loading },
    methods: {
      async signUp() {
        this.isLoading = true;
        if (!this.email || !this.password) {
          return;
        }
        try {
          await this.$store.dispatch('auth/signUp', {
            username: this.username,
            password: this.password,
            email: this.email,
          });
          this.confirmPassword = true;
          this.error = '';
        } catch (error) {
          this.error = error;
          console.log(this.error);
        }
        this.isLoading = false;
      },

      async confirmSignUp() {
        this.isLoading = true;
        if (!this.username || !this.email) return;

        try {
          const { username, password, code } = this;
          await this.$store.dispatch('auth/confirmSignUp', {
            username,
            code,
          });
          await this.$store.dispatch('auth/login', {
            username,
            password,
          });
          this.$router.push('/albums');
        } catch (error) {
          console.log(error);
          this.error = error;
        }
        this.isLoading = false;
      },
    },
  };
</script>

<style scoped></style>
