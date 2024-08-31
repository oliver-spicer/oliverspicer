const { sendEmail } = require('../utils/sendEmail')

const sendContactFormEmail = async (req, res) => {
  const { name, email, message } = req.body

  if(!name || !email || !message) {
    res.status(400).json({ error : "Bad Request" });  
  }

  let newMessage = "Email: " + email + "<br />" + message

  sendEmail(name, newMessage);


  res.status(200).json({ todo : "todo" });
}

module.exports = {
  sendContactFormEmail
}