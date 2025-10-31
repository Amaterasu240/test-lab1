<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const item = ref(null)

onMounted(async () => {
  const res = await fetch('/data.json')
  const data = await res.json()
  item.value = data.find(el => el.id === Number(route.params.id))
})
</script>

<template>
  <section v-if="item" class="details-page">
    <div class="breadcrumb">
      <router-link to="/items" class="breadcrumb-link">Каталог</router-link>
      <span class="separator">/</span>
      <span class="current">{{ item.title }}</span>
    </div>

    <div class="content-area">
      <div class="item-header">
        <h2 class="item-title">{{ item.title }}</h2>
      </div>
      
      <div class="item-body">
        <p class="item-description">{{ item.description }}</p>
      </div>

      <div class="actions">
        <router-link to="/items" class="back-button">
          ← Назад до каталогу
        </router-link>
      </div>
    </div>
  </section>

  <div v-else class="loading-state">
    <p>Загрузка...</p>
  </div>
</template>

<style scoped>
.details-page {
  max-width: 900px;
  margin: 0 auto;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  font-size: 14px;
}

.breadcrumb-link {
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: #1f2937;
}

.separator {
  color: #d1d5db;
}

.current {
  color: #1f2937;
  font-weight: 600;
}

.content-area {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 48px;
}

.item-header {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 2px solid #f3f4f6;
}

.item-title {
  font-size: 36px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.item-body {
  margin-bottom: 32px;
}

.item-description {
  font-size: 18px;
  color: #4b5563;
  line-height: 1.8;
  margin: 0;
}

.actions {
  display: flex;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid #f3f4f6;
}

.back-button {
  padding: 12px 24px;
  background: #6b7280;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.back-button:hover {
  background: #4b5563;
}

.loading-state {
  text-align: center;
  padding: 60px 0;
  color: #6b7280;
  font-size: 18px;
}

@media (max-width: 768px) {
  .content-area {
    padding: 32px 24px;
  }
  
  .item-title {
    font-size: 28px;
  }
}
</style>