
import React from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeShelf ,updated} from '../redux/bookSlice'
import ShelfComponent from './shelfComponent'


// component for read shelf

export default function readComponent(props) {
  const dispatch = useDispatch()


// handlerChange method for handel change shelf and save the change on data server side

  const handlerChange = (e, id) => {
    const data = {id: id, shelf: e.target.value }
    dispatch(changeShelf(data))
    dispatch(updated(data))
  }

// save my books from store on book variable 

  const book = useSelector(state => (state.book.books))

  return (
    <>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

            {book.map((book) => {
              if (book.shelf === props.shelfName) {
                return (
                 
                    <ShelfComponent
                      key={book.id}
                      handlerChange={handlerChange}
                      authors={book.authors.toString(',')}
                      title={book.title}
                      id={book.id}
                      smallThumbnail={book.imageLinks.smallThumbnail}
                      shelf={book.shelf}
                    />
                

                )
              }else{return ('')}
            }
            )}

          </ol>
        </div>
      </div>
    </>
  )
}







