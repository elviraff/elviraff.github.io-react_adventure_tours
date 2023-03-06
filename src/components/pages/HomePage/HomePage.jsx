import styles from './styles.module.css'
import classnames from 'classnames'

export const HomePage = () => {
    return (<div className={styles.root} >
        <div className= {classnames("text", styles.header_big)} >Adventure. Travelling</div>
        <div className={classnames("text", styles.header_small)} >Holidays with a difference</div>
        </div>)
}