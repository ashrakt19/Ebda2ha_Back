const nodemailer = require("nodemailer");

class Mail {
  async validate(receiver, message) {
    // initialize technology used in transportation process
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Ebda2haTeam@gmail.com",
        pass: "Ebda2ha123",
      },
    });

    // initialize process
    const mailOptions = {
      from: "Ebda2haTeam@gmail.com",
      to: receiver,
      subject: "Verification Message From Ebda2ha",
      text: message,
    };

    // process error
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  }
}

module.exports = Mail;
