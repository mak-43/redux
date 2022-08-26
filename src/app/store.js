import { configureStore } from "@reduxjs/toolkit"
import  booksSlice  from "../features/CRUD/BookSlice"
import  postSlice  from "../features/posts/postSlice"


const store=configureStore({
    reducer:{
        posts:postSlice,
        booksReducer:booksSlice
    }
})
export default store