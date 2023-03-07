import styles from './styles.module.css'
import classNames from 'classnames'

export const Button =({children, className, onClick=()=>{}}) => {
    return (
        <button className={classNames(styles.button, className)} onClick={onClick}> {children} </button>
    )
}