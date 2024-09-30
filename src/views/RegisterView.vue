<template>
  <div class="flex flex-col h-screen">
    <header class="flex justify-between p-4 border-b items-center">
      <h1 class="font-semibold text-xl leading-tight">JSTアプリ</h1>
      <button class="py-1 px-4 border-2 border-green-800 rounded">
        <router-link to="/signin">サインイン</router-link>
      </button>
    </header>
    <div class="bg-gray-100 flex-auto">
      <div class="flex justify-center mt-16">
        <div class="w-2/5 border bg-white">
          <div class="my-12 text-center">
            <h2 class="text-4xl font-bold">ユーザの登録</h2>
            <p class="my-4">
              <span class="font-semibold">名前、メールアドレス</span>と
              <span class="font-semibold">パスワード</span>を入力してください。
            </p>
            <form @submit.prevent="registerUser">
              <div class="mb-2">
                <input v-model="name" placeholder="名前"
                  class="text-xl w-3/5 p-3 border rounded" />
              </div>
              <div class="mb-2">
                <input type="email" v-model="email" placeholder="you@example.com"
                  class="text-xl w-3/5 p-3 border rounded" />
              </div>
              <div class="mb-2">
                <input type="password" v-model="password" class="text-xl w-3/5 p-3 border rounded"
                  placeholder="パスワード" />
              </div>
              <button type="submit" class="text-xl w-3/5 bg-green-800 text-white py-2 rounded">ユーザの登録</button>
              <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async registerUser() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        //ユーザーの名前を設定
        await updateProfile(user, {
          displayName: this.name, //ユーザー名を設定
        });

        alert("アカウントが作成されました。ようこそ" + user.displayName + "さん。");

//        this.$router.push("/"); // 登録後にログインページへリダイレクト
      } catch (error) {
        console.error(error);
        this.errorMessage = error.message; // エラーメッセージを表示
      }
    },
  },
};
</script>
