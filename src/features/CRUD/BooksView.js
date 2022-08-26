import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books)

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
                                    <button>Edit</button>
                                    <button>Delete</button>
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