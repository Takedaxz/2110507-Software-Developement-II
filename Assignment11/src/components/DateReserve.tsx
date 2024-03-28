'use client'
import {DatePicker} from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { Dayjs } from 'dayjs';

export default function DateReserve({onDateChange,onHospitalChange} : {onDateChange : Function , onHospitalChange : Function}){

    const [bookDate , setBookDate] = useState<Dayjs | null>(null) 
    const [hospital , setHospital] = useState('Chula')

    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className='bg-white' value={bookDate} onChange={(value) => {setBookDate(value); onDateChange(value)}}/>
            </LocalizationProvider>

            <Select variant='standard' name='hospital' id='hospital' className='h-[2em] w-[200px]' value={hospital}
            onChange={(e) => {setHospital(e.target.value) , onHospitalChange(e.target.value)}}>
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>
        </div>
    );
};