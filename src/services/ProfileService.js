const S = require('string');
const Profile = require('../Models/Profile');
const User = require('../Models/User');

class ProfileService {
    async newProfile(user, profile) {
        profile.user = user;
        console.log(profile.job);
        profile.job = S(profile.job)
            .trim()
            .capitalize().s;

        const newProfile = await Profile.findOneAndUpdate({ user }, profile, {
            new: true,
            upsert: true
        });
        await User.findByIdAndUpdate(user, {
            $set: { profile: newProfile._id }
        });
        return newProfile;
    }

    async getProfile(Id) {
        const profile = await User.findById(Id)
            .select({
                password: 0,
                email: 0,
                validationCode: 0,
                _id: 0,
                isValidated: 0,
                avatar: 0
            })
            .populate({
                path: 'profile',
                model: 'Profile',
                select: { _id: 0, __v: 0, user: 0 }
            })
            .exec();
        return profile;
    }

    async deleteProfile(Id, user) {
        const x = await Profile.findOneAndDelete({ _id: Id, user });
        return x;
    }
}

module.exports = ProfileService;
