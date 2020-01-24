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
    console.log(user.friends[user.friends.length - 1]);
    return res.status(201).json(user.friends[user.friends.length - 1]);
  } catch (err) {
    // Error
    res.status(400).json(err);
  }
}

async function deleteFriend(req, res) {
  try {
    const user = await User.findOne({ email: req.body.userEmail });
    console.log("sdds " + user);
    console.log(req.body.test);
    await user.friends.id(req.params.id).remove();
    await user.save();
    return res.status(201).json(user.friends);
  } catch (err) {
    // Error
    res.status(400).json(err);
  }
}
