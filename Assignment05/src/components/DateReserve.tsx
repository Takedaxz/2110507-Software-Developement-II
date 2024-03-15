'use client'
import {DatePicker} from '@mui/x-date-pickers'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {TextField,Select,MenuItem} from '@mui/material'

export default function LocationDateReserve(){
    return(
        <div className='bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-col items-center'>
            <form>
            <TextField
                variant='standard'
                margin="normal"
                fullWidth
                id="Name-Lastname"
                label="Name-Lastname"
                name="Name-Lastname"
            />
            <TextField
                variant='standard'
                margin="normal"
                fullWidth
                id="Citizen-ID"
                label="Citizen ID"
                name="Citizen-ID"
            />
            </form>
            <div>
                Vaccine Service Center
            </div>
            <Select className='h-[2em] w-[200px]' value=''>
                <MenuItem value='Chula'>Chulalongkorn Hospital</MenuItem>
                <MenuItem value='Rajavithi'>Rajavithi Hospital</MenuItem>
                <MenuItem value='Thammasat'>Thammasat University Hospital</MenuItem>
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='mt-4'>
                    <DatePicker className='bg-white' />
                </div>
            </LocalizationProvider>
        </div> 
    )
}