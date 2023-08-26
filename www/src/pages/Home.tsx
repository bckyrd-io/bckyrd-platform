import { Link } from "react-router-dom";
import build from "../assets/code.jpg";
import riseapp from "../assets/riseapp.png";


const Home = () => {

    return (
        <>
        
            <article id='main'>
                <section className='col l img'>
                </section>
                <section className='col r'>
                    <h1>get started</h1>
                    <p className='card'>created for people who love to build . <br />
                        <Link to={""} className="active">
                            read documentation
                        </Link></p>
                    <p>
                        <Link to={""}>Blog 🤔</Link>
                        <Link to={""}>start 🚀</Link>
                    </p>
                </section>
            </article>

            <article id="about">
                <section className='col l'>
                    <p>  Code for android and crossplatform intergratable with web Api on
                        multiple Interfaces{" "}</p>
                    <button>Code App</button>
                    <p>  Build with arduino platforms and other microcontrollers on IoT,
                        Autonomous Robotics{" "}
                        <Link to={""}>
                            #Precision
                        </Link></p>
                    <button>Make Machine</button>
                </section>
            </article>

            <article id='portifolio'>
                <section className='col l'>
                    <Link to={""}>
                        <img src={riseapp} alt="bckyrd-riseapp" loading="lazy" />
                    </Link>
                    <Link to={""}>
                        <img src={riseapp} alt="bckyrd-riseapp" loading="lazy" />
                    </Link>
                </section>
                <section className='col r'>
                    <p className='card'>only scratched the surface of what we can do. Still interested to
                        understand.</p>
                </section>
            </article>

            <article id="about">
                <section className='col l'>
                    <p>  bigger picture of what we create</p>
                    <Link to={""}>👇</Link>
                </section>
            </article>

            <article id='portifolio'>
                <section className='col l'>
                    <Link to={""}>
                        <img src={build} alt="bckyrd-riseapp" loading="lazy" />
                    </Link>
                    <Link to={""}>
                        <img src={build} alt="bckyrd-riseapp" loading="lazy" />
                    </Link>
                    <Link to={""}>
                        <img src={build} alt="bckyrd-riseapp" loading="lazy" />
                    </Link>
                    <Link to={""}>
                        <img src={build} alt="bckyrd-riseapp" loading="lazy" />
                    </Link>
                </section>
                <section className='col r'>
                    <h1>
                        <Link to={""}>freelance</Link>
                    </h1>
                    <p className="card">
                        catch the latest builds. Always doing something at bckyrd
                    </p>
                </section>
            </article>

            <article id="faq">
                <section className='col l'>
                    <p>The team we work with depends on job type. So Freelancers are good
                        fit to work with now.{" "}
                        <Link className="no-clr" to={""}>
                            #freelance
                        </Link></p>
                    <button>Hires</button>
                    <p> you like how we do our stuff and you wanna work together. hit us
                        on our social
                    </p>
                    <button>Investors</button>
                </section>
            </article>

            <article id='follow'>
                <section className='col l img'>
                </section>
                <section className='col r'>
                    <p className='card'> break apart machines to review the inside workings. And use what we
                        figure to build our own projects. . <br />
                        <Link to={""} className="active">
                            company profile
                        </Link></p>
                    <p>
                        <Link to={""}>github 🤔</Link>
                        <Link to={""}>linkedin 🚀</Link>
                    </p>
                </section>
            </article>

        </>
    );

};


export default Home;
