import firebase from 'firebase/app'; //firebase/app so that we only import some basic features and not all
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyA-6qiAUjG5NRrGRvVx7S-LnOUJ6-2nCLI",
    authDomain: "todo-app-ffcd4.firebaseapp.com",
    projectId: "todo-app-ffcd4",
    storageBucket: "todo-app-ffcd4.appspot.com",
    messagingSenderId: "337322859982",
    appId: "1:337322859982:web:a3bfe19c71320be51c9f9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timeStampsInSnapshots: true, merge:true });

  export default firebase; //to be able to import it elsewhere and interract with our project

