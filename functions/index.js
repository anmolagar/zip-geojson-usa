const functions = require('firebase-functions');
const data = require('../us-zip-code-latitude-and-longitude.json')


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});


exports.zipcode = functions.https.onRequest((req, res) => {
    const result =  data.filter(doc=>doc.fields.zip===req.query.zipcode)
    res.json(result)
});