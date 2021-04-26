const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    job: {
        type: String
    },
    address: {
        type: String
    },
    age: {
        type: Number
    },
    phone: {
        type: Number
    },
    Contacts: {
        address: {
            type: String
        },
        city: {
            type: String
        },
        country: {
            type: String
        }
    },
    SocialMedia: {
        facebook: {
            type: String
        },
        email: {
            type: String
        },
        Twitter: {
            type: String
        },
        instgram: {
            type: String
        },
        linkedin: {
            type: String
        }
    },
    description: {
        type: String
    }
});
// ProfileSchema.index({ user: 1 }, { unique: true });

module.exports = ProfileSchema;
