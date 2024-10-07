const express = require('express');
const { submitApplication } = require('../Controllers/vendorapplicationcontroller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Directory for uploaded files

const router = express.Router();

// Route for submitting vendor application
router.post('/vendor-application', upload.fields([{ name: 'cnicFront' }, { name: 'cnicBack' }]), submitApplication);

module.exports = router;
