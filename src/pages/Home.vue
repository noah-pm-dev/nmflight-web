<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="menu">
      <button>
        <router-link to="/portfolio">Portfolio</router-link>
      </button>
      <button>
        <router-link to="/shop">Shop</router-link>
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  width: 100vw;
  display: flex;
  justify-content: space-around;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 100px;
  font-size: 5vw;
  font-weight: 500;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
</style>
