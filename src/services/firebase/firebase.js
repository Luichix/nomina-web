import { initializeApp } from 'firebase/app'

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
