import LocationDateReserve from '@/components/DateReserve'

export default function Reservations(){
    return(
        <main className='w-full flex flex-col items-center space-y-4'>
            <div className='text-xl font-medium px-10'>
                New Booking
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