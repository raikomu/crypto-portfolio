<template>
  <header class="bg-blue mb-8 py-4">
    <div class="container m-auto flex flex-wrap items-center justify-end">
      <div class="flex-1 flex items-center">

        <a href="/" class="uppercase font-bold no-underline">Crypto Portfolio</a>
      </div>
      <div>
        <router-link to="/" class="px-2 no-underline" v-if="!isAuthenticated">Sign in</router-link>
        <router-link to="/signup" class="px-2 no-underline" v-if="!isAuthenticated">Sign Up</router-link>
        <router-link to="/currencies" class="px-2 no-underline" v-if="isAuthenticated">My Currencies</router-link>
        <a href="/" @click.prevent="signOut" class="px-2 no-underline" v-if="isAuthenticated">Sign out</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  created () {
    this.signedIn()
  },
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    signedIn () {
      return localStorage.signedIn
    },
    signOut () {
      this.$http.secured.delete('/signin')
        .then(response => {
          delete localStorage.csrf
          delete localStorage.signedIn
          this.$store.dispatch('logout')
          this.$router.replace('/')
        })
        .catch(error => this.setError(error, 'Sign out failed'))
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>
