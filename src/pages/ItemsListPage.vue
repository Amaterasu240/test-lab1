<script setup>
import { ref, onMounted } from 'vue'

const items = ref([])

onMounted(async () => {
  const res = await fetch('/data.json')
  items.value = await res.json()
})
</script>

<template>
  <section class="catalog">
    <div class="catalog-header">
      <h2 class="page-title">Каталог</h2>
      <p class="page-subtitle">Список доступнихх товарів</p>
    </div>

    <div class="items-container">
      <article 
        v-for="item in items" 
        :key="item.id" 
        class="item-row"
      >
        <div class="item-number">{{ String(item.id).padStart(2, '0') }}</div>
        <div class="item-info">
          <h3 class="item-name">{{ item.title }}</h3>
          <p class="item-details">{{ item.description }}</p>
        </div>
        <router-link :to="`/items/${item.id}`" class="item-action">
          Детальніше
        </router-link>
      </article>
    </div>
  </section>
</template>

<style scoped>
.catalog {
  max-width: 1100px;
  margin: 0 auto;
}

.catalog-header {
  margin-bottom: 48px;
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
}

.page-subtitle {
  font-size: 18px;
  color: #6b7280;
  margin: 0;
}

.items-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.item-row {
  display: grid;
  grid-template-columns: 60px 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.item-row:hover {
  border-color: #6b7280;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.item-number {
  font-size: 20px;
  font-weight: 700;
  color: #9ca3af;
  font-family: monospace;
}

.item-info {
  flex: 1;
}

.item-name {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 6px;
}

.item-details {
  color: #6b7280;
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
}

.item-action {
  padding: 10px 24px;
  background: #6b7280;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  border-radius: 6px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.item-action:hover {
  background: #4b5563;
}

@media (max-width: 768px) {
  .item-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .item-number {
    display: none;
  }
  
  .item-action {
    width: 100%;
    text-align: center;
  }
}
</style>