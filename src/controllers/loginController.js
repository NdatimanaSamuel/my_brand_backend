import bcrypt from "bcrypt";
import User from "../model/user.js";
import jwt from "jsonwebtoken"; 
const secret = "hhhhhh";
const loginController=async (req,res)=>{
      // email and password from the body

    const {email,password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
              message: "Invalid Login Credentials"
            });
          }
          
          else {
                // check if password is correct
      const passwordMatch = await bcrypt.compare(password, user.password);
       // conditions
      if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid Login credentials' });
      }

      if(user.role==="user"){
        return res.status(400).json({ message: 'you are not authorized' });
      }

      else{
            const token=jwt.sign({userId:user._id},process.env.SECRETE_KEY);
            console.log(token);
            return res.status(200).json({
              data:user,
              token:token
            })

         // create and sign JWT token
        // const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1d' });

        // res.cookie('token', token, {
        //   httpOnly: true,
        //   maxAge: 24 * 60 * 60 * 1000 // 1 day
        // });
        // res.status(200).json({
        //   message: 'Login successful',
        //   token: token
        // });
      }
          
    
    }

    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: error.message
        });
      }

}

export default loginController;