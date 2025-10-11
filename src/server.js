const express = require('express');
const cors = require('cors');
const pinoHttp = require('pino-http');

const {
  getAllContactsController,
  getContactByIdController,
} = require('./controllers/contacts');

function setupServer() {
  const app = express();


  app.use(cors());
  app.use(express.json());
  app.use(
    pinoHttp({
      transport: {
        target: 'pino-pretty',
      },
    })
  );

  app.get('/contacts', getAllContactsController);
  app.get('/contacts/:contactId', getContactByIdController);

 
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  return app;
}

module.exports = { setupServer };
