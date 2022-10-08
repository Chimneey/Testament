<template>
  <div class="dashboard">
    <div class="row">
      <div class="flex md6 lg6">
        <va-card>
          <va-card-title>Recipients</va-card-title>
          <va-card-content>
            <RouterLink to="/recipient" class="va-button">
              <va-button>
                recipient
              </va-button>
            </RouterLink>
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
          <RouterLink to="/contract" class="va-button">
            <va-button>
              Create a Contract
            </va-button>
          </RouterLink>
          <va-card-title></va-card-title>
          <va-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <va-button> Button </va-button>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<style>

</style>
