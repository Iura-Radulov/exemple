
const API_KEY = "AIzaSyDcQX36y9qDVvGT9ex-Dyg3NuMiItVzDWw"

export default function authWithEmailPassword(email, password) {
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true,
        }),
        headers: {
                'Content-Type': 'applicatiom/json'
            }
        
    })
        .then(response => response.json())
        .then(data => data.idToken)
        .catch(error => console.log(error))
}






// console.log(app);
// console.log(getFirestore);
// getAuth()
//   .getUserByEmail(email)
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//   })
//   .catch((error) => {
//     console.log('Error fetching user data:', error);
//   });




// handRegister.js

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function handleRegister(email, password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);              
                email: user.email;
                id: user.uid;
                token: user.accessToken;               
            })
            .catch(console.error)
}
    
// handleRegister(email, password)




// handleLogin


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function handleLogin (email, password) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {                
                email: user.email;
                id: user.uid;
                token: user.accessToken;              
            })
           .catch(() => alert('Invalid user!'))    
}
    
// handleLogin

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import refs from "./refs";
import { loginEmailPassword } from './firebase';
import {resetForm, hideFormLoginRegister, showFormLoginRegister} from './handleRegister';
// refs.registerFormSignIn.addEventListener('submit', handleLogin);



 function handleLogin() {
   
   loginEmailPassword();
   // if (!error) {
      resetForm();
      hideFormLoginRegister();
   // }
   // else {
   //    showLoginError(error)
   //    }
        
   
   
}
    
function hideLoginError() {
   refs.divLoginError.style.display = 'none';
   refs.lblLoginErrorMessage.innerHTML = '';
};

export function showLoginError (error) {
   refs.divLoginError.style.display = 'block';
   console.log(error.message);
   if (error.code == 'auth/wrong-password') {
      refs.lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`;
   } else {
      refs.lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;
   }
};

function showFormLogin() {
   refs.signInContainer.style.display = 'flex';    
}


export function hideFormRegister() {
    refs.signUpContainer.style.display = 'none';   
}

function onBtnSignIn() {
    showFormLoginRegister();
    hideFormRegister();
    showFormLogin();
}

// onBtnSignIn()
refs.signInBtn.addEventListener('click', onBtnSignIn);
refs.signInLogin.addEventListener('click', onBtnSignIn);



//handeregidter 

import refs from "./refs";
// import Firebase from './firebase'
import {hideFormRegister} from './handleLogin'
// refs.registerFormSignUp.addEventListener('submit', handleRegister);



import { createAccount } from "./firebase";

function handleRegister() {
   createAccount();
    resetForm();
    hideFormLoginRegister()
}
    
export function resetForm() {
   refs.txtEmailLogin.value = '';
   refs.txtPasswordLogin.value = '';
   refs.txtEmailRegister.value = '';
   refs.txtPasswordRegister.value = '';
};
export function showFormLoginRegister() {
   refs.formLogin.style.display = 'flex';
   window.addEventListener('keydown', hideFormLoginRegisterByKey);
};
export function hideFormLoginRegisterByKey(e) {
   if (e.key === 'Escape') {
      hideFormLoginRegister();
      hideFormLogin();
      hideFormRegister();
      window.removeEventListener('keydown', hideFormLoginRegisterByKey);
   }
};
export function hideFormLoginRegister() {
   refs.formLogin.style.display = 'none';
};


function hideFormLogin() {
    refs.signInContainer.style.display = 'none';
   // refs.signInContainer.classList.add('is-hidden');
}


function showFormRegister() {
   refs.signUpContainer.style.display = 'flex';
   // refs.signUpContainer.classList.remove('is-hidden');
}

// showFormLoginRegister()
// hideFormLoginRegister()

function onBtnSignUp() {
    showFormLoginRegister();
    hideFormLogin();
    showFormRegister();
}

refs.signUpBtn.addEventListener('click', onBtnSignUp);
