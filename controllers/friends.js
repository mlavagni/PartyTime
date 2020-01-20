const User = require("../models/user");

module.exports = {
  listFriends,
  createFriend,
  deleteFriend
};

async function listFriends(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    return res.status(201).json(user.friends);
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function createFriend(req, res) {
  try {
    const user = await User.findOne({ email: req.body.userEmail });

    user.friends.push(req.body.friend);

    await user.save();
    return res.status(201).json("Data save");
  } catch (err) {
    // Error
    res.status(400).json(err);
  }
}

async function deleteFriend(req, res) {
  try {
    const user = await User.findOne({ email: req.body.userEmail });
    await user.friends.id(req.params.id).remove();
    await user.save();
    return res.status(201).json("Friend deleted");
  } catch (err) {
    // Error
    res.status(400).json(err);
  }
}
