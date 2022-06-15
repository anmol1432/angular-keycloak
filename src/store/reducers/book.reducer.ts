import { createReducer, on } from '@ngrx/store';
import { Book } from "../models/book.models";
import { retrievedBookList ,removeBook,addBook} from "../actions/books.action";


export const initialState:ReadonlyArray<Book> = []; //


export const bookReducer = createReducer(
    initialState,
    on(retrievedBookList,(state,{books})=>books)
)

export const collectionReducer = createReducer(
    initialState,
    // on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
    // on(addBook, (state, { bookId }) => {
    //   if (state.indexOf(bookId) > -1) return state;
    //   return [...state, bookId];
    // })
);