import React from 'react'


// shelf component use it to generate shelfs and books , try dont repeat my self

export default function shelfComponent(props) {


  return (


    <li key={ props.id }>
       <div className="book">
         <div className="book-top">
           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:` url(${ props.smallThumbnail})` }}></div>
           <div className="book-shelf-changer">
             <select value ={props.shelf || "none"}  onChange={event=>props.handlerChange(event ,props.id)} >
               <option value="move" disabled>Move to...</option>
               <option value="currentlyReading">Currently Reading</option>
               <option value="wantToRead">Want to Read</option>
               <option value="read">Read</option>
               <option value="none">None</option>
             </select>
           </div>
         </div>
         <div className="book-title">{ props.title}</div>
         <div className="book-authors">{props.authors&&props.authors}</div>
       </div>
     </li>


  )
}
