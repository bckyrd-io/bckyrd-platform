// Home.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <section className="row bg">
                <aside className="col left">
                </aside>
                <aside className="col right">
                    <article>
                        <p>
                            <b> <span>
                                platform that progresses you to build anything, anywhere. and reap the benefits From the Enthusiasts
                            </span></b>
                        </p>
                        <p className="row">
                            <ButtonLogin />
                            <ButtonLogout />
                            <AuthProfile />
                            <Link to={""} className="btn active">SignIn</Link>
                            <Link to={"calendly.com/bckyrd-io"} className="btn light">Explore</Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row reverse">
                <aside className="col left">
                    <article>
                        <h1>we Leverage on the next tech revolution to build Now</h1>
                    </article>
                </aside>
                <aside className="col right">
                    <article>
                        <Link to={"linkedin.com/bckyrd-io"} className="active">About / Contacts</Link>
                    </article>
                </aside>
            </section>

            <section className="row margin">
                <aside className="col left">
                    {
                        formData.length > 0 && (
                            formData.map((item) => (
                                <article key={item.id}>
                                    <a href="">
                                        <img src={`${item.image}`} alt="" loading="lazy" />
                                        <p>
                                            <b>{item.title}</b>
                                        </p>
                                        <p className="row">
                                            <span className="tag">time: <i>{item.additionalContent}</i></span>
                                            <span className="tag">time: <i>{item.additionalContent}</i></span>
                                        </p>
                                    </a>
                                </article>
                            ))

                        )
                    }
                </aside>

                <aside className="col right">
                    <article className="features">
                        <p>OTHERS ARE WORKING HERE, ENGAGE ON STUFF THEY SHARE</p>
                        <p className="row">
                            <Link to={"/add"} className="btn active">New</Link>
                            <Link to={"/search"} className="btn ">Search</Link>
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