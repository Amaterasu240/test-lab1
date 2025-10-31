<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/items" class="nav-link">Catalog</router-link>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  padding: 16px;
  background: #222;
}

.nav {
  display: flex;
  gap: 16px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.nav-link.router-link-active {
  text-decoration: underline;
}
</style>
