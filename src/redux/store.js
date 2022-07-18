import {configureStore , getDefaultMiddleware } from '@reduxjs/toolkit'

import bookSlice from './bookSlice'

 const store = configureStore({
    reducer:{book : bookSlice},  
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      })
})

export default store