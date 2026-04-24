import React ,{useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts,setPosts]=useState([
        {
            _id:"1",
            image:"https://plus.unsplash.com/premium_photo-1758893734351-76901f2ea53d",
            caption:"Beautiful Girl Carrying a Bocket of Flowers"
        }
    ])
    useEffect(()=>{
        axios.get("http://localhost:3000/getPosts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
         .catch((err)=>{
        console.log(err)
    })
    },[])

  return (
    <section className='feed'>
        {
            posts.length>0 ? (
                posts.map((post)=>(
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption}/>
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1>No Posts available</h1>
            )
        }
    </section>
  )
}

export default Feed