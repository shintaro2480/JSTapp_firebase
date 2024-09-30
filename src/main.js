import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/css/tailwind.css' //追加

import { auth } from '../firebase' // firebase.jsをインポート
import { useUserStore } from './stores/userStore' // userStoreをインポート
//import { getAuth } from 'firebase/auth' // firebase.jsをインポート

//const auth = getAuth();
//const user = auth.currentUser;



const app = createApp(App)

app.use(createPinia())
app.use(router)


// Firebase Authenticationの状態を監視（オプション）。ユーザー状態が変わったら
auth.onAuthStateChanged((user) => {
  const userStore = useUserStore();

  if (user) {
    // ユーザーがログインしている場合
    userStore.setUser({
      displayName: user.displayName,
      email: user.email,
      image: user.image,
    });
    console.log('ユーザーがログインしています:', user.displayName);

  } else {
    // ユーザーがログアウトしている場合
    userStore.clearUser();
    console.log('ユーザーがログアウトしています');
  }

})



app.mount('#app')
