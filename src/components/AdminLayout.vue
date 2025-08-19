<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <nav>
        <ul>
          <li><router-link to="/">Dashboard</router-link></li>
          <li><router-link to="/config">Configuration</router-link></li>
          <li><router-link to="/affiliate-tags">Affiliate Tags</router-link></li>
          <li><router-link to="/api-keys">API Keys</router-link></li>
          <li><router-link to="/webhooks">Webhooks</router-link></li>
          <li><router-link to="/commissions">Commissions</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/redemptions">Redemptions</router-link></li>
        </ul>
      </nav>
    </aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
}
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
  height: 100vh;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin-bottom: 10px;
}
.content {
  flex-grow: 1;
  padding: 20px;
}
</style>
