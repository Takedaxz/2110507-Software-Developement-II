import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BookState = {
    bookItems : BookingItem[]
}

const initialState:BookState = {bookItems:[]}

export const bookSlice = createSlice({
    name : "book",
    initialState,
    reducers : {
        addBooking : (state , action : PayloadAction<BookingItem>) => {
            
            const remainItems = state.bookItems.findIndex(obj => obj.id === action.payload.id)

            if(remainItems !== -1) {
                state.bookItems.splice(remainItems,1,action.payload)
            } else {
                state.bookItems.push(action.payload)
            }
            
        },
        removeBooking : (state, action:PayloadAction<string>) => {
            state.bookItems = state.bookItems.filter( obj => {
                return((obj.id !== action.payload) 
                )
            })
        }
    }
})

export const { addBooking , removeBooking } = bookSlice.actions
export default bookSlice.reducer