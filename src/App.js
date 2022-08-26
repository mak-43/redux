import PostView from "./features/posts/PostView";
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import BooksView from "./features/CRUD/BooksView";
import AddBook from "./features/CRUD/AddBook";
import './App.css'
import Footer from "./Components/Footer";
import EditeBook from "./features/CRUD/EditeBook";

function App() {
  return (
    <div className="App">

      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/show-books' element={<BooksView />}></Route>
          <Route path='/add-book' element={<AddBook />}></Route>
          <Route path='/book-edit' element={<EditeBook />}></Route>


          <Route path="/post" element={<PostView />}></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
