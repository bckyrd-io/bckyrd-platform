
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
            <p>This is the blog page.</p>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        </div>
    );
};

export default Blog;