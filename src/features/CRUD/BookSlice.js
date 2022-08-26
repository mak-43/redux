import {v4 as uuidv4} from 'uuid'
const {createSlice}=require('@reduxjs/toolkit')

const initialBooks={
    books:[
        {id:uuidv4(),title:'love bangladesh',author:'Anisul Islam'},
        {id:uuidv4(),title:' bangladesh',author:'Anisul Islam'},
        {id:uuidv4(),title:'love america',author:'Anisul Islam'},
        {id:uuidv4(),title:' England',author:'Anisul Islam'},
    ]
}
export const booksSlice=createSlice({
    name:'books',
    initialState:initialBooks,
    reducers:{
        showBooks:(state)=>state,
        addBook:(state,action)=>{
            state.books.push(action.payload)
        },
        updateBook:(state,action)=>{
            const{id,title,author}=action.payload
            const exist=state.books=state.books.filter(book=>book.id===id)
            if(exist){
                exist[0].title=title
                exist[0].author=author

            }
        },
        deleteBook:(state,action)=>{
            const id=action.payload
            state.books=state.books.filter(book=>book.id!==id)
        }
    },
})
export const {showBooks,addBook,deleteBook,updateBook}=booksSlice.actions
export default booksSlice.reducer