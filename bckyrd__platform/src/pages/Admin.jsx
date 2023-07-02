import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div>
            <h1>Admin</h1>
            <p>This is the admin page.</p>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        </div>
    );
};


export default Admin;