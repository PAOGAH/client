import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyA0P91CWn_QsH6SHg3ksMilbF4YlgEl7ik",
  authDomain: "pakogah-project.firebaseapp.com",
  databaseURL: "https://pakogah-project.firebaseio.com",
  projectId: "pakogah-project",
  storageBucket: "pakogah-project.appspot.com",
  messagingSenderId: "192784075343"
};

firebase.initializeApp(config);

const db = firebase.database();

export default db