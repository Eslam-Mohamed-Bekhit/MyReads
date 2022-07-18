import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { adjustQueryBook, queryData, updated } from '../redux/bookSlice';
import { useDispatch, useSelector } from 'react-redux';
import ShelfComponent from './shelfComponent';


// component for search page

export default function queryComponent() {

// save query books froms store in queryBooks variable
  const { queryBooks } = useSelector(state => state.book)
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  // handlerChange method for handel set shelf and save the change on data server side

  const handlerChange = (e, id) => {
  const data = { id: id, shelf: e.target.value }
  dispatch(adjustQueryBook(data))
  dispatch(updated(data))

  };

// use useEffect for send request for server side to check about data meet query value
// and just send request if there is value in the input 
  useEffect(() => {
    if (query && query.trim().length > 0) { dispatch(queryData(query)) };
  }, [query])

  return (

    <div className="search-books">
      <div className="search-books-bar">
        <button onClick={() => navigate("/")} className="close-search">Close</button>
        <div className="search-books-input-wrapper">

          <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search by title or author" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">

{/* just map on query books if it is array and not empty and there is value in the input  */}

          {queryBooks.constructor === Array && queryBooks.length > 0 && query && queryBooks.map((book) => {
            if (book.imageLinks){

              return (
                
                  <ShelfComponent
                    key={book.id}
                    handlerChange={handlerChange}
                    authors={book.authors&&book.authors.toString(',')}
                    title={book.title}
                    id={book.id}
                    smallThumbnail={book.imageLinks.smallThumbnail}
                    shelf={book.shelf} />

               
              )}else{return ('')}
          }
          )
          }
        </ol>
      </div>
    </div>
  )

}
