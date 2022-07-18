import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Nav from "../components/nav";


const Profile = ({id}) => {
    let {userId} = useParams();
    useEffect(() => {
        console.log(userId);
    }, [])
    return (
        <div>
            <Nav />
            <p>Search for profile</p>

        <p>User Id: {userId.userId}</p>
        </div>
    )
}
export default Profile;