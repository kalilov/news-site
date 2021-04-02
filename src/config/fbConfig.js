import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAf6qy3oY-w2kZm4P7Yfk3wWZDRf3RY3Jo",
    authDomain: "news-site-4ed8c.firebaseapp.com",
    projectId: "news-site-4ed8c",
    storageBucket: "news-site-4ed8c.appspot.com",
    messagingSenderId: "21584085780",
    appId: "1:21584085780:web:1227769fbedc692026b801"
};

firebase.initializeApp(firebaseConfig);

export default firebase