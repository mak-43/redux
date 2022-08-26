import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { deleteBook } from './BookSlice';
import {Link}from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books)
    const dispatch=useDispatch()
    const handleDelete=(id)=>{
        dispatch(deleteBook(id))
    }
    return (
        <div>
            <h1>List of Books</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        books && books.map((books) => {
                            const { id, title, author } = books
                            return <tr>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>
                                    <Link to='/book-edit' state={{id,title,author}}><button  >Edit</button></Link>
                                    <button onClick={()=>handleDelete(id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;