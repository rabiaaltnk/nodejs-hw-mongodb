const express = require('express');
const {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} = require('../controllers/contacts');
const { authenticate } = require('../middlewares/authenticate');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const router = express.Router();


router.use(authenticate);


router.get('/', getAllContactsController);

router.get('/:contactId', getContactByIdController);

router.post('/', upload.single('photo'), createContactController);

router.patch('/:contactId', upload.single('photo'), patchContactController);


router.delete('/:contactId', deleteContactController);

module.exports = router;