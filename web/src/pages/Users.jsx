import { Link } from "react-router-dom";

export default function Users(){
    return(
        <>
            <Link to="/dashboard">dashboard</Link>
            <Link to="/users">users</Link>
        </>
    )
}