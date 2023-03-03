import jwt from 'jsonwebtoken';

const restrictDelete=(req, res, next) => {
// Check if the request has an authorization header
const authHeader = req.headers.authorization;

const token = authHeader.split(' ')[1]; 

if (!authHeader) {
    return res.status(401).json({
      message: 'Authorization header missing'
    });
  }


  else{
    const verifyToken=jwt.verify(token,process.env.SECRETE_KEY); 

    if(!verifyToken){
      return res.status(401).json({
            message:"invalid token"
          })
    }
    else{
      const {userId}=verifyToken;
      const {userBodyId}=req.body;

      if(userBodyId!==userId){
        return res.status(403).json({
            message:"user have no access",

          })
      }
      else{
        next();
      }
    }
  }

  
    // Extract the token from the authorization header
  

  // try {
  //   // Verify the token and extract the user ID from it
  //   const { userId } = jwt.verify(token, 'hhhhhh');
  //   console.log(userId)

  //   // Check if the user ID matches the ID of the blog author
  //   if (req.body.authorId !== userId) {
  //     return res.status(403).json({
  //       message: 'You are not authorized to delete this blog'
  //     });
  //   }

  //   // If the user ID matches the ID of the blog author, call the next middleware
  //   next();
  // } catch (error) {
  //   return res.status(401).json({
  //     message: 'Invalid token'
  //   });
  // }

    

   
}

export default restrictDelete;