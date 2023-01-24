const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client('504889361390-gsl7d4kqiauvhmkq9p35614fq0821it9.apps.googleusercontent.com')

app.use(bodyParser.json())
app.use(cors());

app.post('/api/google-login', async (request, response) => {
    const ticket = await client.verifyIdToken({
        idToken: request.body.token
    });

    response.status(200).json(ticket.getPayload())
})

app.listen(4001, () => {
    console.log(`Server is ready at http://localhost:4001`);
})
