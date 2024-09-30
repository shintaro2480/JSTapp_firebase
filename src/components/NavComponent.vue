<template>
    <nav>
      <div v-if="user" class="flex justify-between items-center m-2">
        <div class="flex items-center" >

          <img
          v-if="user.displayName === 'じゅんや'"
          class="w-9 h-9 rounded-full"
          src="https://firebasestorage.googleapis.com/v0/b/jstmeet-firebase.appspot.com/o/profiles%2Fprofile.jpg?alt=media&token=b2da20c7-7b7b-413e-8a42-6ed2a17f314a"
          alt="profile"
        >
        <img
          v-else-if="user.displayName === 'としあき'"
          class="w-9 h-9 rounded-full"
          src="https://firebasestorage.googleapis.com/v0/b/jstmeet-firebase.appspot.com/o/profiles%2FkO1k0i2AUAhEPZ3IddQVcoI8IF72%2Fprofile.jpg?alt=media&token=8b5cdf72-039a-4192-8e16-c8344c41c1a1"
          alt="profile"
        >
        <img
          v-else-if="user.displayName === 'しんたろう'"
          class="w-9 h-9 rounded-full"
          src="https://firebasestorage.googleapis.com/v0/b/jstmeet-firebase.appspot.com/o/profiles%2FvyFdkZ0bLCM3G3mj0XMcdTZanN32%2Fprofile.jpg?alt=media&token=9ea9e9f3-f7f0-4018-bb0f-334fd3cc9e58"
          alt="profile"
        >

<!--
          <img class="w-9 h-9 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/jstmeet-firebase.appspot.com/o/profiles%2Fprofile.jpg?alt=media&token=b2da20c7-7b7b-413e-8a42-6ed2a17f314a" alt="profile">
        <img class="w-9 h-9 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/jstmeet-firebase.appspot.com/o/profiles%2FkO1k0i2AUAhEPZ3IddQVcoI8IF72%2Fprofile.jpg?alt=media&token=8b5cdf72-039a-4192-8e16-c8344c41c1a1" alt="profile">
        <img class="w-9 h-9 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/jstmeet-firebase.appspot.com/o/profiles%2FvyFdkZ0bLCM3G3mj0XMcdTZanN32%2Fprofile.jpg?alt=media&token=9ea9e9f3-f7f0-4018-bb0f-334fd3cc9e58" alt="profile">
            <img class="w-9 h-9 rounded-full" :src="user.image" alt="profile"> -->
        <p>ようこそ <b>{{ user.displayName }}</b>さん.{{ user.image }}</p>
        </div>
        
        <p>{{ user.email }}</p>
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
  
  