const User = require("../../database/models/user.model");

const findByUid = async (uid) => {
  try {
    let user = await User.findOne({
      where:{uid: uid}
    })

    return user;
  } catch (err) {
    return err;
  }
}
module.exports = { findByUid };
