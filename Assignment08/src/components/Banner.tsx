'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import {useState} from 'react'
import { useRouter } from 'next/navigation'

export default function Banner(){

    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index,setIndex] = useState(0);
    const router=useRouter()

    return(
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>Vaccine Service Center</h1>
                <h3 className='text-xl'>Stay Protected - Get Vaccinated Today!</h3>
                <p className='text-l'>Visit our Vaccine Service Center for safe and efficient vaccination.</p>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
                hover:bg-cyan-600 hover:text-white hover:border-transparent' onClick={(e)=>{e.stopPropagation(); router.push('/hospital')}}>
                    Select Your Vaccine Service Center
            </button>
        </div>
    )
}