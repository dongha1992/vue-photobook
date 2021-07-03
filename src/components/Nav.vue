<template>
  <div class="p-10">
    <ul class="flex justify-end">
      <li class="list" v-if="!user">
        <router-link to="/login"
          ><a class="btn-text-blue">Login</a>
        </router-link>
      </li>
      <li class="list" v-if="!user">
        <router-link to="/signup"
          ><a class="btn-text-blue">Sign Up</a></router-link
        >
      </li>
      <li class="list" v-if="user">
        <div class="font-semibold text-black-500">
          Welcom {{ user.username }}
        </div>
      </li>
      <li class="list" v-if="user">
        <router-link to="/albums"
          ><a class="btn-text-blue">Albums</a></router-link
        >
      </li>
      <li class="list" v-if="user">
        <div class="btn-text-blue" @click="logout">Logout</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { NAV_TITLE } from '@/constants/wordings';

  export default {
    name: 'Nav',
    data() {
      return { NAV_TITLE };
    },
    methods: {
      async logout() {
        await this.$store.dispatch('auth/logout');
        this.$router.push('/');
      },
    },
    computed: {
      ...mapGetters({
        user: 'auth/user',
      }),
    },
  };
</script>

<style scoped>
  .list {
    margin-right: 6px;
  }
</style>
