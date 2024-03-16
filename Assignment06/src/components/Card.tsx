import InteractiveCard from './InteractiveCard'
import Image  from 'next/image'
import { Rating } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';


export default function Card( { hospitalName, imgSrc, onCompare} : { hospitalName:string, imgSrc:string, onCompare:Function} ) {
    
    
        
    const [value, setValue] = React.useState<number | null>(5);

    

    return (

        <InteractiveCard contentName={hospitalName}>
        <div className='w-full h-[70%] relative round-t-lg ' >
            <Image src={imgSrc}
            alt ='Hospital Picture'
            fill = {true}
            className='object-cover round-t-lg'
            />
        </div>
        <div className='w-full h-[15%] p-[10px]'>{hospitalName}</div>
        <Box className='w-full h-[10%] p-[10px]' sx={{'& > legend': { mt: 2 },}}>
        <Rating value={value} id={hospitalName+ " Rating"} name={hospitalName+ " Rating"} data-testid={hospitalName+ " Rating"} 
            onClick={ (e)=>{e.stopPropagation()  }}
            onChange={(event, newValue) => {setValue(newValue); onCompare(hospitalName,newValue) }}
            />
        </Box>
    </InteractiveCard>
)
}