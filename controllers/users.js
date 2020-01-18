const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  index,
  // create,
  login,
  signup
  // show,
  // update: updateUser
};

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        console, login("entro al match");
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function signup(req, res) {
  const user = new User(req.body);

  try {
    await user.save();
    console.log(`User Signed up: ${user}`);
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const userIndex = await User.find({});
    res.status(201).json(userIndex);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*--- helper functions ---*/

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}
