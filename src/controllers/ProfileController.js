const status = require('http-status-codes');
const ProfileService = require('../Services/ProfileService');

const profileService = new ProfileService();

const buildProfile = async (req, res) => {
    try {
        const { profile } = req.body;
        const result = await profileService.newProfile(req.user.id, profile);
        if (result) return res.status(status.OK).send(profile);
        return res.status(status.NOT_FOUND);
    } catch (e) {
        console.log(e.message);
        return res.status(status.INTERNAL_SERVER_ERROR).send(e.message);
    }
};
const getMyProfile = async (req, res) => {
    try {
        const profile = await profileService.getProfile(req.user.id);
        if (profile != null) return res.status(status.OK).send(profile);
        return res.status(status.NOT_FOUND);
    } catch (e) {
        console.log(e.message);
        return res.status(status.INTERNAL_SERVER_ERROR).send(e.message);
    }
};

const getUserProfile = async (req, res) => {
    try {
        const profile = await profileService.getProfile(req.params.user);
        if (profile != null) return res.status(status.OK).send(profile);
        return res.status(status.NOT_FOUND);
    } catch (e) {
        console.log(e.message);
        return res.status(status.INTERNAL_SERVER_ERROR).send();
    }
};

const deleteProfile = async (req, res) => {
    const { Id } = req.params;
    const confirmation = await profileService.deleteProfile(Id, req.user.id);
    if (confirmation) return res.status(status.OK).send();

    return res.status(status.NOT_FOUND).json({
        msg: "Couldn't find that profile"
    });
};
module.exports = {
    buildProfile,
    getMyProfile,
    getUserProfile,
    deleteProfile
};
