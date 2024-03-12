import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <Image src={'/img/vaccine.png'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Vaccine Service Center</h1>
                <h3>Stay Protected - Get Vaccinated Today!</h3>
                <p>Visit our Vaccine Service Center for safe and efficient vaccination.</p>
            </div>
        </div>
    )
}