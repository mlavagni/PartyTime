const User = require("../models/user");

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
  // console.log("****req.body********");
  // console.log(req.body);
  // console.log("************");
  try {
    const user = await User.findOne({ email: req.body.userEmail });

    user.events.push(req.body.event);
    // console.log("***user*********");
    // console.log(user);
    // console.log("************");
    await user.save();
    return res.status(201).json("Data save");
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
    return res.status(201).json("Event deleted");
  } catch (err) {
    // Error
    res.status(400).json(err);
  }
}
