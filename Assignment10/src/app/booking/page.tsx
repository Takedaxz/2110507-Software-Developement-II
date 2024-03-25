import LocationDateReserve from '@/components/DateReserve'
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function Booking(){

    const session=await getServerSession(authOptions)
    if(!session||!session.user.token) return null;

    const profile=await getUserProfile(session.user.token)
    var createdAt=new Date(profile.data.createdAt);

    return(
        <main className='w-full flex flex-col items-center space-y-4'>
            <div className='text-xl font-medium px-10'>
                New Booking
            </div>
            <div className="text-2xl">
                Hello {profile.data.name}
            </div>
            <div className="text-xl">
            <table className="table-auto border-separate border-sapcing-2"> 
                <tbody>
                    <tr><td>Email</td><td>  : {profile.data.email}</td></tr>
                    <tr><td>Tel.</td><td>   : {profile.data.tel}</td></tr>
                    <tr><td>Member Since</td><td>   : {createdAt.toString()}</td></tr>
                </tbody>
            </table>
            </div>
            <div className='w-fit space-y-2'>
                <div className='text-md text-center text-gray-600'>
                    Booking Details
                </div>
                <LocationDateReserve/>
            </div>
            <button name='Book-Vaccine'className='block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white'>
                Book Vaccine
            </button>
        </main>
    )
}