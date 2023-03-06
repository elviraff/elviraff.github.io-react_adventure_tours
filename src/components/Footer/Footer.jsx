import styles from './styles.module.css'
import phone from './img/phone.svg'
import mail from './img/icons-mail.svg'
import classNames from 'classnames'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className= {classNames("text_white", styles.header)}>Contacts</div>
            <div className={classNames("text_white", styles.contact_block)}>
                <img  className={styles.svg} src={phone} />
                <div className={styles.contact_text}> +49 ... ........</div>
            </div>
            <div className={classNames("text_white", styles.contact_block)}>
                <img  className={styles.svg} src={mail} />
                <div className={styles.contact_text}> best_adventure_tours@gmail.com</div>
            </div>
        </div>
    )
}