const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    title: 'FluxoHub API',
    description: 'Documentação das rotas da API do FluxoHub.',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor local',
    },
  ],
};

const outputFile = './swagger/swagger-output.json';
const endpointsFiles = ['./routes/routes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(function() {
  if (process.argv.includes('--start')) {
    require('../app');
  }
});
