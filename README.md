# firebase_verify_token
A Google Cloud Function to verify the token from firebase auth.

# Install

This project uses [serverless](http://serverless.com) to up load a Google Cloud Function that will verify the token supplied by Firebase Auth

`serverless deploy --project {YOUR_PROJECT}`

# Invoke

In code call the function... (Replace YOUR_PROJECT) with the correct name

```js
const FIREBASE_VERIFY_URL = 'https://us-central1-{YOUR_PROJECT}.cloudfunctions.net/verifyFirebaseToken';

async function verifyToken(fireToken) {
  const token = fireToken.replace('Bearer ', '')

  const result = await fetch(`${FIREBASE_VERIFY_URL}?idToken=${token}`);

  const data = await result.json();

  if (data.error) {
      throw Error("Not Authorized");
    }
    else {
      return data.uid;  // The firebase auth user id.
    }
}
```

# License

MIT