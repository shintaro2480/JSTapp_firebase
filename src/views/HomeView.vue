<template>
  <div>
    <h1>JSTアプリ</h1>
    <p>ログイン中</p>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/restaurant">Post Restaurant</router-link></li>
      </ul>
    </nav>
    <div>
      <button class="py-1 px-4 bg-gray-800 text-white rounded" @click="signOut">サインアウト</button>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';

export default {
  methods: {
    async signOut() {
      const auth = getAuth(); // Firebase Authインスタンスの取得

      try {
        await signOut(auth);  // サインアウトの実行
        this.$router.push("/signin");  // サインインページにリダイレクト
      } catch (error) {
        console.error("Sign out error:", error);
      }
    }
  }
};
</script>
