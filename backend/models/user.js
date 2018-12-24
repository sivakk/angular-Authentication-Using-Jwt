const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');


const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

});
UserSchema.pre('save', async function () {
    // if user is modified or user is new
    if (this.isModified('password') || this.isNew) {
        const salt = await bcryptjs.genSalt();
        const hash = await bcryptjs.hash(this.password, salt);
        this.password = hash;
    }
});

module.exports = mongoose.model("User", UserSchema);