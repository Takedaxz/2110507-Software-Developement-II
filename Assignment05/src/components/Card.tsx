import InteractiveCard from './InteractiveCard'
import styles from './card.module.css'
import Image from 'next/image'

export default function Card({hospitalName,imgSrc}:{hospitalName:string,imgSrc:string}){
    return(
        <InteractiveCard contentName={hospitalName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Instruction Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[10px]'>
                {hospitalName}
            </div>
        </InteractiveCard>
    )
}