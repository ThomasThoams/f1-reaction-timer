const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { submitReactionTime, getReactionTimes } = require('../controllers/timerController');

router.post('/submit-reaction-time', auth, submitReactionTime);
router.get('/get-reaction-times/:userId', auth, getReactionTimes);

module.exports = router;
