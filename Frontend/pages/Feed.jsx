import { useEffect, useState } from 'react'
import axios from 'axios'

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
    <div className='w-full h-auto min-h-screen bg-amber-200 px-5 gap-10 flex flex-col  justify-start py-10'>
        <h1 className='text-4xl font-bold text-start -pt-4 fixed z-20'>Feed</h1>
        <br />
        
            {posts.length > 0 ?(
              posts.map((post)=>{
                return <div key={post._id} className='w-(100%) h-(100%) flex relative' >
                  <img className='w-full h-full object-cover' src={post.Image} alt={post.Caption} />
                  <p className='absolute bottom-0 text-[16px] text-black font-bold text-center uppercase bg-[#1b91bbbc] w-full'>{post.Caption}</p>
                </div>
              })
            ):(
              <h1>no posts Available</h1>
            )
          }

    </div>
  )
}

export default Feed