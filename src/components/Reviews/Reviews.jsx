import { useSelector } from "react-redux"
import { useParams } from "react-router"

import { selectTourReviewsIdsById } from "../../store/tour/selectors"
import { NewReviewForm } from "../NewReviewForm/NewReviewForm"
import { Review } from "../Review/Review"
import styles from './styles.module.css'
import classnames from 'classnames'


export const Reviews = () => {
    const {tourId} = useParams()
    const reviewIds = useSelector(state => selectTourReviewsIdsById(state, {tourId}))
    if (!reviewIds?.length) {
        return null;
      }
    return (
        <div className={classnames(styles.root)}>
            <div className={styles.text_header}>Reviews</div>
            {reviewIds.length > 0 ? (
                <div>
                    {reviewIds.map(item => (
                        <Review 
                        key = {item} 
                        reviewId = {item} 
                        className={styles.review}
                        />
            ))}
            </div>
            ) : (
                <div>Empty</div>
            )}

        <NewReviewForm className={styles.reviewForm}/>

        </div>
    )
}
