<template>
<NavBar />
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
            <h2>全ユーザーのおすすめレストラン</h2>
              <ul>
                <!-- レストランをリスト表示 -->
                <li class="border border-gray-300 m-2.5 p-2.5" v-for="restaurant in restaurants" :key="restaurant.id">
                  <h2 class="font-bold"><a :href="restaurant.url" target="_blank">{{ restaurant.title }}</a></h2>
                  <p>{{ restaurant.name }} さんのおすすめ</p> <!-- ユーザー名を表示 -->
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from '../components/GlobalNavComponent.vue';

import { db, auth } from "../../firebase";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";



//レストランを登録する際、piniaからユーザーの名前(user.displayName)を取得したいので、piniaも準備する
import { useUserStore } from '../stores/userStore'; // userStoreをインポート
import { computed } from 'vue'; // computedをインポート  

export default {
  components: {
    NavBar // コンポーネントを登録
  },
  setup(){
    const userStore = useUserStore(); // Pinia ストアを取得
    const userPinia = computed(() => userStore.user); // ユーザー情報をリアクティブに取得

  },
  data() {
    return {
      title: "",
      url: "",
      restaurants: [],
      users: {}, // ユーザー情報を格納するオブジェクト
    };
  },
  methods: {
    async submitRestaurant() {
      //以下で、現在ログイン中のユーザー情報は取得できている
      const user = auth.currentUser;
      if (user) {
        try {
          //db(FirestoreのDatabaseの中にある、restaurantコレクションに対し)
          const restaurantRef = collection(db, "restaurants");
          //
          await addDoc(restaurantRef, {
            title: this.title,
            url: this.url,
            userId: user.uid,
            name: user.displayName,
            createdAt: new Date(),
          });
          alert("レストランを投稿しました！");
          this.title = "";
          this.url = "";
          await this.fetchRestaurants();
        } catch (error) {
          console.error(error);
          alert("投稿に失敗しました: " + error.message);
        }
      } else {
        alert("ログインが必要です");
      }
    },
    async fetchRestaurants() {
      try {
        const restaurantRef = collection(db, "restaurants");
        const snapshot = await getDocs(restaurantRef);
        this.restaurants = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        await this.fetchUsers(); // ユーザー情報も取得
      } catch (error) {
        console.error("データの取得に失敗しました: ", error);
      }
    },
    async fetchUsers() {
      try {
        const userRef = collection(db, "users"); // ユーザーコレクションを参照
        const snapshot = await getDocs(userRef);
        snapshot.docs.forEach((doc) => {
          this.users[doc.id] = doc.data(); // ユーザーIDをキーにしてユーザー情報を格納
        });
      } catch (error) {
        console.error("ユーザーの取得に失敗しました: ", error);
      }
    },
    // getUserName(userId) {
    //   return this.users[userId] ? this.users[userId].name : "不明"; // ユーザー名を返す
    // },
  },
  async created() {
    await this.fetchRestaurants();
  },
};
</script>