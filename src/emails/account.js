const sgMail = require('@sendgrid/mail')
const apiKey = require('./apiKey')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'victor.du.77@hotmail.fr',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'victor.du.77@hotmail.fr',
        subject: 'Bye 👋',
        text: `Tell us ${name}, why did you unsubscribe?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}