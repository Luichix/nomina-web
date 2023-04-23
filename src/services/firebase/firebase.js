import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBkBxKAZVCye4YVbzMNd_J8GvPjYAKJYo4',
  authDomain: 'nomina-80522.firebaseapp.com',
  projectId: 'nomina-80522',
  storageBucket: 'nomina-80522.appspot.com',
  messagingSenderId: '1090187342211',
  appId: '1:1090187342211:web:738764ce870f55bcb486b6',
  measurementId: 'G-B2XFT1RG88',
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
