// firebase-server.js
import admin from 'firebase-admin';

// Initialize the Firebase Admin SDK
const serviceAccount = require('path/to/serviceAccountKey.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // ...other Firebase configuration options
  });
}

const firestore = admin.firestore();

export { firestore };
