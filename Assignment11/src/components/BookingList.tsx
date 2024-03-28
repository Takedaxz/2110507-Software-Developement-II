'use client';
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {

    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();
    console.log(bookItems.length)
    return (
        <>
            {bookItems.length === 0 ? (
                <div className="text-center text-xl mt-10">No Vaccine Booking</div>
            ) : (
                bookItems.map((bookingItem) => (
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.id}>
                        <div className="text-sm">Name: {bookingItem.name}</div>
                        <div className="text-sm">Surname: {bookingItem.surname}</div>
                        <div className="text-sm">Citizen ID: {bookingItem.id}</div>
                        <div className="text-sm">Hospital: {bookingItem.hospital}</div>
                        <div className="text-sm">Date: {bookingItem.bookDate}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" 
                        onClick={() => dispatch(removeBooking(bookingItem.id))}>Cancel</button>
                    </div>
                ))
            )}
    
        </>

    );
}