"use client";

import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider, signOut} from 'firebase/auth';
import { FirebaseAppContext } from "./FirebaseAppContext";
import LoginScreen from "../_components/LoginScreen";
import SignOutLink from "../_components/SignOutLink";

export const FirebaseAuthUserContext = createContext<string|null>(null);

export function FirebaseAuthUserContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const firebaseApp = useContext(FirebaseAppContext);
  const [userId, setUserId] = useState<string|null>(null)
  const [googleProvider] = useState<GoogleAuthProvider>(new GoogleAuthProvider());
  const [twitterProvider] = useState<TwitterAuthProvider>(new TwitterAuthProvider());
  const [auth] = useState<Auth>(getAuth(firebaseApp));

  useEffect(() => {
    if (!userId) {
      if (sessionStorage.getItem("collectionProtocolUserId")) {
        setUserId(sessionStorage.getItem("collectionProtocolUserId"));
      }
    } else {
      sessionStorage.setItem("collectionProtocolUserId", userId);
    }
  }, [userId, setUserId])

  const googleLoginViaPopup = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUserId(result.user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error(errorCode, errorMessage, credential);
      });
  }

  const twitterLoginViaPopup = () => {
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        setUserId(result.user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error(errorCode, errorMessage, credential);
      });
  }

  const logOut = () => {
    signOut(auth).then(() => {
      sessionStorage.removeItem("collectionProtocolUserId");
      location.reload();
    }).catch((error) => {
      console.error(error);
    });
  }

  return <FirebaseAuthUserContext.Provider value={userId}>
    {!userId && <LoginScreen onGoogleButtonClick={googleLoginViaPopup} onTwitterButtonClick={twitterLoginViaPopup} />}
    {userId && <>
      {children}
      <SignOutLink onSignOut={logOut} />
    </>}
  </FirebaseAuthUserContext.Provider>;
}
