import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

const app = initializeApp(FirebaseCredentials);

const auth = getAuth(app);

export {app, auth};
