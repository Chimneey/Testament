<template>
  <div class="dashboard">
    <div class="row">
      <div class="flex md6 lg6">
        <va-card>
          <va-card-title>Recipients</va-card-title>
          <va-card-content>
            <va-button> Add a Recipient </va-button>
            <div class="va-table-responsive">
              <table class="va-table va-table--striped">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{user.fullName}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.country}}</td>
                  <td>
                    <va-badge
                        :text="user.status"
                        :color="user.status"
                    />
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 lg6">
        <va-card>
          <va-card-title>Create a Contract</va-card-title>
          <va-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <va-button> Button </va-button>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.va-table-responsive {
  overflow: auto;
}
</style>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
  data () {
  return {
  users: [{
  id: 1,
  fullName: 'Ashley Mcdaniel',
  email: 'ashleymcdaniel@nebulean.com',
  country: 'Cayman Islands',
  status: 'warning',
},
{
  id: 2,
  fullName: 'Todd Sellers',
  email: 'sellerstodd@nebulean.com',
  country: 'Togo',
  status: 'info',
},
{
  id: 3,
  fullName: 'Sherman Knowles',
  email: 'shermanknowles@nebulean.com',
  country: 'Central African Republic',
  status: 'warning',
},
{
  id: 4,
  fullName: 'Vasquez Lawson',
  email: 'vasquezlawson@nebulean.com',
  country: 'Bouvet Island',
  status: 'info',
}],
}
},
})
</script>
