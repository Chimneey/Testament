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
// import web3 from "web3"
import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  // walletconnect: {
  //   package: WalletConnectProvider, // required
  //   options: {
  //     infuraId: "INFURA_ID" // required
  //   }
  // }
};

async function login() {
  try {

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });

    const provider = await web3Modal.connect();
    // const web3 = new Web3(provider);
    console.log('Web3: ', web3)
  } catch (error) {
    console.log(error)
  }
}


</script>
