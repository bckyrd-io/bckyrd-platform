// Home.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonLogin from "./ButtonLogin";
import ButtonLogout from "./ButtonLogout";
import AuthProfile from "./AuthProfile";
import video from "../assets/Photography-Equipment-The-Gear-You-Need-artificial-light-726x1088.jpg";

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
            <section className="row bg reverse">
                <aside className="col w">
                    <article>
                        <h1>Leverage the next tech revolution To Reap the benefits From the Enthusiast </h1>
                        <p className="row">
                            {/* <ButtonLogin />
                            <ButtonLogout />
                            <AuthProfile /> */}
                            <Link to={""} className="btn active tag">Get Started</Link>
                            <Link to={"calendly.com/bckyrd-io"} className="btn lnk">Contacts / About </Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row margin">
                <aside className="col left">
                    <article>
                        <a href="">
                            <img src={video} alt="" loading="lazy" />
                            <h4>The Next Big Thing Going On With The Startups  In The Scene Of Technology From The Fourth Industrial Revolution</h4>
                            <p className="row">
                                <span className="tag"><b>time:</b> text</span>
                                <span className="tag">play: <i>text</i></span>
                            </p>
                            <p>
                                <Link to={""} className="btn active">add</Link>
                            </p>
                        </a>
                    </article>
                    <article>
                        <a href="">
                            <img src={video} alt="" loading="lazy" />
                            <h4>The Next Big Thing Going On With The Startups In The Scene Of Technology From The Fourth Industrial Revolution</h4>
                            <p className="row">
                                <span className="tag"><b>time:</b> text</span>
                                <span className="tag">play: <i>text</i></span>
                            </p>
                            <p>
                                <Link to={""} className="btn lighter">add</Link>
                            </p>
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
                                        <p>
                                            <Link to={""} className="btn active">add</Link>
                                        </p>
                                    </a>
                                </article>
                            ))

                        )
                    }
                </aside>

                <aside className="col right">
                    <article className="features">
                        {/* <Link to={""} className="active"><h1>Explore</h1></Link> */}
                        <p>
                            <span>
                                platform that 👋 progresses you to build anything, anywhere.
                            </span>
                        </p>
                        <p className="row">
                            <Link to={"/add"} className="btn lighter">View More</Link>
                            <Link to={"/add"} className="btn light tag">Search</Link>
                            <Link to={"/add"} className="btn light tag">Buy</Link>
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