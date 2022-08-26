export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_POST,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

/*
Serviços de envio de email
Amazon SES
Mailgun
Sparkpost
Mandril (Mailchimp)
Mailtrap.io ( somente para desenvolvimento )
*/
