

import { Link } from "react-router-dom";
// assets
import herofix from "../assets/bg.webp";
import space from "../assets/space1.jpg";



const Index = () => {

    return (
        <>
            {/* REVEAL SECTION */}
            <section id="__start">
                <aside className=" maxed">
                    <article>
                        <h1>Leverage next industrial revolution to benefit from electronics Enthusiast</h1>
                    </article>
                    <article>
                        <p className="">
                            <Link to={""} className="btn active">Login</Link>
                            <Link to={"/"} className="btn">⚡</Link>

                        </p>
                    </article>
                </aside>
            </section>

            {/* IMAGE SECTION */}
            <section id="__back" >
                <aside className="maxed" style={{ backgroundImage: `url(${herofix})` }}>
                </aside>
                <aside className="col">
                    <article>
                        <p className="col">Get started , with your electronics projects you wanna see . See the posts and post for others to Benefit </p>                  </article>
                </aside>
            </section>

            {/* POST SECTION */}
            <section id="__post" className="row reverse">
                <aside className="col left">
                    <article>
                        <img src={space} alt="space" loading="lazy" />
                        <Link to={"/"}>Just A Sample Title Here</Link>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores facere omnis debitis provident iusto minima quos. Consequatur, nesciunt ipsam?</p>
                    </article>
                </aside>
                <aside className="col right">
                    <article>
                        <p className="row">
                            <Link to={"/challenges"} className="tag">+ Post</Link>
                            <Link to={"/events"} className="tag">Search</Link>
                            <Link to={"/challenges"} className="tag">Show More</Link>

                        </p>
                    </article>
                </aside>
            </section>

            {/* eND SECTION */}
            <section id="__end">
                <aside className="col">
                    <article>
                        <h1>About </h1>
                    </article>
                    <article>
                        <p className="col">Step into the space where you will be able to roll out your product as an electronics enthusiast Quickly </p>
                        <p><Link to={"mailto:work@bckyrd.io"}>Get The App Here 💎</Link></p>
                    </article>
                </aside>
            </section>

            <section id="__talk">
                <aside className="col">
                    <article className="col">
                        <Link to={""} className="active">Lets Work</Link>
                        <Link to={""} className="active">About Company</Link>
                        <Link to={""} className="active">Our Values</Link>
                    </article>
                </aside>
            </section>
        </>
    )

}


export default Index;