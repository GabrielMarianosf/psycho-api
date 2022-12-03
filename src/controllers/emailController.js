const status = require('http-status');
const emailService = require('../services/emailService');
const ApiError = require('../utils/ApiError');

exports.sendEmail = async (req, res, next) => {
  try {
    const { file, paciente, experimento } = req.body;

    if (!file && !paciente && !experimento) throw new ApiError(status.NOT_FOUND, 'Preencha todos os campos.');

    const result = await emailService.sendEmailAPI(file, paciente, experimento);

    if (!result) throw new ApiError(status.NOT_ACCEPTABLE, 'Erro ao enviar e-mail');

    res.status(status.OK).json({
      status: status.OK,
      message: 'E-mail enviado com sucesso!',
      author: 'https://github.com/GabrielMarianosf',
    });
  } catch (error) {
    next(error);
  }
};
