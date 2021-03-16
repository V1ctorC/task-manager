const sgMail = require('@sendgrid/mail')
const apiKey = require('./apiKey')

sgMail.setApiKey(apiKey)

sgMail.send({
    to: 'victor.chevalier.perso@gmail.com',
    from: 'victor.du.77@hotmail.fr',
    subject: 'Subject mail',
    text: 'Body mail'
})