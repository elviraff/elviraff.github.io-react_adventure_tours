import styles from './styles.module.css'
import classnames from 'classnames'
import { Rating } from '../Rating/Rating'
import { User } from '../User/User'
import { Size } from '../../constants/ui'
import { useSelector } from 'react-redux'
import { selectReviewById } from '../../store/review/selectors'

export const Review = ({reviewId, className}) => {
    const review = useSelector(state => selectReviewById(state, {reviewId}))
    if(!review) {
        return null
    }
    return (
        <div className={classnames(styles.root, className)}>
            <div className={styles.layer}></div>
            <div className={styles.mainInfo}>
                <User className={styles.user} userId={review.userId} />
                <Rating value={review.rating} size={Size.s} className={styles.rating} />
            </div>
            <span className={styles.review_text}>{review.text}</span>
      </div>
    )
}
