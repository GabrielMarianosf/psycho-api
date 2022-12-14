const server = require('./server');

// server port
const port = 80;

const startServer = () => {
  server.listen(process.env.PORT || port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running in port: ${port}`);
  });
};

startServer();
