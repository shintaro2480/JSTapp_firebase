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
              <div class="mb-2">
                <input type="file" @change="handleFileChange" class="text-xl w-3/5 p-3 border rounded" />
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

import { db, storage } from "../../firebase"; // Firestore と Storage のインポート
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Storage に関する関数
import { doc, setDoc } from "firebase/firestore"; // Firestore に関する関数


export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errorMessage: "",
      profileImage: null, // プロフィール画像用
    };
  },
  methods: {
    handleFileChange(event) {
      this.profileImage = event.target.files[0]; // 選択されたファイルを取得
      console.log(this.profileImage);
    },
    async registerUser() {
      try {
        //初期設定
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

                // プロフィール画像のアップロード
                let profileImageUrl = "";
        if (this.profileImage) {
          const storageRef = ref(storage, `profiles/${user.uid}/profile.jpg`); // Storage に画像をアップロードする場所を指定
          await uploadBytes(storageRef, this.profileImage); // 画像をアップロード
          profileImageUrl = await getDownloadURL(storageRef); // ダウンロード URL を取得
        }

        // Firestore にユーザー情報を保存
        const userRef = doc(db, "users", user.uid); // Firestore の "users" コレクションに保存
        await setDoc(userRef, {
          name: this.name,
          email: this.email,
          profileImageUrl: profileImageUrl, // 画像の URL も保存
          createdAt: new Date(),
        });

        // Firebase Auth にユーザーの名前とプロフィール画像 URL を設定
        await updateProfile(user, {
          displayName: this.name,
          photoURL: profileImageUrl, // プロフィール画像 URL を設定
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
