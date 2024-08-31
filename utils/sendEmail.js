const nodemailer = require('nodemailer')
const nodemailerConfig = require('./nodemailerConfig')

const sendEmail = async(from, html) => {
  //let testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport(nodemailerConfig)

  return transporter.sendMail({
    from: '"Automatic email" <hello@oliverspicer.com>',
    to: 'hello@oliverspicer.com',
    subject: 'Website Enquiry : ' + from,
    html
  }, (err, info) => {
    if(err)
      console.log(">>> SENDMAIL : " + err);
  })
}

module.exports = {
  sendEmail
}