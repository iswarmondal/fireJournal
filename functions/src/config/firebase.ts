import * as admin from "firebase-admin";
import * as env from "dotenv";
env.config();

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: process?.env?.PRIVET_KEY?.replace(/\\n/g, "\n"),
    projectId: process?.env?.PROJECT_ID,
    clientEmail: process?.env?.CLIENT_EMAIL,
  }),
  databaseURL: "https://learn-firebase-65b3b.firebaseio.com",
});

const db = admin.firestore();
export {
  admin,
  db,
};
