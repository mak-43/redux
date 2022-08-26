import React, { useState } from 'react';
import {useLocation,useNavigate}from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { updateBook } from './BookSlice';

const EditeBook = () => {
    
    const location=useLocation()
    const [id,setId]=useState(location.state.id)
    const [title,setTitle]=useState(location.state.title)
    const [author,setAuthor]=useState(location.state.author)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
   
        dispatch(updateBook({id,title,author}))
        navigate('/show-books',{replace:true})
    }
    return (
        <div>
            <h2>Edit Book</h2>
     
            <form action="" onSubmit={handleSubmit}>
                <div className='form-field'> 
                    <label htmlFor="title">Title : </label>
                    <input type="text" id='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                </div>
                <div className='form-field'> 
                    <label htmlFor="author">Author  : </label>
                    <input type="text" id='author' name='author' value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
                </div>
                <button type='submit'>Update Book</button>
            </form>

        </div>
    );
};

export default EditeBook;