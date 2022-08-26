import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchPosts } from './postSlice';


const PostView = () => {
   const {isLoading,posts,error}=useSelector((state)=> state.posts)
 
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    return (
        <div>
            {
                isLoading && <h2>Loading ...</h2>
            }
            {
                error && <h3>{error}</h3>
            }
            <h1>Hello </h1>
           <div >
           {
                posts && posts.map(p=>{
                    return <article>
                        <h5>{p.title}</h5>
                        <p>{p.body}</p>
                    </article>
                })
            }
           </div>
        </div>
    );
};

export default PostView;