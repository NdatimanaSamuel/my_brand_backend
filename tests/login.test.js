const axios= require("axios");
const api="http://localhost:6000/api/v1";

  //login 

  describe("POST /api/login", () => {
    it("sign up as new ", async () => {
      const res = await axios.post(`${api}/login`,{
        email : "user@gmail.com",password:"1234567"
        });
  
      expect(res.status).toBe(200);
    
    });
  });