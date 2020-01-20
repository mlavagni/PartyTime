const express = require("express");
const router = express.Router();
const friendsCtrl = require("../../controllers/friends");

/*---------- Public Routes ----------*/
router.post("/", friendsCtrl.listFriends);
router.post("/create", friendsCtrl.createFriend);
router.post("/delete", friendsCtrl.deleteFriend);
/*---------- Protected Routes ----------*/
// router.get("/", usersCtrl.index);

module.exports = router;
