const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

const JWT_SECRET = 'admin@yushdon'

//ROUTE 1: Create a user using : POST '/api/auth', no login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Enter password with minimum 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there are errors return Bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check whether the user with this email exist already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Email already used" });
      }
      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt) ;
      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      // .then(user => res.json(user)).catch(err => {console.log(err)
      // res.json({error : 'Email already used', message : err.message})});

      // sending response when user created
      const Data = {
        user:{
          id : user.id
        }
      }
      const authTocken = jwt.sign(Data, JWT_SECRET);
      // console.log(authTocken);
      // res.json(user);
      res.json({authTocken});
    } catch (error) {
      // catch error
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//ROUTE 2: Authenticate a user using : POST '/api/auth/login', no login required
router.post("/login", [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password can not be blanked").exists()
  ], async (req, res) => {
     // If there are errors return Bad request and the error
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }
     
     const {email, password} = req.body;

     try {
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error : 'Email or Password did not match'});
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare){
        return res.status(400).json({error : 'Email or Password did not match'});
      }
      const Data = {
        user:{
          id : user.id
        }
      }
      const authTocken = jwt.sign(Data, JWT_SECRET);
      res.json({authTocken})

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
     
  })

  //ROUTE 3: Get Logged In User Details using : POST '/api/auth/getuser', login required
  router.post("/getuser", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select('-password')
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
})

module.exports = router;
