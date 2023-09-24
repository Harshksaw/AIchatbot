const userModel = require("../model/userSchema");
const emailValidator = require("email-validator");
const bcrypt  = require('bcrypt')


const signup = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(name, email, password, confirmPassword);

  if (!name || !email || !password || !confirmPassword) {
    res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }
  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "Please Provide valid email id",
    });
  }
  if (password != confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Password and confirm password doesnot match",
    });
  }
  try {
    const userInfo = userModel(req.body);
    const result = await userInfo.save();

    return res.status(200).json({
      success: true,
      data: { result },
    });
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Account already exists with provided email id",
      });
    }
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};
const signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Every field is mandatory ",
    });
  }
  try {
    const user = await userModel
      .findOne({
        email,
      })
      .select("+password");

    if (!user || await bcrypt.compare(user.password , password)) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = user.jwtToken();
    user.password = undefined;

    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true, //cant be access form js
    };
    res.cookie("token", token, cookieOption);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};
const getUser = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    return res.status(400).json({
      status: false,
      message: e.message,
    });
  }
};
const logout = (req, res) => {
  try {
    const cookieOption = {
      expires: new Date(),
      httpOnly: true,
    };

    res.cookie("token", null, cookieOption);
    return res.status(200).json({
      success: true,
      message: "logged OUT Successfully",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = {
  signup,
  signin,
  getUser,
  logout,
};
