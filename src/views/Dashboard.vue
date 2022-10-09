<template>
  <div id="dashboard">
    <div class="half manage-recipients-container">
      <div class="title-container mb-4">
        <h1 class="display-3">Manage Recipients</h1>
      </div>
      <div class="recipients">
        <va-card>
          <va-card-content>
            <va-list>
              <va-list-item class="mb-2" v-for="(recipient, index) in recipients" :key="index">
                <va-list-item-section avatar>
                  <va-avatar>
                    <img :src="recipient.img">
                  </va-avatar>
                </va-list-item-section>
                <va-list-item-section>
                  <va-list-item-label>
                    {{ recipient.name }}
                  </va-list-item-label>
                  <va-list-item-label caption>
                    {{ recipient.address }}
                  </va-list-item-label>
                </va-list-item-section>
                <va-list-item-section icon>
                  <va-icon v-on:click="handleClick()" name="delete" color="gray" />
                </va-list-item-section>
              </va-list-item>
            </va-list>
            <RouterLink to="/recipient" class="va-button">
              <va-button>
                Add
              </va-button>
            </RouterLink>
          </va-card-content>
        </va-card>
      </div>
    </div>
    <div class="half manage-contract-container">
      <div class="title-container mb-4">
        <h1 class="display-3">Manage Contract</h1>
      </div>
      <div class="contract">
        <va-card>
          <va-card-content>
            <div class="mb-4">
              <vue-countdown :time="2 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
                Time Remaining: {{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
              </vue-countdown>
            </div>
            <div class="mb-4">
              Recipient: 0x44...8C6
            </div>
            <div class="flex mb-4">
              <va-button color="danger" class="mr-1"> Cancel </va-button>
              <va-button color="success"> Renew </va-button>
            </div>
            <RouterLink to="/contract" class="va-button">
              <va-button>
                Create
              </va-button>
            </RouterLink>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#dashboard {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px 15px;
}

.half {
  width: 50%;
  min-width: 600px;
  padding: 15px;

  &.manage-recipients-container {}

  &.manage-contract-container {}
}
</style>

<script setup lang="ts">
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const main = useMainStore()

// extract specific store properties
const { counter, doubleCounter, recipients } = storeToRefs(main)

let handleClick = function () {
  alert('delete')
}



</script>
