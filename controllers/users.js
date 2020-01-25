const User = require("../models/user2");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  // index,
  login,
  signup
  // show,
  // update: updateUser
};

// async function updateUser(req, res, next) {
//   try {
//     const user = await User.findById(req.user).exec(function(err, user) {
//       user.name = req.body.name;
//       user.phone = req.body.phone;
//       user.email = req.body.email;
//     await user.save(function(err) {
//       res.status(201).json("Save");
//       });
//     });
//   } catch (err) {
//     // Probably a duplicate email
//     res.status(400).json(err);
//   }
// }

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        // console, login("entro al match");
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

// async function index(req, res) {
//   try {
//     const userIndex = await User.find({});
//     res.status(201).json(userIndex);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

/*--- helper functions ---*/

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}
