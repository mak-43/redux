const {createSlice}=require('@reduxjs/toolkit')
const initialBooks={
    books:[
        {id:1,title:'love bangladesh',author:'Anisul Islam'},
        {id:2,title:' bangladesh',author:'Anisul Islam'},
        {id:3,title:'love america',author:'Anisul Islam'},
        {id:4,title:' England',author:'Anisul Islam'},
    ]
}
export const booksSlice=createSlice({
    name:'books',
    initialState:initialBooks,
    reducers:{
        showBooks:(state)=>state,
        addBook:(state,action)=>{
            state.books.push(action.payload)
        }
    },
})
export const {showBooks,addBook}=booksSlice.actions
export default booksSlice.reducer