<template>
  <div id="home">
    <div class="login-button-container">
      <button>Login</button>
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
  top: 5px;
  right: 10px;
}

.login-button-container button {
  background-color: yellow;
  padding: 10px 15px;
}
</style>
