import firebase from 'firebase'
import firebaseConfig from './FirebaseConfig';


export  const initiateLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const googleSIgnInHandler= ()=> {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(res =>{
      console.log(res)
        let {displayName, email} = res.user
        const signedInUser = {
            isSignedIn : true,
            name: displayName,
            email:email,
            success : true
        }
        return signedInUser;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
          });
}
export const facebookSignInHandler = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((res) => {
      const user = res.user;
      console.log('fb user after sign in:' ,user);
      const {displayName, photoURL, email,R } = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: R,
          };
          return signedInUser;
    })
    .catch((error) => {
      console.log(error.message);
    });
  };
