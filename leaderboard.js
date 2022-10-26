import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getFirestore, collection, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzEh-3l4CiOI9NMU7KnYc3YAmLBs1VzWM",
  authDomain: "dinorunner-33c05.firebaseapp.com",
  databaseURL: "https://dinorunner-33c05-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dinorunner-33c05",
  storageBucket: "dinorunner-33c05.appspot.com",
  messagingSenderId: "836992913463",
  appId: "1:836992913463:web:79d551141a086a0731afb2",
  measurementId: "G-FW6Y6WWB6G"
};
const app = initializeApp(firebaseConfig);

if(window?.data) {
  console.log(window.data);
  var text = document.createElement('h3');
  text.innerHTML = `Congrats ${data.name}, you achieved a score of ${data.score}!`
  var element = document.getElementById('yourscore');
  var sep = document.createElement('hr');
  element.appendChild(text);
  element.appendChild(sep);
}

// Load leaderboard
const db = getFirestore(app);
const q = query(collection(db, "records"), orderBy("score", "desc"), limit(100));
const querySnapshot = await getDocs(q);

const snaps = []
var i = 0;
querySnapshot.forEach((doc) => {
  // Counter
  i += 1;
  snaps[i-1] = [i, doc.data()['name'], doc.data()['score']];
});
let tab = new DataTable('#example', {
    data: snaps,
    columns: [
            { title: '#' },
            { title: 'Username' },
            { title: 'Score' },
        ],
});
