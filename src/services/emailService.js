const nodemailer = require('nodemailer');

const sendEmailAPI = async (file, paciente, experimento) => {
  const transport = nodemailer.createTransport({
    host: 'smtplw.com.br',
    port: 587,
    secure: false,
    auth: {
      user: 'easyrentiris',
      pass: 'dZQSghNW6472',
    },
  });

  const message = {
    from: 'noreplay.easyrent@gmail.com',
    to: [paciente.email],
    subject: `Psycho ${experimento.toUpperCase()} | ${paciente.name}`,
    html: `
    <html>
      <h1>Experimento ${experimento}</h1>
      <div>
        <p>N&uacute;mero: ${paciente.numero}</p>
        <p>Paciente: ${paciente.name}</p>
        <p>Email: ${paciente.email}</p>
        <br/><br/><br/>
        <p>Segue anexo planilha.</p>
      </div>
    </html>
    `,
    attachments: [
      { // encoded string as an attachment
        filename: 'excel.xlsx',
        content: file,
        encoding: 'base64',
      },
    ],
  };

  return transport.sendMail(message);
};

module.exports = { sendEmailAPI };
