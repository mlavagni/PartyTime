const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// let friendSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   phone: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String
//   }
// });

// let eventSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   date: {
//     date: {
//       type: Date
//     }
//   },
//   startTime: {
//     type: String
//   },
//   endTime: {
//     type: String
//   },
//   address: {
//     type: String
//   },
//   guestList: {
//     type: []
//   },
//   status: {
//     type: Boolean
//   },
//   accessCode: {
//     type: []
//   }
// });

let userSchema = new Schema(
  {
    name: String
    // email: String,
    // phone: String,
    // events: [articleSchema],
    // friends: [wishListSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
