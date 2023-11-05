// Home.tsx
import { Link } from "react-router-dom";
import value from "../../assets/code.jpg"


const Projects = () => {

    return (
        <>
            <section className="row margin">
                <aside className="col left">
                    <article>
                        <img src={value} alt="" loading="lazy" />
                    </article>
                </aside>
                <aside className="col right">
                    <article>
                        <h1>Build the space</h1>
                    </article>
                    <article>
                        {/* <p>keep on building stuff with other get benfit from it and progress on
                                other inventions
                            </p> */}
                        <p className="row">
                            <Link to={""} className="btn active">Next</Link>
                            <Link to={""} className="btn">home</Link>
                        </p>
                    </article>
                </aside>
            </section>

        </>
    );

};


export default Projects;
