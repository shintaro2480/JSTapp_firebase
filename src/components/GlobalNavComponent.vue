<template>
    <nav>
      <ul class="flex justify-center space-x-4">
        <li class="font-bold underline"><router-link to="/">ホーム画面</router-link></li>
        <li class="font-bold underline"><router-link to="/restaurant">おすすめのお店を投稿</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  };
  </script>
  
  <style scoped>
/* スタイルが必要な場合はここに追加 */
</style>