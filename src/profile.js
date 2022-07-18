import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Nav from "./nav";


const Profile = ({id}) => {
    let {userId} = useParams();
    useEffect(() => {
        console.log(userId);
    }, [])
    return (
        <div>
            <Nav />
            Profile
        </div>
    )
}
export default Profile;