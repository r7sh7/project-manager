const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const createNotification = (notif => {
    return admin.firestore().collection('notifications')
                .add(notif).then(doc => console.log('notif added', doc));
})


exports.createdProject = functions.firestore.document('projects/{projectId}')
                .onCreate(doc => {
                    const project = doc.data();
                    const notification = {
                        content: 'New Project Added',
                        user: `${project.authorFirstName} ${project.authorLastName}`,
                        time: admin.firestore.FieldValue.serverTimestamp()
                    }
                
                return createNotification(notification);
                });

exports.userSignup = functions.auth.user()
            .onCreate(user => {
                return admin.firestore().collection('users')
                    .doc(user.uid).get().then((doc) => {
                        const newUser = doc.data();
                        const notification = {
                            content: 'Joined the Party',
                            user: `${newUser.firstName} ${newUser.lastName}`,
                            time: admin.firestore.FieldValue.serverTimestamp()
                        }

                        return createNotification(notification);
                    })
                
            })