import { useSelector } from "react-redux"
import { selectUserById } from "../../store/user/selectors"

export const User =({userId, className}) => {
    const user = useSelector(state => selectUserById(state, {userId}))
    return (
    <span className={className}>{user.name}</span>
    )
}