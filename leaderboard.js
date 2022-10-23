import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
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
  element.appendChild(text);
  var sep = document.createElement('hr');
  element.appendChild(sep);
}

// Load leaderboard
const db = getFirestore(app);
const q = query(collection(db, "records"), orderBy("score", "desc"), limit(20));
const querySnapshot = await getDocs(q);

// Table
var table = document.createElement('table');
var tableBody = document.createElement('tbody');
var row = document.createElement('tr');
var th_place = document.createElement('th');
th_place.appendChild(document.createTextNode("#"));
row.appendChild(th_place);
var th_name = document.createElement('th');
th_name.appendChild(document.createTextNode("Username"));
row.appendChild(th_name);
var th_score = document.createElement('th');
th_score.appendChild(document.createTextNode("Score"));
row.appendChild(th_score);
tableBody.appendChild(row);

var i = 0;
querySnapshot.forEach((doc) => {
  // Counter
  i += 1;

  var row = document.createElement('tr');
  // PLACE
  var place = document.createElement('td');
  place.appendChild(document.createTextNode(i));
  row.appendChild(place);

  // NAME
  var name = document.createElement('td');
  name.appendChild(document.createTextNode(doc.data()['name']));
  row.appendChild(name);

  // SCORE
  var score = document.createElement('td');
  score.appendChild(document.createTextNode(doc.data()['score']));
  row.appendChild(score);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
