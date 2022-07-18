import React from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeShelf , updated} from '../redux/bookSlice'
import ShelfComponent from './shelfComponent'


// component for wantToRead shelf

export default function wantToReadComponent() {
  const book = useSelector(state => (state.book.books))
  const dispatch = useDispatch()
  
 // handlerChange method for handel change shelf and save the change on data server side

 const handlerChange = (e, id) => {
  const data = {id: id, shelf: e.target.value }
  dispatch(changeShelf(data))
  dispatch(updated(data))
}
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {book.map((book) => {
            if (book.shelf === 'wantToRead') {

              return (
           
                  <ShelfComponent
                    key={book.id}
                    handlerChange={handlerChange}
                    authors={book.authors.toString(',')}
                    title={book.title}
                    id={book.id}
                    smallThumbnail={book.imageLinks.smallThumbnail}
                    shelf={book.shelf} />

               
              )
            }else{return ('')}
          }
          )}
        </ol>
      </div>
    </div>
  )
}


