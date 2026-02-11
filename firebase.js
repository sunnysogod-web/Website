// ===== Import Firebase SDK =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { 
  getDatabase, 
  ref, 
  set, 
  push, 
  onValue 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// ===== Firebase Config =====
const firebaseConfig = {
  apiKey: "AIzaSyCm9QsD6NwRF0zusMzgESEyA43hjEyHRhw",
  authDomain: "sw-website-68.firebaseapp.com",
  databaseURL: "https://sw-website-68-default-rtdb.firebaseio.com",
  projectId: "sw-website-68",
  storageBucket: "sw-website-68.firebasestorage.app",
  messagingSenderId: ". ",   // ⚠️ แก้ให้ถูกต้อง
  appId: "1:. :web:28d2f983c552a118e9397c",  // ⚠️ แก้ให้ถูกต้อง
  measurementId: "G-ESPPG76N3H"
};

// ===== Initialize Firebase =====
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

console.log("🔥 Firebase Connected Successfully!");

// ===== ตัวอย่างฟังก์ชันใช้งาน =====

// 1️⃣ เขียนข้อมูลแบบกำหนด path
export function writeData() {
  set(ref(database, "test/message"), {
    text: "Hello from Firebase!",
    time: new Date().toLocaleString()
  });
  alert("Data written successfully!");
}

// 2️⃣ เพิ่มข้อมูลแบบ push (เหมาะกับ list)
export function addItem(name) {
  push(ref(database, "users"), {
    name: name,
    createdAt: new Date().toLocaleString()
  });
  alert("User added!");
}

// 3️⃣ อ่านข้อมูล realtime
export function readData() {
  const dataRef = ref(database, "test/message");
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    console.log("📥 Data from Firebase:", data);
  });
}
