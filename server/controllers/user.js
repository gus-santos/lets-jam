const User = require('../models/user');

// GET all users
function get(req, res) {
    User.where(req.query)
      .fetchAll()
      .then((users) => {
        res.status(200).json(users);
      });
}

// POST new user
function post(req, res) {
    new User({
        email: req.body.email,
        postalCode: req.body.postalCode,
        type: req.body.type,
        screenName: req.body.screenName,
        about: req.body.about,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        postalCode: req.body.postalCode,
        skills: req.body.skills,
        lookingFor: req.body.lookingFor,
      })
      .save()
      .then((newUser) => {
        res.status(201).json({ newUser });
      });
}

// GET user by id
function getById(req, res) {
  User.where(req.params)
    .fetch()
    .then((user) => {
      res.status(200).json(user);
    });
}

// PUT update user by user.id
function update(req, res) {
    User.where('id', req.params.id)
      .fetch()
      .then((user) => {
        user
          .save({
            email: req.body.email ? req.body.email : user.email,
            postalCode: req.body.postalCode ? req.body.postalCode : user.postalCode,
            type: req.body.type ? req.body.type : user.type,
            screenName: req.body.screenName ? req.body.screenName : user.screenName,
            about: req.body.about ? req.body.about : user.about,
            firstName: req.body.firstName ? req.body.firstName : user.firstName,
            lastName: req.body.lastName ? req.body.lastName : user.lastName,
            skills: req.body.skills ? req.body.skills : user.skills,
            lookingFor: req.body.lookingFor ? req.body.lookingFor : user.lookingFor
          })
          .then((updatedUser) => {
            res.status(200).json({ updatedUser });
          });
      });
}

// DELETE user by user.id
function del(req, res) {
  User.where('id', req.params.id)
    .destroy()
    .then((deletedUser) => {
      res.status(200).json({ success: 'User has been deleted' });
    });
}

// export default as object with methods
module.exports = {
  get,
  post,
  getById,
  update,
  del,
};
