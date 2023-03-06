
import Star from "./img/star.svg"
import GoldStar from "./img/star-gold.svg"
import { MAX_RATING } from './constants'
import {Size} from '../../constants/ui'
import classNames from "classnames"
import styles from './styles.module.css'
 
export const Rating = ({
    value,
    onChange,
    size = Size.m,
    className,
    maxRating = MAX_RATING
}) => {
    return (
        <div className={className}>
            {new Array(maxRating).fill(null).map((_, index) => (
                <img
                    src={index >= value ? Star : GoldStar}
                    key={index}
                    className = {classNames(styles.star, styles[size])}
                    loading='lazy'
                    onClick = {onChange ? () => onChange(index+1) : undefined}
                /> 
            ))}
            {/* <span>{value}</span> */}
        </div>
    )
}