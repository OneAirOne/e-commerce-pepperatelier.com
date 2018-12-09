const nodemailer = require('nodemailer');

const {
  ACCOUNT,
  ACCOUNT_PSW,
  MAIL_SERVICE,
} = require('../bootstrap/env');

exports.send_order = async (req, res, next) => {
  try {
    const transporter = nodemailer.createTransport({
      service: `${MAIL_SERVICE}`,
      auth: {
        user: `${ACCOUNT}`,
        pass: `${ACCOUNT_PSW}`,
      }
    })
    const snowboards = [];
    req.body.products.forEach(element => {
      snowboards.push(` ${element.name}`);
    });
    
    // mail to the client
    let mailOptions = {
      from: `${ACCOUNT}`,
      to: `${req.body.email}`,
      subject: `Précommande de snowboard`,
      html: `
      Bonjour,
      <br /><br />
      vous venez de nous envoyer une précommande pour les produits suivants : 
      <br /><br />
      ${snowboards}
      <br /><br />
      Pepper va prendre contact avec vous dans les meilleurs délais pour finaliser votre commande.
      <br /><br />
      A bientôt,
      <br /><br />
      L'équipe Pepper,
      <br /><br />
      ___________________
      <br /> 
      <strong> Pepper Atelier </strong>
      <br />
      07 69 51 29 51
      <br />
      www.pepperatelier.com
      `,
    }
    transporter.sendMail(mailOptions, function (err, res) {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        console.log('here is the res: ', res)
      }
    })
    // mail to peeper
    mailOptions = {
      from: `${ACCOUNT}`,
      to: `${ACCOUNT}`,
      subject: `Précommande de snowboard`,
      html: `
      Yo Bigoune,
      <br /><br />
      Voici une précommande d'un client pour les produits suivants :
      <br /><br />
      ${snowboards}
      <br /><br />
      Total ${req.body.total} €
      <br /><br />
      <strong>Coordonées du client :</strong>
      <br />
      Nom : ${req.body.lastName}
      <br />
      Prénom: ${req.body.firstName}
      <br />
      Email: ${req.body.email}
      <br />
      <br />
      <img src="http://img110.xooimage.com/files/a/0/4/17991828_18837907...582582_n-52b1a30.jpg"></img>
      <br />
      A bientôt,
      <br /><br />
      L'équipe Pepper,
      <br /><br />
      ___________________
      <br /> 
      <strong> Pepper Atelier </strong>
      <br />
      07 69 51 29 51
      <br />
      www.pepperatelier.com
      `,
    }
    transporter.sendMail(mailOptions, function (err, res) {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        console.log('here is the res: ', res)
      }
    })
    res.status(200).send('ok');
  } catch (err) {
    console.log('error: ', err);
    res.status(500).json({
      error: err,
    });
  }
}