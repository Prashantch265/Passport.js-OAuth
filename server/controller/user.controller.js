const User = require("../../database/models/user.model");

const create = async (profile) => {
  try {
    let user = User.build({
      facebookID: profile.id,
      username: profile.displayName,
      thumbnail: profile.photos[0],
      email: profile.email
    });

    await user.save();

    return user;
  } catch (err) {
    console.log(err);
  }
};

const find = async (profile) => {
  try {
    let facebookID = profile.id;

    let user = await User.findOne({
      where: {
        facebookID: facebookID,
      },
    });

    return user;
  } catch (err) {
    console.log(err);
  }
};

const remove = async () => {};

module.exports = { create, find, remove };