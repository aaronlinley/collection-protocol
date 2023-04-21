"use client";

import { ReactNode, createContext } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

const firebaseApp = initializeApp(FirebaseCredentials);

export const FirebaseAppContext = createContext<FirebaseApp>(firebaseApp);

export function FirebaseAppContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <FirebaseAppContext.Provider value={firebaseApp}>{children}</FirebaseAppContext.Provider>;
}
