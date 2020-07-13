import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
//const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

admin.initializeApp();



exports.recursiveDelete = functions
  .runWith({
    timeoutSeconds: 540,
    memory: '2GB'
  })
  .https.onCall((data, context) => {
    // Only allow admin users to execute this function.
    // if (!(context.auth && context.auth.token && context.auth.token.admin)) {
    //   throw new functions.https.HttpsError(
    //     'permission-denied',
    //     'Must be an administrative user to initiate delete.'
    //   );
    //}

    const path = data.path;
    console.log(
      `User has requested to delete path ${path}`
    );


    // Run a recursive delete on the given document or collection path.
    // The 'token' must be set in the functions config, and can be generated
    // at the command line by running 'firebase login:ci'.
    const firebaseTools = require("firebase-tools");

    return firebaseTools.firestore
      .delete(path, {
        project: process.env.GCLOUD_PROJECT,
        recursive: true,
        yes: true,
        //token: functions.config().fb.token
      })
      .then(() => {
        return {
          path: path,
        };
      });
  });


exports.deleteUser = functions.https.onCall((data, context) => {


  admin.auth().getUserByEmail(data.email)
  .then(function(userRecord : any) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully fetched user data:', userRecord.toJSON());
    admin.auth().deleteUser(userRecord.uid)
    .then(function () {
      console.log('Successfully deleted user');
    })
    .catch(function (error : any) {
      console.log('Error deleting user:', error);
    });

  })
  .catch(function(error : any) {
   console.log('Error fetching user data:', error);
  });
  
});

