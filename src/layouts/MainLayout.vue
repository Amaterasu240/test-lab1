<template>
  <div class="layout">
    <header class="header">
      <div class="container header-inner">
        <h1 class="logo">MySPA</h1>
        <nav class="nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/items" class="nav-link">Catalog</router-link>
        </nav>
      </div>
    </header>

    <main class="container main-content">
      <router-view />
    </main>

    <footer class="footer">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} MySPA. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.header {
  background: #6b7280;
  border-bottom: 1px solid #4b5563;
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 16px 0;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.nav {
  display: flex;
  gap: 12px;
}

.nav-link {
  font-size: 15px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 20px;
  border-radius: 6px;
  transition: all 0.2s ease;
  background: rgba(255, 255, 255, 0.1);
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.nav-link.router-link-active {
  background: #ffffff;
  color: #6b7280;
}

.main-content {
  flex: 1;
  padding: 60px 24px;
}

.footer {
  background: #f3f4f6;
  border-top: 1px solid #e5e7eb;
  padding: 24px 0;
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  margin-top: auto;
}
</style>