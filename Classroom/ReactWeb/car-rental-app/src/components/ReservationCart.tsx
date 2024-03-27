'use client'
import { useDispatch } from "react-redux"
import { AppDispatch,useAppSelector } from "@/redux/store"
import { removeReservation } from "@/redux/features/cartSlice"

export default function ReservationCart(){
    const carItems=useAppSelector((state)=>state.cartSlice.carItems)
    const dispatch=useDispatch<AppDispatch>()
    return (
        <>
        {
            carItems.map((reservationItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem.carId}>
                    <div className="text-xl">{reservationItem.carModel}</div>
                    <div className="text-sm">Pick-Up : {reservationItem.pickupDate}</div>
                    <div className="text-sm">Return : {reservationItem.returnDate}</div>
                    <div className="text-sm">Duration : {reservationItem.numOfDays}</div>
                    <button className='block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white' onClick={()=>dispatch(removeReservation(reservationItem))}>
                        Remove
                    </button>
                </div>
            ))
        }
        </>
    )
}