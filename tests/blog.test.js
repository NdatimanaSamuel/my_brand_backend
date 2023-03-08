const mongoose = require("mongoose");
// const request = require("supertest");
// const app = require("../src/server.js");
// const dotenv = require("dotenv");
const axios= require("axios");

// dotenv.config();


const api="http://localhost:6000/api/v1";



/* Connecting to the database before each test. */
// beforeEach(async () => {
//     await mongoose.connect(process.env.MONGODB_URL);
//   });
  
  /* Closing database connection after each test. */
//   afterEach(async () => {
//     await mongoose.connection.close();
//   });


  

       
   //return all argument
  describe("GET /api/blogs", () => {
    it("should return all blogs", async () => {
    //   const res = await request(app).get(`${api}/blogRoute`);
      const res=await axios.get(`${api}/blogs`);
      expect(res.status).toBe(200);

    });
  });

    //get one blog
  describe("GET /api/blog", () => {
    it("should return one blog", async () => {
    //   const res = await request(app).get(`${api}/blogRoute`);
      const res=await axios.get(`${api}/blogs/64067056ff8d8b7671f6b3d2`);
      expect(res.status).toBe(200);

    });
  });


 // create new blog
 describe("POST /api/blog", () => {
  it("create  a blog", async () => {
    const res = await axios.post(`${api}/blogs`,{
      title : "my second test", content : "second all",author:"kaka"
      });

    expect(res.status).toBe(201);
  
  });
});

  //delete blog

  describe("delete /api/blog", () => {
    it("should delete a blog", async () => {
    //   const res = await request(app).get(`${api}/blogRoute`);
      const res=await axios.delete(`${api}/blogs/6407647b3d506d74bd82802a`);
      expect(res.status).toBe(200);

    });
  });


  //update blog
   describe("update exist blog api/blog/:id",()=>{
    it(" update blog", async()=>{
      
      const res=await axios.put(`${api}/blogs/6407652659a2de8e460f762b`,{
        title:"hello  walking",
        content:"let them"
      });

      expect(res.status).toBe(200);
    
    });

   });


   //sign up

  //  describe("POST /api/signup", () => {
  //   it("sign up as new ", async () => {
  //     const res = await axios.post(`${api}/signup`,{
  //       fullname : "manuer ndikumana", email : "jaja@gnail.com",password:"1234567"
  //       });
  
  //     expect(res.status).toBe(201);
    
  //   });
  // });


