const functions = require('firebase-functions')
const admin = require('firebase-admin')

// This is hosted using Firebase Functions to gain easier access without meddling with service key

admin.initializeApp(functions.config().firebase)

exports.verifyFirebaseToken = functions.https.onRequest((req, res) => {
  const { idToken } = req.query

  if (!idToken) {
    res.json({ error: 'Missing idToken in query' })
    return
  }
  admin.auth().verifyIdToken(idToken)
    .then(authUser => res.json(authUser))
    .catch(() => res.json({ error: 'Could not verify id token with Firebase' }))
})

exports.event = (event, callback) => {
  callback();
};