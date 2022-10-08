<template>
  <div id="home">
    <div class="login-button-container">
      <va-button color="info" gradient @click="login">Login</va-button>
    </div>
    <div class="home-content-container">
      <h1>Testament</h1>
      <p>Set an extra layer of protection</p>
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

.login-button-container button {
  background-color: yellow;
  padding: 10px 15px;
}
</style>

<script setup lang="ts">
import Web3 from "web3";
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'
import QRCodeModal from '@walletconnect/qrcode-modal/dist/umd/index.min.js'

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1"
});

//  Enable session (triggers QR Code modal)
await provider.enable();
const web3 = new Web3(provider);


//  Create Web3 instance
</script>
