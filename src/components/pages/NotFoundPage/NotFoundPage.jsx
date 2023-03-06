import { useNavigate } from "react-router"
import { Button } from "../../Button/Button"

export const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
    <div>
    <Button onClick={() => navigate('/')}>To Home</Button>
    </div>
    )
}