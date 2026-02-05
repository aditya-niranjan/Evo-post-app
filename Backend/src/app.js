const express = require('express') 
const multer = require('multer')
const uploadImageToStorage = require('./services/storage.service')
const postModel = require('./models/post.model')
const cors = require('cors')



const upload = multer({ storage: multer.memoryStorage() })

const app = express()
app.use(express.json())
app.use(cors())



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


app.get('/posts', async (req, res) => {

  const posts = await postModel.find()

  return res.status(200).json({message: 'Posts fetched successfully',
    posts
  })
})




module.exports = app