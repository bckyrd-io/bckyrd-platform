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
            <section className="row">
                <aside className="col w">
                    <article>
                        <h1>Leverage the next tech revolution To Reap the benefits From the Enthusiast </h1>
                        <p className="row">
                            {/* <ButtonLogin />
                            <ButtonLogout />
                            <AuthProfile /> */}
                            <Link to={""} className="btn active">Get Started</Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row" id="full__bg">
                <aside className="col w" id="full__bg">
                    <article>
                        {/* <p>Leverage the next tech revolution To Reap the benefits From the Enthusiast </p> */}
                    </article>
                </aside>
            </section>


            <section className="row">
                <aside className="col left">
                    <article>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cum aut accusamus unde repudiandae accusantium eius nisi rerum non porro! Quaerat tenetur veniam corrupti adipisci culpa quo nisi eius, quis nemo reprehenderit asperiores commodi earum reiciendis. Velit inventore amet labore non maxime sed, facere, consequuntur quaerat voluptates at corrupti in. </p>
                    </article>
                </aside>
            </section>

            <section className="row">
                <aside className="col left">
                    {/* <article>
                        <a href="">
                            <img src={video} alt="" loading="lazy" />
                            <p>The Next Big Thing Going On With The Startups  In The Scene Of Technology From The Fourth Industrial Revolution</p>
                        </a>
                    </article> */}
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

                <aside className="col right">
                    <article className="features">
                        <p className="row">
                            <Link to={"/add"} className="btn lighter">Add New</Link>
                            <Link to={"/add"} className="btn light tag">Search</Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row">
                <aside className="col w">
                    <article>
                        <h1>Lets Work </h1>
                        <p>
                            <Link to={"/add"} className="btn active tag">Contact</Link>
                            <Link to={"/add"} className="btn ">About</Link>
                            <Link to={"/add"} className="btn ">Register</Link>
                            <Link to={"/add"} className="btn ">Careers</Link>
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