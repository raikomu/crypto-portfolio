<template>
  <div class="max-w-sm m-auto">
    <div class="border p-10 border-grey rounded">
      <h3 class="text-2xl mb-6 text-black">Sign In</h3>
      <form @submit.prevent="signin">
        <div class="text-red" v-if="error">{{ error }}</div>

        <div class="mb-6">
          <label for="name">Name</label>
          <input type="text" v-model="name" id="name"
                 class="bg-white focus:outline-none focus:shadow-outline border
                 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none
                 leading-normal">
        </div>

        <div class="mb-6">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password"
                 class="bg-white focus:outline-none focus:shadow-outline border
                 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none
                 leading-normal">
        </div>

        <button type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                border border-blue-700 rounded">
          Sign In
        </button>

        <div class="my-4">
          <router-link to="/signup"
                       class="bg-transparent text-blue-700 font-semibold py-2 px-4">
            Sign Up
          </router-link>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      name: '',
      password: '',
      error: ''
    }
  },
  created () {
    this.checkSignedIn()
  },
  updated () {
    this.checkSignedIn()
  },
  methods: {
    signin () {
      this.$http.plain.post('/signin', { name: this.name, password: this.password })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error))
    },
    signinSuccessful (response) {
      if (!response.data.csrf) {
        this.signinFailed(response)
        return
      }
      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$store.dispatch('login', { name: this.name, password: this.password })
        .then(() => {
          this.$router.replace('/currencies')
        })
    },
    signinFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || ''
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/currencies')
      }
    }
  }
}

</script>
