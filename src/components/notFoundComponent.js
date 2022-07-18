import { Link } from 'react-router-dom';
import React from 'react';



export default function NotFoundComponent() {
  return (
    <div> 
         <h1>Page Not Found!</h1>
        <Link to="/">Back To Main Page</Link>
    </div>
  )
}




