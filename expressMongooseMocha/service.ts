import User from './model';

export default {
  create(name) {
    console.log('service.create: ', arguments);
    let user = new User({
      name,
    });
    return user.save().then((_user) => {
      return Promise.resolve(_user);
    }, (err) => {
      return Promise.reject(err);
    });
  }
}