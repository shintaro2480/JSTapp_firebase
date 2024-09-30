<template>
    <nav>
      <div v-if="user" class="flex justify-between items-center m-2">
        <p>ようこそ <b>{{ user.displayName }}</b>さん
        </p>
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
  
  