<template>
  <div>
    <p>ログイン中</p>
    <NavBar /> 
    <!--
    <nav>
      <ul class="flex justify-center space-x-4">
        <li class="font-bold"><router-link to="/">ホーム画面</router-link></li>
        <li class="font-bold"><router-link to="/restaurant">おすすめのお店を投稿</router-link></li>
      </ul>
    </nav>
    -->
    <div>
      <button class="py-1 px-4 bg-gray-800 text-white rounded" @click="signOut">サインアウト</button>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';
import NavBar from '../components/GlobalNavComponent.vue';

export default {
  components: {
    NavBar // コンポーネントを登録
  },
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
