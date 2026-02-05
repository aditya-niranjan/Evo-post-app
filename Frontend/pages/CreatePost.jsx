import React from 'react'
import axios from 'axios'
import { useRef } from 'react'

const CreatePost = () => {

  const inputData = useRef(null);

  const Submithandler = async (e) => {
    e.preventDefault()

    
    const formData = new FormData(e.target);

    axios.post('http://localhost:5000/create-post', formData)
      .then((response) => {
        // console.log(response);
      })

      inputData.current.value = '';
  }

  return (
    <div className='w-full h-screen flex flex-col  gap-5 items-center justify-center p-5 bg-amber-100'>
      <h1 className='text-4xl font-bold'>Create Post</h1>
      <div className="w-full h-1/4 flex flex-col items-center justify-center gap-4 bg-amber-300 rounded-2xl">
      <form  onSubmit={Submithandler} className='w-1/2 flex flex-col items-center justify-center gap-4 '>
        <input ref={inputData} className='w-1/1 border-2 border-gray-600 p-2 rounded-2xl' type="file" placeholder="image" accept='image/*' name='image' required />
        <input ref={inputData} className='w-1/1 border-2 border-gray-600 p-2 rounded-2xl' type="text" placeholder="caption" name='caption' required />        
        <button className='bg-green-400 py-1 px-4 rounded-2xl active:scale-95' type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default CreatePost