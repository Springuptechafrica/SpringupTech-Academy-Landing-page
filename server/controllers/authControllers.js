
const user = require('../models/user');
const test = (req, res) => {
    res.json("test is working");
}
const registeruser = async (req, res) => {
  try {
    const { username, password, email, firstname, lastname } = req.body;
    //check if name was provided
    if (!username) {
      return res.status(400).json({ msg: 'Please provide a username' });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({ msg: 'Please provide a password' });
    }
    if (!email) {
      return res.status(400).json({ msg: 'Please provide a email' });
    }
    if (!firstname) {
      return res.status(400).json({ msg: 'Please provide a firstname' });
    }
    if (!lastname) {

        return res.status(400).json({ msg: 'Please provide a lastname' });
    }
    const exist = await user.findOne({email});
    if(exist) return res.status(400).json({msg: 'Email already exist'});
    const usernameExist = await user.findOne({username});
    if(usernameExist) return res.status(400).json({msg: 'Username already exist'});
    const newUser = await user.create({ username, password, email, firstname, lastname });
    return res.json(newUser);
  } catch (error) {
console.log(error);
  }
};
module.exports = {
    test,
    registeruser
}