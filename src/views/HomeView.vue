<template>
  <div id="home">
    <div class="login-button-container">
      <va-button size="large" color="info" gradient @click="login">Login</va-button>
    </div>
    <div class="home-content">
      <div class="half cta">
        <p class="display-1 mb-0">Extra layer for</p>
        <p class="display-1 color-primary mt-0 mb-5">wallet security</p>
        <p class="text--secondary mb-5">Set a fallback plan in case of loss: Connect your wallet. Select recipients.
          Configure a timer. </p>
        <p class="display-4 mb-4">And that's it. <span class="color-primary">You're secured</span></p>
        <va-button size="large" color="info" gradient @click="login">Login</va-button>

      </div>
      <div class="half lottie-container">
        <lottie-player src="src\assets\lotties\secure-dapp.json" background="transparent" speed="1" loop autoplay>
        </lottie-player>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
#home {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-button-container {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1;
}

.home-content {
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.display-1 {
  font-size: 5rem;
}

.half {
  width: 50%;
  min-width: 500px;

  &.cta {
    align-self: center;
    padding-left: 30px;
  }

  &.lottie-container {
    max-height: 100vh;
  }
}

.color-primary {
  color: var(--va-primary)
}
</style>

<script setup lang="ts">
import Web3 from "web3";
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';
// import Web3Auth from "@web3auth/web3auth/dist/web3auth.umd.min.js"
// import CoinbaseWalletSDK from '@coinbase/wallet-sdk/dist/provider/Web3Provider.js';
import Web3Modal from "web3modal";

async function login() {
  try {
    const providerOptions = {
      /* See Provider Options Section */
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // required
        }
      },
      // web3auth: {
      //   package: Web3Auth, // required
      //   options: {
      //     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1"
      //   }
      // },
      // coinbasewallet: {
      //   package: CoinbaseWalletSDK, // Required
      //   options: {
      //     appName: "My Awesome App", // Required
      //     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Required
      //     chainId: 1, // Optional. It defaults to 1 if not provided
      //     darkMode: true // Optional. Use dark theme, defaults to false
      //   }
      // },
    }

    const web3Modal = new Web3Modal({
      providerOptions, // required
      // theme: "dark"
    });

    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    console.log(web3)

    //  Create Web3 instance
  } catch (error) {
    console.log(error)
  }
}

</script>
