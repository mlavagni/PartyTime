const express = require("express");
const router = express.Router();
const eventsCtrl = require("../../controllers/events");

/*---------- Public Routes ----------*/
router.post("/", eventsCtrl.listEvents);
router.post("/create", eventsCtrl.createEvent);
router.post("/delete", eventsCtrl.deleteEvent);
/*---------- Protected Routes ----------*/
// router.get("/", usersCtrl.index);

module.exports = router;
