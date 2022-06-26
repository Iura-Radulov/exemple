import { initializeApp } from "firebase/app";
import {
   getAuth,
   onAuthStateChanged,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   connectAuthEmulator,
   AuthErrorCodes,
   signOut,
} from 'firebase/auth';
import refs from "./refs";
import { showLoginError, showFormLogin } from "./handleLogin";
import { hideFormLoginRegister, resetForm, showFormLoginRegister } from "./handleRegister";
import authWithEmailPassword from "./authWithEmailPassword";
import handleLogin from "./handleLogin";
import handleRegister from "./handleRegister";


const URL = "https://filmoteka-goit-6e05f-default-rtdb.firebaseio.com/users.json";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcQX36y9qDVvGT9ex-Dyg3NuMiItVzDWw",
  authDomain: "filmoteka-goit-6e05f.firebaseapp.com",
  databaseURL: "https://filmoteka-goit-6e05f-default-rtdb.firebaseio.com",
  projectId: "filmoteka-goit-6e05f",
  storageBucket: "filmoteka-goit-6e05f.appspot.com",
  messagingSenderId: "281727023613",
  appId: "1:281727023613:web:ae072f932b4bc661d88194"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

refs.btnLogout.addEventListener('click', logout);

// Create new account using email/password

export async function createAccount(displayName, email, password) {  

   try {
       await createUserWithEmailAndPassword(auth, email, password);
       ({user}) => {
                console.log(user);              
                email: user.email;
                id: user.uid;
                token: user.accessToken;               
       }
       await updateProfile(auth.currentUser, {
         displayName,
      });
  
   } catch (error) {
      console.log(`There was an error: ${error}`);
     
   }
};

// Login using email/password

export async function loginEmailPassword (email, password) {
    
   try {
       const userCredintial = await signInWithEmailAndPassword(auth, email, password);
       
       ({ user }) => {
           email: user.email;
           id: user.uid;
           token: user.accessToken;
       };
       console.log(userCredintial.user);
       resetForm();
      hideFormLoginRegister();
      
   } catch (error) {
      console.log(error);
       showLoginError(error);
       resetForm();
   }
};



// Log out
async function logout() {
   try {
       await signOut(auth);
    //    monitorAuthState()
       showFormLoginRegister();
      showFormLogin()
       console.log('loged out');
    //   openHomePage();
   } catch (error) {}
};

// Monitor auth state
export async function monitorAuthState () {
   onAuthStateChanged(auth, user => {
      if (user) {
        //   console.log(user);
          refs.boxLoginLogout.style.display = 'flex';
         refs.loginUser.innerHTML = `${user.email} `;
         refs.btnLogout.removeEventListener('click', showFormLoginRegister);
         refs.btnLogout.addEventListener('click', logout);
          refs.btnLogout.innerHTML = 'Log out';
          refs.loginContainer.classList.add('is-hidden');
         
      } else {
        //  showFormLoginRegister();
          refs.loginContainer.classList.remove('is-hidden');
          refs.boxLoginLogout.style.display = 'none';
        //  refs.loginUser.innerHTML = `You're not logged in.`;
         refs.btnLogout.removeEventListener('click', logout);
         refs.btnLogout.addEventListener('click', showFormLoginRegister);
        //  refs.btnLogout.innerHTML = 'Log in';
      }
   });
};

monitorAuthState()

refs.registerFormSignUp.addEventListener('submit', e => {
   e.preventDefault();
   const displayName = e.target.name.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
   createAccount(displayName, email, password);
});


refs.registerFormSignIn.addEventListener('submit', e => {
   e.preventDefault();
   const email = e.target.email.value;
   const password = e.target.password.value;
   loginEmailPassword(email, password);
});








