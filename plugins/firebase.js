import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// TODO: 以下importしようとすると「window is not defined」エラーとなる
// import 'firebase/performance'

// .env に設定した値を取得してる
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Initialize Performance Monitoring and get a reference to the service
// const perf = firebase.performance()
// if (perf) {
//   console.log(perf)
// }

export default firebase
