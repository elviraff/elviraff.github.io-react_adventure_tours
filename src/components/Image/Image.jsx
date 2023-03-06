import styles from './styles.module.css'
import classnames from 'classnames'

export const Image = ({img}) => {
    let img_style = Object.values({img})[0]

    return (
    <div className={classnames(styles[img_style], styles.img)}>
    </div>
    )
}