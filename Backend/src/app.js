const express = require('express') 
const multer = require('multer')
const uploadImageToStorage = require('./services/storage.service')
const postModel = require('./models/post.model')



const upload = multer({ storage: multer.memoryStorage() })

const app = express()
app.use(express.json())



app.post('/create-post',upload.single('image'), async (req, res) => {


  // console.log(req.body);

  const fileBuffer = req.file.buffer;

  const response = await uploadImageToStorage(fileBuffer);
  // console.log(response);

  const newPost = await postModel.create({
    Image:response.url,
    Caption:req.body.caption,
  })

  return res.status(201).json(
    {
      message: 'Post created successfully'
    })
})







module.exports = app