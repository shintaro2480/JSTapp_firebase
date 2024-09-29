// firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAfGoqOAC36GNyNEJP9hSaDsMGtzr-LIIQ',
  authDomain: 'jstmeet-firebase.firebaseapp.com',
  projectId: 'jstmeet-firebase',
  storageBucket: 'jstmeet-firebase.appspot.com',
  messagingSenderId: '926947290409',
  appId: '1:926947290409:web:d1d978db0ab19dc5a8db38'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
