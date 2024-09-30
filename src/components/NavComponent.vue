<template>
    <nav>
      <h1>My App</h1>
      <div v-if="user">
        <p>ようこそ、{{ user.displayName }}!</p>
        <p>Email: {{ user.email }}</p>
      </div>
      <div v-else>
        <p>ログインしていません</p>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { useUserStore } from '../stores/userStore'; // userStoreをインポート
  import { computed } from 'vue'; // computedをインポート
  
  const userStore = useUserStore(); // Pinia ストアを取得
  const user = computed(() => userStore.user); // ユーザー情報をリアクティブに取得
  </script>
  
  <style scoped>
  /* スタイルを追加 */
  </style>
  
  