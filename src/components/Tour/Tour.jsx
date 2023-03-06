import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate, useParams } from "react-router"
import { NavLink } from "react-router-dom"
import { selectTourById, selectTourImageById } from "../../store/tour/selectors"
import { Image } from "../Image/Image"
import { NewReviewForm } from "../NewReviewForm/NewReviewForm"
import { Reviews } from "../Reviews/Reviews"
import { Services } from "../Services/Services"
import styles from './styles.module.css'
import classNames from "classnames"



export const Tour = () => {
    const { tourId } = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        navigate('services' , {replace: true})
    }, [tourId])

    const tour = useSelector(state => selectTourById(state, {tourId}))
    // const image = 'http://localhost:3002/img/'+tourImage
    if (!tour) return null
    return (
        <div className={styles.root}>
            <div className={styles.text_header}> {tour.name}</div>
            <Image img = {tour.img} />
                <ul className={styles.ul}>
                  <li className={styles.list}>
                    <NavLink
                      className={({isActive}) => classNames("text",styles.nav_links, {
                          [styles.active]: isActive
                        })}
                      to="services"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className={styles.list}>
                    <NavLink
                      className={({isActive}) => classNames("text",styles.nav_links, {
                        [styles.active]: isActive
                      })}
                      to="reviews"
                    >
                      Reviews
                    </NavLink>
                  </li>
                </ul>
          
            
                <div className={styles.mainContent}>
                  <Outlet />
                </div>
            
        </div>
    )
}

// {({isActive}) => classNames(className,"text", {
//   [styles.active]: isActive
// })}>