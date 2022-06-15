 import {createAction , props} from "@ngrx/store";
 import {  Book} from "../models/book.models";


 export const addBook = createAction(
     "AddBook",
     props<{bookId: string}>()
 )

 export const removeBook = createAction(
     "RemoveBook",
     props<{bookId: string}>()
 )

 export const retrievedBookList = createAction(
     "RetrieveBooks",
     props<{books: ReadonlyArray<Book>}>()
 )