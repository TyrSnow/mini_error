const UserService = require('./service');

module.exports = {
  regist(req, res) {
    let { name } = req.body;
    console.log('controller.regist: ', name);
    UserService.create(name).then((user) => {
      res.json(user);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  }
}