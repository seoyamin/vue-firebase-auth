import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBtkxnSsVCJk2q3iwPObJUXU6C-QFT7SeU",
    authDomain: "vue-auth-yt-c3184.firebaseapp.com",
    projectId: "vue-auth-yt-c3184",
    storageBucket: "vue-auth-yt-c3184.appspot.com",
    messagingSenderId: "139066990605",
    appId: "1:139066990605:web:0ff7023e08809c3c827544"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
