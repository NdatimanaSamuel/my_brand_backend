const axios= require("axios");
const api="http://localhost:6000/api/v1";

  //sign up

   describe("POST /api/signup", () => {
    it("sign up as new ", async () => {
      const res = await axios.post(`${api}/signup`,{
        fullname : "kwizera jimmy", email : "jimmy@gmail.com",password:"1234567"
        });
  
      expect(res.status).toBe(201);
    
    });
  });