// Home.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/apr16-01-184777571.jpg";
import challenge from "../assets/paysafe-1.jpg";
import challengesImage from "../assets/space1.jpg";
import spacesImage from "../assets/space4.jpg";
import herofix from "../assets/work.jpg";
import marketplaceImage from "../assets/arduino.png";
import download from "../assets/download.jpg";
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
                        <h1>Leverage Next tech revolutions To benefits From Electronics Enthusiast</h1>
                    </article>
                    <article className="row between">
                        <p className="row">
                            <Link to={""} className="btn active"> Login</Link>
                            <Link to={"/#approach__section"} className="btn lnk">Get Started</Link>
                        </p>
                        <p className="row">
                            <Link to={"/profile"} className="btn light tag mode">Dark Mode </Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row" id="challenge__section" style={{ backgroundImage: `url(${herofix})` }}>
                <aside className="col w">
                    <article>
                        {/* <p>Leverage the next tech revolution To Reap the benefits From the Enthusiast </p> */}
                    </article>
                </aside>
            </section>

            <section className="row" id="approach__section">
                <aside className="col left">
                    <article>
                        <p>Explore the opportunities and join our innovative community. Whether you're a hobbyist, a tech enthusiast, or a professional, there's a place for you here.</p>
                    </article>
                    <article className="feature">
                        <p className="row">
                            <Link to={"/addWorkSpace"} className="btn active tag">Create</Link>
                            <Link to={"/workSpace"} className="btn light tag">Search</Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row" id="workspace__section">
                <aside className="row grid">
                    <article className="col" style={{ backgroundImage: `url(${challengesImage})` }}>
                        <Link to={"/challenge"}>Challenge</Link>
                    </article>
                    <article className="col" style={{ backgroundImage: `url(${marketplaceImage})` }}>
                        <Link to={"/marketplace"}>Market Place</Link>
                    </article>
                    <article className="col" style={{ backgroundImage: `url(${spacesImage})` }}>
                        <Link to={"/workspaces"}>Resource</Link>
                    </article>
                </aside>
            </section>

            <section className="row" id="contact__section">
                <aside className="col w">
                    <article>
                        <h1>Lets Work Together To Build Profitable something for Electronics</h1>
                    </article>
                </aside>
            </section>

            <section className="row" id="company__section">
                <aside className="col left">
                    <article>
                        <p>As You Have already figured.Bckyrd exist because of our belief in Electronics <a href="">Enthusiast</a>. So We wanna make that <a href=""> profitable</a> to The World.</p>
                        <p className="row">
                            <Link to={"mailto:work@bckyrd.io"} className="btn ">📧 work@bckyrd.io</Link>
                        </p>
                    </article>

                    <article>
                        <a href="/gallery">
                            <img src={download} alt="Company Image" loading="lazy" />
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