import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model('User', schema);
export default User;
