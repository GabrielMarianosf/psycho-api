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
    <head>
        <meta content="text/html; charset=UTF-8" http-equiv="content-type">
        <style type="text/css">
            ol {
                margin: 0;
                padding: 0
            }
    
            table td,
            table th {
                padding: 0
            }
    
            .c0 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Arial";
                font-style: normal
            }
    
            .c1 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            .c3 {
                background-color: #ffffff;
                max-width: 451.4pt;
                padding: 72pt 72pt 72pt 72pt
            }
    
            .c2 {
                height: 11pt
            }
    
            .title {
                padding-top: 0pt;
                color: #000000;
                font-size: 26pt;
                padding-bottom: 3pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            .subtitle {
                padding-top: 0pt;
                color: #666666;
                font-size: 15pt;
                padding-bottom: 16pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            li {
                color: #000000;
                font-size: 11pt;
                font-family: "Arial"
            }
    
            p {
                margin: 0;
                color: #000000;
                font-size: 11pt;
                font-family: "Arial"
            }
    
            h1 {
                padding-top: 20pt;
                color: #000000;
                font-size: 20pt;
                padding-bottom: 6pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h2 {
                padding-top: 18pt;
                color: #000000;
                font-size: 16pt;
                padding-bottom: 6pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h3 {
                padding-top: 16pt;
                color: #434343;
                font-size: 14pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h4 {
                padding-top: 14pt;
                color: #666666;
                font-size: 12pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h5 {
                padding-top: 12pt;
                color: #666666;
                font-size: 11pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h6 {
                padding-top: 12pt;
                color: #666666;
                font-size: 11pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                font-style: italic;
                orphans: 2;
                widows: 2;
                text-align: left
            }
        </style>
    </head>
    
    <body class="c3 doc-content">
        <p class="c1">
            <h1 class="c0">Experimento ${experimento}</h1>
        </p>
        <p class="c1 c2">
            <span class="c0"></span>
        </p>
        <p class="c1">
            <span class="c0">N&uacute;mero: ${paciente.numero}</span>
        </p>
        <p class="c1">
            <span class="c0">Paciente: ${paciente.name}</span>
        </p>
        <p class="c1">
            <span class="c0">Email: ${paciente.email}</span>
        </p>
        <p class="c1 c2">
            <span class="c0"></span>
        </p>
        <p class="c1">
            <span class="c0">Segue anexo planilha.</span>
        </p>
    </body>
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
