<template>
  <div id="home">
    <div class="login-button-container">
      <va-button color="info" gradient @click="login">Login</va-button>
    </div>
    <div class="home-content">
      <h1 class="display-1">Testament</h1>
      <h2 class="title">Set an extra layer of protection to your wallet</h2>
      <p class="display-4">Set a fallback wallet to transfers all your assets in case of loss</p>
      <h2 class="display-3">How it works</h2>
      <ol class="va-ordered">
        <li>Connect The wallet you want to secure</li>
        <li>Select you recipient wallets</li>
        <li>Configure timer and other settings</li>
      </ol>
      <p>You're secured!</p>
    </div>
  </div>
</template>

<style>
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
}

.home-content {
  text-align: center;
}
</style>

<script setup lang="ts">
import Web3 from "web3";
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'
import QRCodeModal from '@walletconnect/qrcode-modal/dist/umd/index.min.js'

async function login() {
  try {
    //  Create WalletConnect Provider
    const provider = new WalletConnectProvider({
      infuraId: "27e484dcd9e3efcfd25a83a78777cdf1"
    });

    //  Enable session (triggers QR Code modal)
    await provider.enable();
    const web3 = new Web3(provider);


    //  Create Web3 instance
  } catch (error) {
    console.log(error)
  }
}

</script>
