const addBlog ={
    '/api/v1/blogs':{
    post: {
    tags: ['Add Blog'],
   security: [],
   summary: 'add New blog',
   parameters: [
    {
        in: 'formData',
        name: 'title',
        required: true,
    },

    {
        in: 'formData',
        name: 'author',
        required: true,
    },
    {
        in: 'formData',
        name: 'content',
        required: true,
    },
    {
        name: 'image',
        in: 'formData',
        required: true,
        type: 'file',
    },
    

   ],
   consumes: ['application/json'],
   responses:{
    201: {
        description: 'Created',
    },
    400: {
        description: 'Bad Request'
    },
    401: {
        description: 'Unauthorized'
    },
    500: {
        description: 'Internal Server Error'
    }
   }
},}}

export default addBlog;