<template>
  <div class="recipient">
    <div id="manage-recipients-container">
      <div class="button-container">
        <va-button icon="arrow_back" class="mr-4 mb-2" href="dashboard" />
      </div>
      <div class="title-container mb-4">
        <h1 class="display-3">Manage Recipients</h1>
      </div>
      <div class="add-recipients-by-address mb-4">
        <va-card>
          <va-card-title>
            <h1>Add by address</h1>
          </va-card-title>
          <va-card-content>
            <va-form class="mt-6" tag="form" @submit.prevent="handleSubmit">
              <va-input label="Wallet Address" v-model="username" class="mt-6" />
              <va-button type="submit" class="mt-6">
                Add
              </va-button>
            </va-form>
          </va-card-content>
        </va-card>
      </div>
      <div class="add-recipients-by-domain mb-4">
        <va-card>
          <va-card-title>
            <h1>Add by ENS domain</h1>
          </va-card-title>
          <va-card-content>
            <va-form class="mt-6" tag="form" @submit.prevent="handleSubmit">
              <va-input label="ENS Domain" v-model="username" class="mt-6" />
              <va-button type="submit" class="mt-6">
                Add
              </va-button>
            </va-form>
          </va-card-content>
        </va-card>
      </div>
      <div id="add-charities">
        <!-- NOTE: Maybe populate from Endaoment -->
        <h2 class="display-4 mb-4">Charities</h2>
        <div id="charities">
          <div v-for="char,i in charities" :key="i">
            <va-card v-on:click="char.selected = !char.selected">
              <va-icon v-if="char.selected" name="check_circle" color="#9BEC15" />
              <va-image
                :src="char.img"
                style="height: 200px;" />
              <va-card-title>{{ char.title }}</va-card-title>
              <va-card-content>
                <p class="description">{{ char.desc }}</p>
                <a :href="char.href" target="_blank">Learn More</a>
              </va-card-content>
            </va-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      username: '',
      password: '',
      value: '',
      options: ['admin', 'user'],
      charities: [
        {
          title: 'Save the Children® Colombia',
          selected: false,
          address: '0x44505D88F17c1997544D0901C0dF8dd2e398A8C6',
          href: 'https://www.savethechildren.org/us/where-we-work/colombia',
          desc: `Following over 50 years of armed conflict, which continues in some regions,
                  Colombia has the largest number of displaced people in the world, an alarming 7.3 million.`,
          img: 'https://www.savethechildren.org/content/dam/global/images/countries/colombia/colombia-hero-ch1119292.jpg/_jcr_content/renditions/cq5dam.thumbnail.1700.1700.jpg',
        },
        {
          title: 'Save the Children® Venezuela',
          selected: false,
          address: '0x44505D88F17c1997544D0901C0dF8dd2e398A8C6',
          href: 'https://www.savethechildren.org/us/where-we-work/venezuela',
          desc: `Venezuela remains one of the most dangerous countries for children. Sadly, the
                  country has the highest homicide rates in the world - a shocking 24 out of 1,000 children are murdered
                  each year.`,
          img: 'https://www.savethechildren.org/content/dam/global/images/countries/venezuela/venezuela-hero-ch1251444.jpg/_jcr_content/renditions/cq5dam.thumbnail.1700.1700.jpg',
        },
        {
          title: 'Save the Children® Honduras',
          selected: false,
          address: '0x44505D88F17c1997544D0901C0dF8dd2e398A8C6',
          href: 'https://www.savethechildren.org/us/where-we-work/honduras',
          desc: `Officially the Republic of Honduras, the country is one of the least developed
                  and most unstable countries in Latin America. Gang violence is commonplace.`,
          img: 'https://www.savethechildren.org/content/dam/global/images/countries/honduras/honduras-kids-m161294-hero.jpg/_jcr_content/renditions/cq5dam.thumbnail.1700.1700.jpg',
        },
        {
          title: 'Save the Children® Mexico',
          selected: false,
          address: '0x44505D88F17c1997544D0901C0dF8dd2e398A8C6',
          href: 'https://www.savethechildren.org/us/where-we-work/mexico',
          desc: `Mexico has the second-largest economy in Latin America, and is a major oil
                  exporter. But prosperity remains a distant dream for many Mexicans. Rural areas are often neglected,
                  and huge shanty towns ring the cities. In 2017, back-to-back earthquakes left parts of the country
                  devastated and in need of emergency assistance.`,
          img: 'https://www.savethechildren.org/content/dam/global/images/countries/mexico/mexico-girl-school-hero.jpg/_jcr_content/renditions/cq5dam.thumbnail.1700.1700.jpg',
        },
      ]
    }
  },
  methods: {
    handleSubmit() {
      alert('-- form submit --')
    },
    copyCharityWalletAddressToClipboard(address: string) {
      navigator.clipboard.writeText(address);
      // Alert the copied text
      alert("Copied the text: " + address);
    }
  },
}
</script>

<style lang="scss">
.va-form{
  display: flex;

  > div {
    width: 80%;
  }

  button {
    width: 15%;
    margin-left: 5%;
  }
}

#manage-recipients-container {
  padding: 30px;
  width: 100vw;
  margin: 0;
  overflow-x: hidden;
}

#charities {
  display: flex;
  flex-wrap: wrap;
  max-width: 100vw;

  >div {
    width: calc(33.33% - 20px);
    margin: 10px;

    .va-card {
      height: 60vh;
      overflow: hidden;

      :hover {
        cursor: pointer;
      }
    }

    i {
      position: absolute;
      z-index: 1;
      height: 50px;
      width: 50px;
      top: 15px;
      left: 15px;
    }

    .description {
      font-size: 12px;
      margin-bottom: 10px;
    }

    a {
      position: absolute;
      bottom: 10px;
      left: 10px;
      font-size: 12px;
    }
  }
}
</style>
