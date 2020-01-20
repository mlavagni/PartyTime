const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6;

const Schema = mongoose.Schema;

let friendsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
});

let eventsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    date: {
      type: Date
    }
  },
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
  address: {
    type: String
  },
  guestList: {
    type: []
  },
  status: {
    type: Boolean
  },
  accessCode: {
    type: String
  }
});

let userSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    phone: String,
    events: [eventsSchema],
    friends: [friendsSchema]
  },
  {
    timestamps: true
  }
);

userSchema.set("toJSON", {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  // password has changed! - salt and hash
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    user.password = hash;
    return next();
  });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model("User", userSchema);
