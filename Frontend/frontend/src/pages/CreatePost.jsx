import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const formData=await new FormData(e.target);
        axios.post("http://localhost:3000/createPost",formData)
        .then((res)=>{
            
            navigate('/feed')
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <section className='create-post'>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept='image/*'/>
        <input type="text" name="caption" placeholder='Enter Caption' required/>
        <button type="Submit">Create Post</button>
      </form>
    </section>
  )
}

export default CreatePost
