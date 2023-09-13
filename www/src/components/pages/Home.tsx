// Home.tsx
import React, { useState, useEffect } from "react";
import { useScroll, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
// page assets
import value from "../../assets/Laboratoř-při-extrémním-přetaktování-kdy-byla-na-Core-i9-13900K-dosažena-frekvence-9008-MHz-upoutavka.jpg";
import flex from "../../assets/Security-Intel-Hacking-Lab_SHO1129.webp";
import module from "../../assets/pax-workbench-1.jpg";
import resource from "../../assets/csm_macgyver_ba09a60a26.jpg";


const Home = () => {

    return (
        <>
            <section className="row x" id="main">
                <aside className="col l">
                    <article className="col">
                        <h2><span>
                            An Ultimate Platform for Enthusiasts Who Build Freely from Ideas
                        </span></h2>
                        <p>
                            <Link to={"/explore"}><button id="l">Explore</button></Link>
                            <Link to={"/signup"}><button id="r">SignUp</button></Link>
                        </p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p className="card">
                            <span>Discover the boundless resources waiting to bring your ideas to life. Prepare to be amazed as we make the connections.</span>
                            <br /> <br />
                            <Link to={"mailto:work@bckyrd.io"}>Contact Us: work@bckyrd.io</Link>
                        </p>

                    </article>
                </aside>
            </section>

            <section className="row" id="about">
                <aside className="col l">
                    <article>
                        <h1>bckyrd</h1>
                        <p>
                            Join our creative community! Easily access tools, knowledge, and a marketplace for your projects. Whether for profit or fun, your creative journey starts here <br />
                            <b>👇  overall in your backyard </b>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row" id="faq">
                <aside className="col l">
                    <article>
                        <iframe
                            src="https://www.youtube.com/embed/qJl9qFrHYm4?rel=0&autoplay=1"
                            title="YouTube Video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p className="card">
                            "Every Project Offers a Distinct Journey 🚀. Explore Our Platform's Endeavors 🛠️, Tools 🔧, and More 🌟."
                            .</p>
                        <p><Link to={"/blog"} className="active"><span>view &raquo; blog </span></Link></p>
                    </article>
                </aside>
            </section>

            <section className="row" id="review">
                <aside className="col l">
                    <article>
                        {/* <Link to={""} className="active">its going down </Link> */}
                        <h2>build from where you want and advance from where they left off</h2>

                    </article>
                </aside>
                <aside className="col r">
                </aside>
            </section>

            <section className="row" id="approach">
                <aside className="col l">
                    <article>
                        <img src={flex} alt="" loading="lazy" />
                        <p><Link to={""}><b>1. Flexible:</b></Link> Work where you want, whether in makerspaces or your beloved basement. Our platform adapts to your workspace preferences, allowing you to create freely.</p>
                    </article>
                    <article>
                        <img src={module} alt="" loading="lazy" />
                        <p><Link to={""}><b>2. Modular:</b></Link> Share and access resources with ease. Build on others' progress effortlessly. Our platform encourages resourceful, modular project development.</p>
                    </article>
                    <article>
                        <img src={resource} alt="" loading="lazy" />
                        <p><Link to={""}><b>3. Faster:</b></Link> Achieve project milestones swiftly by collaborating with like-minded enthusiasts. Depending on project scale, you can connect with others to accelerate progress.</p>
                    </article>
                    <article>
                        <img src={value} alt="" loading="lazy" />
                        <p><Link to={""}><b>4. Value:</b></Link> Reap rewards from your creative projects. Gain benefits, from potential sponsorship opportunities to scaling your creations for the marketplace.</p>
                    </article>
                </aside>

                <aside className="col r">
                    <article>
                        <p><Link to={"/"}>🪫 powerful  features  with approach to get you project going: </Link></p>
                        <p>
                            <Link to={"/projects"}><button id="l" className="f">Project</button></Link>
                            <Link to={"/places"}><button id="l" className="f">Workspace</button></Link>
                            <Link to={"/markets"}> <button id="l" className="f">Innovation</button></Link>
                            <Link to={"/resources"}><button id="l" className="f">Community</button></Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row" id="review">
                <aside className="col l">
                    <article>
                        <h1>work</h1>
                        <p>
                            simple we, only work with passionate team to create cool electronics,
                            from <Link to={"/"} className="active"><b>🕹️Apps</b></Link> that are adaptable to api's
                            and <Link to={"/"} className="active"><b>🤖Embedded</b></Link> systems with iot integrated
                        </p>
                    </article>
                </aside>
                <aside className="col r">
                </aside>
            </section>

            <section className="row x" id="footer">
                <aside className="col l">
                    <article className="col">
                        <h2><span>
                            You like how we do our stuff and you have something we are good fit for.
                        </span></h2>
                        <p>
                            <button id="l">Lets Work</button>
                        </p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <br />
                        <p className="card"><span>developers contributes to the platform so that we can
                            build more together.</span>
                            <br />
                            <Link to={"mailto:work@bckyrd.io"}>read documentation</Link>
                        </p>
                        <p>
                            <Link to={""} id="l" className="active">&raquo; github </Link>
                        </p>
                        <p>
                            <Link to={""} id="l" className="active">&raquo; linkedin </Link>
                        </p>
                        <p>
                            <Link to={""} id="l" className="active">&raquo; youtube </Link>
                        </p>
                        <p>
                            <Link to={""} id="l" className="active">&raquo; tiktok </Link>
                        </p>
                        <p>
                            <Link to={""} id="l" className="active">&raquo; threads </Link>
                        </p>
                    </article>
                </aside>
            </section>
        </>
    );

};


export default Home;