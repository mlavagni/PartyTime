const User = require("../models/user2");

module.exports = {
  listEvents,
  createEvent,
  deleteEvent
};

async function listEvents(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    return res.status(201).json(user.events);
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function createEvent(req, res) {
  try {
    const user = await User.findOne({ email: req.body.userEmail });

    user.events.push(req.body.event);
    await user.save();
    return res.status(201).json(user.events[user.events.length - 1]);
  } catch (err) {
    // Error
    res.status(400).json(err);
  }
}

async function deleteEvent(req, res) {
  try {
    const user = await User.findOne({ email: req.body.userEmail });
    await user.events.id(req.params.id).remove();
    await user.save();
    return res.status(201).json(user.events);
  } catch (err) {
    // Error
    res.status(400).json(err);
  }
}
