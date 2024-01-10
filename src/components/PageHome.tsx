// Home.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/apr16-01-184777571.jpg";
import challenge from "../assets/paysafe-1.jpg";
import space1 from "../assets/space1.jpg";
import space2 from "../assets/space2.jpg";
import space3 from "../assets/space3.jpg";
import space4 from "../assets/space4.jpg";
// Authentication Links
import ButtonLogin from "./ButtonLogin";
import ButtonLogout from "./ButtonLogout";
import AuthProfile from "./AuthProfile";


const Home = () => {
    const [formData, setFormData] = useState < FormDataItem[] > ([]);
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
                        <h1>Leverage the next tech revolution To Reap the benefits From the Enthusiast </h1>
                        <p className="row">
                            {/* <ButtonLogin />
                            <ButtonLogout />
                            <AuthProfile /> */}
                            <Link to={""} className="btn active">Get Started</Link>
                            <Link to={""} className="btn lnk">Contact Us </Link>

                        </p>
                    </article>
                </aside>
            </section>

            <section className="row" id="challenge__section">
                <aside className="col w" id="full__bg">
                    <article>
                        {/* <p>Leverage the next tech revolution To Reap the benefits From the Enthusiast </p> */}
                    </article>
                </aside>
            </section>


            <section className="row" id="approach__section">
                <aside className="col left">
                    <article>
                        <h2>Features</h2>
                        <p>Join a community where enthusiasts turn ideas into reality. Collaborate, create, and commercialize your projects in a dynamic marketplace.</p>
                    </article>
                    <article className="features">
                        <p className="row">

                            <Link to={"/addWorkSpace"} className="btn active tag">Add More</Link>
                            <Link to={"/workSpace"} className="btn light tag">Spaces</Link>
                            <Link to={"/marketplace"} className="btn light tag">Products</Link>
                            <Link to={"/challenge"} className="btn light tag">Challenges</Link>
                        </p>
                    </article>
                </aside>
            </section>


            <section className="row" id="workspace__section">
                <aside className="col left" id="space_1">
                    <article>
                        <a href="">
                            <img src={space1} alt="" loading="lazy" />
                        </a>
                    </article>
                    {
                        formData.length > 0 && (
                            formData.map((item) => (
                                <article key={item.id}>
                                    <a href="">
                                        <img src={`${item.image}`} alt="" loading="lazy" />
                                        <p><b>{item.title}</b></p>
                                        <p className="row">
                                            <span className="tag">time: <i>{item.additionalContent}</i></span>
                                            <span className="tag">play: <i>{item.additionalContent}</i></span>
                                        </p>
                                    </a>
                                </article>
                            ))
                        )
                    }
                </aside>
                <aside className="col left" id="space_1">
                    <article>
                        <a href="">
                            <img src={space2} alt="" loading="lazy" />
                        </a>
                    </article>
                    {
                        formData.length > 0 && (
                            formData.map((item) => (
                                <article key={item.id}>
                                    <a href="">
                                        <img src={`${item.image}`} alt="" loading="lazy" />
                                        <p><b>{item.title}</b></p>
                                        <p className="row">
                                            <span className="tag">time: <i>{item.additionalContent}</i></span>
                                            <span className="tag">play: <i>{item.additionalContent}</i></span>
                                        </p>
                                    </a>
                                </article>
                            ))
                        )
                    }
                </aside>
                <aside className="col left" id="space_1">
                    <article>
                        <a href="">
                            <img src={space3} alt="" loading="lazy" />
                        </a>
                    </article>
                    {
                        formData.length > 0 && (
                            formData.map((item) => (
                                <article key={item.id}>
                                    <a href="">
                                        <img src={`${item.image}`} alt="" loading="lazy" />
                                        <p><b>{item.title}</b></p>
                                        <p className="row">
                                            <span className="tag">time: <i>{item.additionalContent}</i></span>
                                            <span className="tag">play: <i>{item.additionalContent}</i></span>
                                        </p>
                                    </a>
                                </article>
                            ))
                        )
                    }
                </aside>
                <aside className="col left" id="space_1">
                    <article>
                        <a href="">
                            <img src={space4} alt="" loading="lazy" />
                        </a>
                    </article>
                    {
                        formData.length > 0 && (
                            formData.map((item) => (
                                <article key={item.id}>
                                    <a href="">
                                        <img src={`${item.image}`} alt="" loading="lazy" />
                                        <p><b>{item.title}</b></p>
                                        <p className="row">
                                            <span className="tag">time: <i>{item.additionalContent}</i></span>
                                            <span className="tag">play: <i>{item.additionalContent}</i></span>
                                        </p>
                                    </a>
                                </article>
                            ))
                        )
                    }
                </aside>

            </section>

            <section className="row" id="company__section">
                <aside className="col left">
                    <article>
                        <h1>Let's Work</h1>
                    </article>
                    <article>
                        <p>Explore the opportunities and join our innovative community. Whether you're a hobbyist, a tech enthusiast, or a professional, there's a place for you here.</p>
                        <p className="row">
                            <Link to={"/register"} className="btn active">Register Profile</Link>
                            <Link to={"/about"} className="btn lnk">About Us</Link>
                        </p>
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
                            <Link to={"/events"} className="btn lnk">Register For Events</Link>
                            <Link to={"/careers"} className="btn lnk">Careers As An Enthusiast</Link>
                            <Link to={"/challenges"} className="btn lnk">Solve Sponsored Challenges</Link>
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