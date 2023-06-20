import { Link } from "react-router-dom";

export default function DashBoard() {
    return (
        <>
            <Link to="/dashboard">dashboard</Link>
            <Link to="/users">users</Link>
        </>
    )
}