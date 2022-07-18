import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import WrapComponent from './components/wrapComponent'
import QueryComponent from './components/queryComponent'
import { booksData } from './redux/bookSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/notFoundComponent'

export default function App2() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(booksData());
    }, [])
    return (
        <>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route excat path="/" element={<WrapComponent />} />
                        <Route path="/search" element={<QueryComponent />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}


