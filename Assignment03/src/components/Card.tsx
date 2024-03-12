import styles from './card.module.css'
import Image from 'next/image'

export default function Card(){
    return(
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/vaccinated.jpeg'}
                alt='Instruction Picture'
                fill={true}
                objectFit='cover'/>
            </div>
            <div className={styles.cardtext}>
                <h4>Follow Public Health Guidelines</h4>
                <p>Stay updated with guidelines and recommendations</p>
            </div>
        </div>
    )
}