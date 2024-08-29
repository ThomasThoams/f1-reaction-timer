const Timer = require('../models/Timer');

exports.submitReactionTime = async (req, res) => {
    const { time } = req.body;
    const userId = req.user.id;

    try {
        const newTimer = new Timer({ user_id: userId, time });
        await newTimer.save();
        res.json(newTimer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getReactionTimes = async (req, res) => {
    const userId = req.params.userId;

    try {
        const timers = await Timer.find({ user_id: userId }).sort({ createdAt: -1 });
        res.json(timers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
