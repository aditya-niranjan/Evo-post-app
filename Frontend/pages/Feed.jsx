import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Feed = () => {
const [posts, setposts] = useState([
  {
    _id:'1',
    image: "https://images.unsplash.com/photo-1764069970723-eff3e12de883?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "This is the first post",
  },
  {
    _id:'2',
    image: "https://images.unsplash.com/photo-1764069970723-eff3e12de883?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "This is the first post",
  },
  {
    _id:'3',
    image: "https://images.unsplash.com/photo-1764069970723-eff3e12de883?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "This is the first post",
  },
  {
    _id:'4',
    image: "https://images.unsplash.com/photo-1764069970723-eff3e12de883?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "This is the first post",
  }
])

const navigate = useNavigate();




useEffect(()=>{

  axios.get('http://localhost:5000/posts')
  .then((response) => {
    // console.log(response.data);
    setposts(response.data.posts)
  })
  .catch((error) => {
    console.error('Error:', error);
  });

},[])


  return (
    <div className='w-full min-h-screen bg-amber-200 px-3 sm:px-5 md:px-8 lg:px-12 flex flex-col justify-start pt-0 pb-4 sm:pb-6 md:pb-10'>
        
        <nav className='flex items-center justify-between sticky top-0 z-20 bg-amber-300/10 border-b-2 border-black  backdrop-blur-md py-3 sm:py-4 mb-4 sm:mb-6 md:mb-8 -mx-3 sm:-mx-5 md:-mx-8 lg:-mx-12 px-3 sm:px-5 md:px-8 lg:px-12'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Feed</h1>
          <button 
            onClick={() => navigate("/")} 
            className='bg-amber-600/90 hover:bg-amber-700 cursor-pointer text-sm sm:text-base md:text-lg font-semibold text-white py-2 px-4 sm:px-6 rounded-lg transition-all duration-200 active:scale-95'
          >
            Back
          </button>
        </nav>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
            {posts.length > 0 ?(
              posts.map((post)=>{
                return (
                  <div key={post._id} className='w-full rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white'>
                    <div className='relative aspect-square sm:aspect-4/3 md:aspect-square overflow-hidden'>
                      <img className='w-full h-full object-cover transition-transform duration-200 hover:scale-120' src={post.Image} alt={post.Caption} />
                    </div>
                    <p className='text-xs sm:text-sm md:text-base text-black font-semibold text-center py-2 sm:py-3 px-2 bg-[#1b91bbbc] truncate'>{post.Caption}</p>
                  </div>
                )
              })
            ):(
              <div className='col-span-full text-center py-10'>
                <h1 className='text-lg sm:text-xl md:text-2xl text-gray-600'>No posts available</h1>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Feed