<template>
  <div class="max-w-sm m-auto">
    <div class="border p-10 border-grey rounded">
      <h3 class="text-2xl mb-6 text-black">Create Account</h3>
      <form @submit.prevent="signup">
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

        <div class="mb-6">
          <label for="password">Confirm Password</label>
          <input type="password" v-model="password_confirmation" id="password_confirmation"
                 class="bg-white focus:outline-none focus:shadow-outline border
                 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none
                 leading-normal">
        </div>

        <button type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                border border-blue-700 rounded">
          Create Account
        </button>

        <div class="my-4">
          <router-link to="/"
                       class="bg-transparent text-blue-700 font-semibold py-2 px-4">
            Sign In
          </router-link>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      name: '',
      password: '',
      password_confirmation: '',
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
    signup () {
      this.$http.plain.post('/signup', {
        name: this.name,
        password: this.password,
        password_confirmation: this.password_confirmation })
        .then(response => this.signupSuccessful(response))
        .catch(error => this.signupFailed(error))
    },
    signupSuccessful (response) {
      if (!response.data.csrf) {
        this.signupFailed(response)
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
    signupFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) ||
                   'Something went wrong'
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
