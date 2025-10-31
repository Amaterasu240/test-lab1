<template>
  <section class="home">
    <div class="hero-section">
      <h2 class="main-title">Ласкаво просимо до MySPA</h2>
      <p class="description">
        Сучасний односторінковий додаток, створений з використанням Vue 3 і Vue Router. 
        Досліджуйте каталог і пориньте у світ плавної навігації без перезавантаження сторінки.
      </p>
      
      <div class="features-text">
        <p>
          Тут ви можете переглядати список товарів з детальною інформацією, 
          відкривати деталі без перезавантаження сторінки та вивчати основи структури SPA на Vue. 
          Миттєва навігація між сторінками забезпечується потужною системою маршрутизації Vue Router.
        </p>
      </div>

      <div class="action-area">
        <router-link to="/items" class="primary-button">
          Перейти до каталогу
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}

.hero-section {
  padding: 40px 0;
}

.main-title {
  font-size: 48px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 24px;
  line-height: 1.2;
}

.description {
  font-size: 20px;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 32px;
}

.features-text {
  background: #f9fafb;
  border-left: 4px solid #6b7280;
  padding: 24px;
  margin-bottom: 40px;
}

.features-text p {
  font-size: 16px;
  color: #374151;
  line-height: 1.8;
  margin: 0;
}

.action-area {
  display: flex;
}

.primary-button {
  display: inline-block;
  padding: 14px 36px;
  background: #6b7280;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.primary-button:hover {
  background: #4b5563;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
}

@media (max-width: 768px) {
  .main-title {
    font-size: 36px;
  }
  
  .description {
    font-size: 18px;
  }
}
</style>