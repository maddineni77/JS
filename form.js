import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import{getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import{getFirestore, setDoc,doc,} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDH6vjBNwRqkbJcm4Wv0g0vTT_fMxpZflY",
    authDomain: "todo-45c8e.firebaseapp.com",
    projectId: "todo-45c8e",
    storageBucket: "todo-45c8e.appspot.com",
    messagingSenderId: "522990278449",
    appId: "1:522990278449:web:bd7877a5c354b6f52b8210"
  };
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app)
  const db=getFirestore(app)

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".toggle").addEventListener("click", toggleForm);
    document.getElementById("auth-form").addEventListener("submit", handleAuth);


});
window.toggleForm=toggleForm
window.forgotPassword = forgotPassword; 
function toggleForm() {
    let formTitle = document.getElementById("form-title");
    let formButton = document.querySelector("#auth-form button");
    let nameField = document.getElementById("name-field");
    let toggleText = document.querySelector(".toggle");
    
    if (formTitle.innerText === "Login") {
        formTitle.innerText = "Register";
        formButton.innerText = "Register";
        nameField.style.display = "block";
        toggleText.innerText = "Already have an account? Login";
    } else {
        formTitle.innerText = "Login";
        formButton.innerText = "Login";
        nameField.style.display = "none";
        toggleText.innerText = "Don't have an account? Register";
    }
}async function forgotPassword() {
    let email = document.getElementById("email").value;
    let errorMessage = document.getElementById("error-message");

    if (!email) {
        errorMessage.innerText = "Please enter your email to reset your password.";
        return;
    }

    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent! Check your inbox.");
    } catch (error) {
        errorMessage.innerText = error.message;
    }
}


async function handleAuth(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let fullName = document.getElementById("full-name").value;
    let isRegister = document.getElementById("form-title").innerText === "Register";

    try {
        if (isRegister) {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;

            const userRef = doc(db, "users", user.uid); 
            await setDoc(userRef, {
                fullname: fullName,
                email: email
            });

            alert("Registration successful!");
        } else {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
        }
    } catch (error) {
        document.getElementById("error-message").innerText = error.message;  
    }
}