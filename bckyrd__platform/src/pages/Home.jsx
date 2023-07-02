import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page.</p>
            <nav>
                <Link to="/blog">Blog</Link>
                <Link to="/admin">Admin</Link>
            </nav>
        </div>
    );
};



export default Home;