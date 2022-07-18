import React from 'react'
import '../App.css'
//import ReadComponent from './readComponent'
//import WantToReadComponent from './wantToReadComponent'
import FooterComponent from './footerComponent'
//import CurrentlyReadingComponent from './currentlyReadingComponent'
import { useSelector } from 'react-redux'
import GenricShelf from './genricShelf'

// wrap component to help to collect and wrap all main page components in one component

export default function wrapComponent() {

  const shelves = [
    { title: 'Read', key: 'read'},
    { title: 'Want To Read', key: 'wantToRead' },
    { title: 'Currently Reading', key: 'currentlyReading' }
 ];

// use 'loading' and 'error' from reducer store to helpto handel binding time and error while connect to server to get data

  const { loading, error } = useSelector(state => (state.book))

  return (
    <>
      {loading ? '...loading' :
        <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {error && 'Error : some thing go wrong'}

              {shelves.map((shelf)=> <GenricShelf title={shelf.title} key={shelf.key} shelfName={shelf.key} /> )}
         {/*      <ReadComponent />
              <WantToReadComponent />
              <CurrentlyReadingComponent /> */}
              <FooterComponent />
            </div>
          </div>
        </div>
      }
    </>

  )
}
