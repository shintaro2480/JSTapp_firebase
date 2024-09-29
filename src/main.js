import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { auth } from '../firebase' // firebase.jsをインポート

import './assets/main.css'
import './assets/css/tailwind.css' //追加

// Firebase Authenticationの状態を監視（オプション）
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('ユーザーがログインしています:', user)
  } else {
    console.log('ユーザーがログアウトしています')
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
