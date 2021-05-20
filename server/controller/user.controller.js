const User = require("../../database/models/user.model");

const create = async (profile) => {
  try {
    let user = User.build({
      googleID: profile.id,
      username: profile.displayName,
    });

    await user.save();

    return user;
  } catch (err) {
    console.log(err);
  }
};

const find = async (profile) => {
  try {
    let googleID = profile.id;

    let user = await User.findOne({
      where: {
        googleID: googleID,
      },
    });

    return user;
  } catch (err) {
    console.log(err);
  }
};

const remove = async () => {};

module.exports = { create, find, remove };
