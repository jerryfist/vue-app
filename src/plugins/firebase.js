import Vue from "vue";
import * as firebase from "firebase/app";
import firebaseConfig from "../../firebaseConfig";

// import 'firebase/auth'
import "firebase/firestore";
console.log("firebaseConfig", firebaseConfig);
firebase.initializeApp(firebaseConfig);

// firebase
//   .firestore()
//   .collection("test")
//   .add({ test: "aaa" })
//   .then(r => console.log(r))
//   .catch(e => console.error(e));