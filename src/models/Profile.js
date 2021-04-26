const mongoose = require('mongoose');
const ProfileSchema = require('../Schemas/ProfileSchema');
const User = require('../Models/User');

ProfileSchema.pre('save', async function() {
    try {
        console.log(this)
        const user = await User.findByIdAndUpdate(this.user, {
            $set: { profile: this._id }
        }).select({
            email: 1,
            _id: 0
        });
        this.contacts.email = user.email;

        return this;
    } catch (e) {
        console.log(e.message);
        throw new Error('An Error has occured while saving the profile');
    }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
