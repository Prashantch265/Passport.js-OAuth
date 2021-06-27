const User = require("../../database/models/user.model");

const findByUid = async (uid) => {
  try {
    let user = await User.findOne({
      where: { uid: uid },
    });

    return user;
  } catch (err) {
    return err;
  }
};

const authenticate = (req, res, next) => {
  // console.log(req.user);
  if (!req.user) {
    
    res.redirect("/login");
  } else {
    next();
  }
};


module.exports = { findByUid, authenticate };