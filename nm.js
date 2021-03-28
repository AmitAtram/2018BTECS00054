var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'ethereal',
  auth: {
    user: 'carter.predovic55@ethereal.email',
    pass: 'KvckqmhDkSDxvbab5S'
  }
});

var mailOptions = {
  from: 'carter.predovic55@ethereal.email',
  to: 'amitatramx7@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy! hello  boi'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
