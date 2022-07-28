//register
//method post
// API : /register
const users = require("../models/Candidat");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const found = await users.findOne({ email });
    if (found) {
      res.status(400).send({ msg: "user already exist" });
    }
    const newUser = new users(req.body);
    //bycrypt : cryptage password
    const salt = 10;
    const hashPassword = bcrypt.hashSync(password, salt);
    newUser.password = hashPassword;
    //jwt
    const payload = { id: newUser._id };
    const token = jwt.sign(payload, process.env.secretOrKey);
    await newUser.save();
    res.status(200).send({ msg: "registred with success", newUser, token });
  } catch (error) {
    res.status(500).send({ msg: "could not register" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await users.findOne({ email });
    if (!foundUser) {
      return res.status(400).send({
        errors: [
            {
              msg: "Account does not exist! Please register first",
              location: "email",
              param: "email",
              value: email,
            },
          ]
      });
    }
    const match = await bcrypt.compareSync(password, foundUser.password);
    if (!match) {
      return res
        .status(400)
        .send({
            errors: [
                {
                  msg: "bad credentials",
                  location: "password",
                  param: "password",
                  value: password,
                },
              ]
        });
    }
    //jwt
    const payload = { id: foundUser._id };
    const token = jwt.sign(payload, process.env.secretOrKey);

    res.status(200).send({ msg: "login with success", foundUser, token });
  } catch (error) {
    res.status(500).send({ msg: "could not login" });
  }
};
