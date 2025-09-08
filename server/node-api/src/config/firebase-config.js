import admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import service from "../../firebase-service.json" with { type: "json" };
import dotenv from "dotenv"

dotenv.config({quiet : true});

const firebaseConfig = {
  apiKey: process.env.FIREBASE_WEB_API_KEY,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(service),
  });
}

const clientApp = initializeApp(firebaseConfig);
const auth = admin.auth();
const db = admin.firestore();

export { db, auth};
