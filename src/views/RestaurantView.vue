<template>
  <div class="flex flex-col h-screen">
    <header class="flex justify-between p-4 border-b items-center">
      <h1 class="font-semibold text-xl leading-tight">JSTアプリ</h1>
      <button class="py-1 px-4 border-2 border-green-800 rounded">
        <router-link to="/register">Slack Cloneをはじめる</router-link>
      </button>
    </header>
    <div class="bg-gray-100 flex-auto">
      <div class="flex justify-center mt-16">
        <div class="w-4/5 border bg-white signin">
          <div class="my-12 text-center">
            <h2 class="text-4xl font-bold">サインイン</h2>
            <div>
              <h2>おすすめレストランを投稿</h2>
              <input v-model="title" placeholder="レストラン名" />
              <input v-model="url" placeholder="URL" />
              <button @click="submitRestaurant">投稿</button>
            </div>
            <br>
<hr>
<br>
            <h2>みんなのおすすめのお店</h2>
              <ul>
                <!-- レストランをリスト表示 -->
                <li v-for="restaurant in restaurants" :key="restaurant.id">
                  <a :href="restaurant.url" target="_blank">{{ restaurant.title }}</a>
                </li>
              </ul>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      title: "",
      url: "",
      restaurants: [], // restaurantsを追加してリアクティブにする
    };
  },
  methods: {
    async submitRestaurant() {
      // ユーザーがログインしているか確認
      const user = auth.currentUser;
      if (user) {
        try {
          const restaurantRef = collection(db, "restaurants"); // restaurantsコレクションを参照
          await addDoc(restaurantRef, {
            title: this.title,
            url: this.url,
            userId: user.uid, // 投稿したユーザーのIDを保存
            createdAt: new Date(), // 投稿日時を保存
          });
          alert("レストランを投稿しました！");
        } catch (error) {
          console.error(error);
          alert("投稿に失敗しました: " + error.message);
        }
      } else {
        alert("ログインが必要です");
      }
    },
  },
  async created() {
    try {
      const restaurantRef = collection(db, "restaurants"); // restaurantsコレクション参照
      const snapshot = await getDocs(restaurantRef); // 全件取得
      this.restaurants = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // ドキュメントを配列に変換
    } catch (error) {
      console.error("データの取得に失敗しました: ", error);
    }
  },
};
</script>
