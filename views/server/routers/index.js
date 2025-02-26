const express = require('express');
const router = express.Router();
const app = express();
const mainController = require('../controllers/mainController');

/**
 * App Routes
 */

router.get('/', mainController.homepage);
router.get('/about', mainController.about);
router.get('/features', mainController.features);
router.get('/faqs', mainController.faqs);

module.exports = router;