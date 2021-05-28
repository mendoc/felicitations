import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/remote-config";

const configProd = {
    apiKey: "AIzaSyC30_r0aBPvF7dmRRRQ3dm6Pm8uzAPox7o",
    authDomain: "allo-taxi-6a895.firebaseapp.com",
    databaseURL: "https://allo-taxi-6a895.firebaseio.com",
    projectId: "allo-taxi-6a895",
    storageBucket: "allo-taxi-6a895.appspot.com",
    messagingSenderId: "11900999737",
    appId: "1:11900999737:web:95b31d15da60fb17c155e8",
    measurementId: "G-P50ZGK7TCG"
};

const c = configProd;

if (!firebase.apps.length) {
  firebase.initializeApp(c);
}

export default firebase;
export const config = c;
export const fb = firebase;