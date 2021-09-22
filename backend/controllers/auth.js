const User = require ("../models/user.js") ;
const { hashPassword, comparePassword } = require ("../helpers/auth.js" ) ;
const jsonwebtoken = require("jsonwebtoken") ;

exports.register = async (req, res) => {
  const { name, email, password, secret } = req.body;

  if (!name) return res.status(400).send("Name is required");

  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and should be 6 characters long");

  if (!secret) return res.status(400).send("Answer is required");

  if (!email) return res.status(400).send("Email is required");

  const exist = await User.findOne({ email });
  if (exist) return res.status(400).send("Email is taken");

  const hashedPassword = await hashPassword(password);

  const user = new User({ name, email, password: hashedPassword, secret });

  try {
    await user.save();
    console.log("Saved");
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error, Try again");
  }
};


exports.login = async ( req , res ) => {
  try {
    const { email , password } = req.body ;

    const user = await User.findOne({ email })
    if(!user) return res.status(400).send("No user found") ;

    const match = await comparePassword( password , user.password )  
    if (!match) return res.status(400).send("Wrong password") ;
    
    
  } catch(err) {
    console.log(err)
    return res.status(400).send("Error , Try again...")
  }
};
