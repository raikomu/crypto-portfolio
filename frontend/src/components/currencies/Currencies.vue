<template>
  <div class="m-auto py-6">
    <div class="text-red" v-if="error">{{ error }}</div>
    <h3 align="center" class="text-3xl mb-6">Add a new Currency</h3>

    <form action="" @submit.prevent="addCurrency">
      <div class="mb-6 m-auto max-w-md">
        <label for="currency_name" class="block font-bold mb-2">Type</label>
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 mb-4 rounded shadow leading-tight
        focus:outline-none focus:shadow-outline" v-model="newCurrency.name">
          <option value="Bitcoin">Bitcoin</option>
          <option value="Ethereum">Ethereum</option>
          <option value="Ripple">Ripple</option>
        </select>

        <label for="currency_amount" class="block font-bold mb-2">Amount</label>
        <input type="number" v-model="newCurrency.amount"
               class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 mb-4 rounded shadow leading-tight
               focus:outline-none focus:shadow-outline">

        <label for="currency_purchased_at" class="block font-bold mb-2">Date of purchase</label>
        <input type="date" v-model="newCurrency.purchased_at"
               class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 mb-4 rounded shadow leading-tight
               focus:outline-none focus:shadow-outline">

        <label for="currency_wallet" class="block font-bold mb-2">Wallet</label>
        <input type="text" v-model="newCurrency.wallet"
               class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 mb-4 rounded shadow leading-tight
               focus:outline-none focus:shadow-outline">

        <input type="submit" value="Add Currency"
               class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      </div>
    </form>

    <h3 align="center" class="text-3xl mb-6">My Cryptocurrencies</h3>

    <table class="table-auto m-auto">
      <thead>
        <tr>
          <th class="border px-4 py-2">Cryptocurrency</th>
          <th class="border px-4 py-2">Amount</th>
          <th class="border px-4 py-2">Date of purchase</th>
          <th class="border px-4 py-2">Wallet location</th>
          <th class="border px-4 py-2">Current market value (EUR)</th>
          <th class="border px-4 py-2">Option</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in currencies" :key="currency.id">
          <td class="border px-4 py-2">{{ currency.name }}</td>
          <td class="border px-4 py-2">{{ currency.amount }}</td>
          <td class="border px-4 py-2">{{ currency.purchased_at }}</td>
          <td class="border px-4 py-2">{{ currency.wallet }}</td>
          <td class="border px-4 py-2"></td>
          <td class="border px-4 py-2">
            <button @click.prevent="deleteCurrency(currency)"
                    class="bg-transparent hover:bg-red-500 text-red-700 font-bold
                    hover:text-white py-2 px-4 border border-red-500
                    hover:border-transparent rounded">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Currencies',
  data () {
    return {
      currencies: [],
      newCurrency: [],
      error: ''
    }
  },
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      this.$http.secured.get('/currencies')
        .then(response => { this.currencies = response.data })
        .catch(error => this.setError(error, 'Something went wrong'))
    }
  },
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    addCurrency () {
      const value = this.newCurrency
      if (!value) {
        return
      }
      this.$http.secured.post('/currencies', {
        currency: { name: this.newCurrency.name,
          amount: this.newCurrency.amount,
          purchased_at: this.newCurrency.purchased_at,
          wallet: this.newCurrency.wallet }
      })
        .then(response => {
          this.currencies.push(response.data)
          this.newCurrency = ''
        })
        .catch(error => this.setError(error, "Couldn't add currency"))
    },
    deleteCurrency (currency) {
      if (confirm('Are you sure?')) {
        this.$http.secured.delete(`/currencies/${currency.id}`)
          .then(response => {
            this.currencies.splice(this.currencies.indexOf(currency), 1)
          })
          .catch(error => this.setError(error, "Couldn't delete currency"))
      }
    }
  }
}
</script>
