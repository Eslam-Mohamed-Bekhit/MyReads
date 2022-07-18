import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll, update, search } from '../BooksAPI';

// get my books from server
export const booksData = createAsyncThunk('book/add', async () => {
    const books = await getAll()
    return books
})

// search for books on the server by query string

export const queryData = createAsyncThunk('book/query', async (query) => {
    const books = await search(query)
    return books
})

// save books on the server with current shelf by id 

export const updated = createAsyncThunk('book/shelf', async (data) => {
     update({ id: data.id }, data.shelf)
    return data
})





export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        queryBooks: [],
        error: false,
        loading: false,
        success:false

    },
    reducers: {
        // change shelf for boock by id 
        changeShelf:(state,action)=>{ state.books.find(book => book.id === action.payload.id).shelf = action.payload.shelf },
        
        // change shelf for book on the search page and save it to my books on reducer store

        adjustQueryBook: (state,action)=>{
            const queryBook = state.queryBooks.find(book => book.id === action.payload.id)
            queryBook.shelf = action.payload.shelf
            const bookadjust = state.books.find(book => book.id === action.payload.id);
            if (bookadjust) { bookadjust.shelf = action.payload.shelf } else { state.books.push(queryBook) };
       
            
        }

    },
    extraReducers: {
        
        [booksData.pending]: (state) => { state.loading = true; state.error = false; state.success = false ; },
        // if connect with server  fulfilled save my books
        [booksData.fulfilled]: (state, action) => { state.books = action.payload; 
            state.success = true ; 
            state.loading = false; },

        [booksData.rejected]: (state) => { state.error = true; state.success = false; state.loading=false },


        [queryData.pending]: (state) => { state.loading = true; state.error = false; state.success = false ; },
        // if connect with server  fulfilled save query books and set their shelfs
        [queryData.fulfilled]: (state, action) => {
            state.queryBooks = action.payload;
            state.loading = false
            if(state.queryBooks.constructor === Array){
                state.queryBooks.map((book) => {
                state.books.map((mybook) => {
                    if (book.id === mybook.id) { book['shelf'] = mybook.shelf; return null } else { return null }
                })
                return null
            })
            state.loading = false;
            state.success = true ; state.loading = false;
        }else{return}},

        [queryData.rejected]: (state) => { state.error = true; state.success = false; state.loading=false },


        // check if updated pending or fulfilled or rejected
        [updated.pending]: (state) => { state.loading = true; state.error = false; state.success = false ; },
        [updated.fulfilled]: (state) => { state.success = true ; state.loading = false; },
        [updated.rejected]: (state) => { state.error = true; state.success = false; state.loading=false },

    }
})
export const {changeShelf ,adjustQueryBook} = bookSlice.actions
export default bookSlice.reducer