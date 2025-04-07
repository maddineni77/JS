import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import{getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,GoogleAuthProvider,
    signInWithPopup} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
    import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import{getFirestore, setDoc,doc,} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyB_3vuER6LtXkgsGQzzTgueNWUXh_D6Wrc",
    authDomain: "recipe-7f5d0.firebaseapp.com",
    projectId: "recipe-7f5d0",
    storageBucket: "recipe-7f5d0.appspot.com",
    messagingSenderId: "530520691761",
    appId: "1:530520691761:web:9aea896ee295f871993110"
  };
   const app = initializeApp(firebaseConfig);
    const auth=getAuth(app)
    const db=getFirestore(app)
    // Firebase initialization code (auth, db, etc.) goes here

// Toast utility function
function showToast(message, isError = false) {
  const toastElement = document.getElementById("toastMessage");
  const toastContent = document.getElementById("toastContent");

  toastContent.textContent = message;

  // Change toast color based on error or success
  toastElement.classList.remove("bg-success", "bg-danger");
  toastElement.classList.add(isError ? "bg-danger" : "bg-success");

  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}

document.getElementById("openSignIn").addEventListener("click", function () {
    var signInModal = new bootstrap.Modal(document.getElementById("signInModal"));
    signInModal.show();
  });

  document.getElementById("openSignUp").addEventListener("click", function () {
    var signUpModal = new bootstrap.Modal(document.getElementById("signUpModal"));
    signUpModal.show();
  });
  document.querySelector(".search-input").addEventListener("click", function () {
    var signUpModal = new bootstrap.Modal(document.getElementById("signUpModal"));
    signUpModal.show();
});
// SIGN UP
document.getElementById("signUpForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const password = this.querySelector('input[type="password"]').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user info to Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      createdAt: new Date()
    });

    showToast("Sign Up Successful!");
    setTimeout(() => {
      bootstrap.Modal.getInstance(document.getElementById("signUpModal")).hide();
    }, 500); // waits half a second before hiding modal
    
    this.reset();
    bootstrap.Modal.getInstance(document.getElementById("signUpModal")).hide();
    this.reset();

  } catch (error) {
    showToast(error.message, true);
  }
});
// SIGN IN
document.getElementById("signInForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value.trim();
  const password = this.querySelector('input[type="password"]').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;

    // Get full name from Firestore
    const { getDoc } = await import("https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js");
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.exists() ? userDoc.data() : null;
    const displayName = userData?.name || user.email;

    showWelcomeMessage(displayName);

    showToast("Sign In Successful!");
    setTimeout(() => {
      bootstrap.Modal.getInstance(document.getElementById("signInModal")).hide();
    }, 500);
    
    this.reset();
    bootstrap.Modal.getInstance(document.getElementById("signInModal")).hide();
    this.reset();

  } catch (error) {
    showToast(error.message, true);
  }
});

document.getElementById("forgotPasswordLink").addEventListener("click", async () => {
  const email = document.querySelector("#signInForm input[type='email']").value.trim();
  
  if (!email) {
    showToast("Please enter your email address to reset your password.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    showToast("Password reset email sent! Check your inbox.");
  } catch (error) {
    showToast("Error: " + error.message);
  }
});
const provider = new GoogleAuthProvider();

document.getElementById("googleSignInBtn").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Optional: Store user info in Firestore if new user
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      provider: "google",
      createdAt: new Date()
    }, { merge: true });

    showWelcomeMessage(user.displayName);
    bootstrap.Modal.getInstance(document.getElementById("signInModal")).hide();
  } catch (error) {
    showToast("Google Sign-In Failed: " + error.message);
  }
});


onAuthStateChanged(auth, async (user) => {
  const signInBtn = document.getElementById("openSignIn");
  const signUpBtn = document.getElementById("openSignUp");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    signInBtn.style.display = "none";
    signUpBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";

    // Fetch username from Firestore
    const { getDoc } = await import("https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js");
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.exists() ? userDoc.data() : null;
    const displayName = userData?.name || user.displayName || user.email;

    showWelcomeMessage(displayName);
  } else {
    signInBtn.style.display = "inline-block";
    signUpBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    document.getElementById("welcomeMessage").style.display = "none";
  }
});

function showWelcomeMessage(name) {
  const welcomeEl = document.getElementById("welcomeMessage");
  document.getElementById("usernamePlaceholder").textContent = name;
  welcomeEl.style.display = "block";

  // Hide after 5 seconds
  setTimeout(() => {
    welcomeEl.style.display = "none";
  }, 5000);
}

