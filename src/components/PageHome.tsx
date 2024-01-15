// Home.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/apr16-01-184777571.jpg";
import challenge from "../assets/paysafe-1.jpg";
import challengesImage from "../assets/space1.jpg";
import spacesImage from "../assets/space2.jpg";
import d from "../assets/space3.jpg";
import marketplaceImage from "../assets/build.jpg";
// Authentication Links
import ButtonLogin from "./ButtonLogin";
import ButtonLogout from "./ButtonLogout";
import AuthProfile from "./AuthProfile";


const Home = () => {
    const [formData, setFormData] = useState<FormDataItem[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/form-data");
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }

            const data: FormDataItem[] = await response.json();
            console.log("Data received:", data); // Log the received data
            setFormData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            console.log("Full response:", (error as Response)?.text()); // Log the full response for debugging
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount


    return (
        <>
            <section className="row">
                <aside className="col w">
                    <article>
                        <h1>Leverage the next tech revolution To Reap the benefits From Electronics Enthusiast </h1>
                    </article>
                    <article className="row between">
                        <p className="row">
                            <Link to={""} className="btn active">Get Started</Link>
                            <Link to={"/profile"} className="btn lnk">Sign In </Link>
                        </p>
                        <p className="row">
                            <Link to={"/profile"} className="btn light tag">Dark Mode </Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row" id="challenge__section">
                <aside className="col w">
                    <article>
                        {/* <p>Leverage the next tech revolution To Reap the benefits From the Enthusiast </p> */}
                    </article>
                </aside>
            </section>

            <section className="row" id="approach__section">
                <aside className="col left">
                    <article>
                        <p>Join a community where enthusiasts turn ideas into reality. Collaborate, create, and commercialize your projects in a dynamic marketplace.</p>
                    </article>
                    <article className="features">
                        <p className="row">
                            <Link to={"/addWorkSpace"} className="btn active tag">+ Create</Link>
                            <Link to={"/workSpace"} className="btn light tag">- Search</Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row" id="workspace__section">
                <aside className="row grid">
                    <article className="col" style={{ backgroundImage: `url(${challengesImage})` }}>
                        <Link to={"/challenge"}>Challenges</Link>
                    </article>
                    <article className="col" style={{ backgroundImage: `url(${marketplaceImage})` }}>
                        <Link to={"/marketplace"}>Market Place</Link>
                    </article>
                    <article className="col" style={{ backgroundImage: `url(${spacesImage})` }}>
                        <Link to={"/workspaces"}>Work Spaces</Link>
                    </article>
                </aside>
            </section>

            <section className="row">
                <aside className="col w">
                    <article>
                        <h1>Lets Work</h1>
                        <p className="row">
                            <Link to={"mailto:work@bckyrd.io"} className="btn lnk">📧 Contact Us Today</Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row" id="company__section">
                <aside className="col left">
                    <article>
                        <p>Explore the opportunities and join our innovative community. Whether you're a hobbyist, a tech enthusiast, or a professional, there's a place for you here.</p>
                    </article>
                    <article>
                        <a href="/gallery">
                            <img src={image} alt="Company Image" loading="lazy" />
                        </a>
                    </article>
                </aside>
                <aside className="col right">
                    <article>
                        <p className="row">
                            <Link to={"/events"} className="btn active tag">Register For Events</Link>
                            <Link to={"/challenges"} className="btn active tag">Solve Sponsored Challenges</Link>
                            <Link to={"/careers"} className="btn active tag">Careers As An Enthusiast</Link>
                            <Link to={"/challenges"} className="btn active tag">Know About Company</Link>
                        </p>
                    </article>
                </aside>
            </section>
        </>
    );

};


export default Home;


interface FormDataItem {
    id: number;
    title: string;
    additionalContent: string; // Adjust the type based on your API response
    image: string; // Assuming the image path is stored in the 'image' field
}