import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBP3sotjHftBSkOnx34NEErwR3aPcLy5wc",
    authDomain: "class-test-d5362.firebaseapp.com",
    databaseURL: "https://class-test-d5362-default-rtdb.firebaseio.com",
    projectId: "class-test-d5362",
    storageBucket: "class-test-d5362.appspot.com",
    messagingSenderId: "415179915202",
    appId: "1:415179915202:web:0f476eea2f2df7e789205b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();