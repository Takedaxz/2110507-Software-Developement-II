'use client'
import DateReserve from '@/components/DateReserve'
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { addBooking } from '@/redux/features/bookSlice'
import dayjs,{ Dayjs } from 'dayjs'
import { useState } from 'react'
import { TextField } from '@mui/material'
import { useSearchParams } from 'next/navigation'

export default function Booking(){

    const urlParams=useSearchParams()
    const hid=urlParams.get('id')
    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if(name && surname&& id && bookDate) {
            const item:BookingItem = {
                name : name,
                surname : surname ,
                id : id,
                hospital: hospital,
                bookDate : dayjs(bookDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
            console.log(item)
        }
    }

    const [bookDate , setbookDate] = useState<Dayjs|null>(null)
    const [hospital , setHospital] = useState<string>("")
    const [name , setName] = useState<string>("")
    const [surname , setSurname] = useState<string>("")
    const [id , setId] = useState<string>("")


    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-2xl p-10 ">Booking Vaccine</div>
           <form className="block flex flex-col space-y-12">
            <TextField variant="standard" name='Name' label='Name' onChange={(e)=> {setName(e.target.value)}}/>
            <TextField variant="standard" name='Lastname' label='Lastname' onChange={(e)=> {setSurname(e.target.value)}}/>
            <TextField variant="standard" name='Citizen ID' label='Citizen ID' onChange={(e)=> {setId(e.target.value)}}/>
            <DateReserve onDateChange={(value : Dayjs) => {setbookDate(value)}} onHospitalChange={(value : string) => {setHospital(value)}}/>
           </form>
           <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={makeBooking}>Book Vaccine</button>
        </main>
    );
}