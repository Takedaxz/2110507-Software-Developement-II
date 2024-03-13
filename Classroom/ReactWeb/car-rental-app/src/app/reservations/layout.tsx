import styles from './reservations.module.css'
import ReservationMenu from "./reservationMenu";

export default function ReservationLayout({children}:{children:React.ReactNode}){
    return(
        <div className={styles.sectionlayout}>
            <ReservationMenu/>
            {children}
        </div>
    )
}