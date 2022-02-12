import { Button } from '../Form';
import styles from './index.module.css';
export default function ClaimSpot() {
  return (
    <div className={styles.container}>
        <div>
            <p className={styles.heading}>Sign up and get no-fee trading for life</p>
            <p className={styles.description}>We’re giving our first 5,000 users lifetime access to totally free trading.</p>
        </div>
        <div className={styles.spots_container}> 
            <p className={styles.title}>Spots left</p>
            <p className={styles.spots}>2,631</p>
            <Button label="Claim your spot"/>
        </div>
    </div>
  )
}
