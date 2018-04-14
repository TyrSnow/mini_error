const User = require('./model');

module.exports = {
  create(name) {
    console.log('service.create: ', arguments);
    let user = new User({
      name,
    });
    return user.save();
  }
}