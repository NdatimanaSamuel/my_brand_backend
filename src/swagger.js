import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"
import app from "./server.js";

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'first brand API',
        description: ' all about my Brand-Api',
        version: '1.0.0',
      },



      servers:[
        {
         api:'http://localhost:6000/'   
        },
      
      ]
  },
  apis:['./routes/allRoutes.js']
    } 


    const swaggerSpec = swaggerJSDoc(options);

    // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


    function swaggerDocs(app, port){
        // swagger page
        app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

        //document in json format
        app.get('/docs.json', (req, res)=>{
         res.setHeader('Content-type', 'application/json')
         res.send(swaggerSpec)
        })
    }

    export default swaggerDocs 