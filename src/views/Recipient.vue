<template>
  <div class="recipient">
    <va-card>
      <va-card-title>
        <h1>Recipient</h1>
      </va-card-title>
      <va-card-content>
        <va-form
            class="mt-6"
            tag="form"
            @submit.prevent="handleSubmit"
        >
          <va-input
              label="Wallet Address"
              v-model="username"
              class="mt-6"
          />

          <va-button type="submit" class="mt-6">
            Add
          </va-button>
          <va-button type="submit" class="mt-6">
            Cancel
          </va-button>
        </va-form>
      </va-card-content>
    </va-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      value: '',
      options: ['admin', 'user'],
    }
  },
  methods: {
    handleSubmit () {
      alert('-- form submit --')
    },
  },
}
</script>
<style>

</style>
