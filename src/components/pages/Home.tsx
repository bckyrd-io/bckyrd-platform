// Home.tsx
import React, { useState, useEffect } from "react";
import { useScroll, useAnimation, useTransform, useViewportScroll, motion } from "framer-motion";
import { Link } from "react-router-dom";
// page assets
import value from "../../assets/Laboratoř-při-extrémním-přetaktování-kdy-byla-na-Core-i9-13900K-dosažena-frekvence-9008-MHz-upoutavka.jpg";
import flex from "../../assets/Security-Intel-Hacking-Lab_SHO1129.webp";
import module from "../../assets/pax-workbench-1.jpg";
import resource from "../../assets/csm_macgyver_ba09a60a26.jpg";


const Home = () => {


    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);


    return (
        <>
            <section className="row x" id="main">
                <aside className="col l">
                    <article className="col">
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate="visible"
                        >
                            <span>
                                An Ultimate Platform for Enthusiasts Who Build Freely from Ideas
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link to={"/signup"} className="btn" id="l">SignUp</Link>
                            <Link to={"/explore"} className="btn" id="r">Start Build</Link>
                        </motion.p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p className="card">
                            buy from these stuff that you have here. or check them out for inspiration.</p>
                    </article>
                </aside>
            </section>


            <section className="row" id="about">
                <aside className="col">
                    <article>
                        <h1>bckyrd</h1>
                        {/* <Link to={""} className="active"> work@bckyrd.io</Link> */}
                    </article>
                </aside>
            </section>


            <section className="row" id="approach">
                <aside className="col l">
                    <article>
                        <img src={flex} alt="" loading="lazy" />
                        <h2>faster</h2>
                        <p> Work where you want, whether in makerspaces or your beloved basement. Our platform adapts to your workspace preferences, allowing you to create freely.</p>
                    </article>
                    <article>
                        <img src={module} alt="" loading="lazy" />
                        <h2>flexible</h2>
                        <p> Share and access resources with ease. Build on others' progress effortlessly. Our platform encourages resourceful, modular project development.</p>
                    </article>
                    <article>
                        <img src={resource} alt="" loading="lazy" />
                        <h2>value</h2>
                        <p>Achieve project milestones swiftly by collaborating with like-minded enthusiasts. Depending on project scale, you can connect with others to accelerate progress.</p>
                    </article>
                    <article>
                        <img src={value} alt="" loading="lazy" />
                        <h2>modular</h2>
                        <p> Reap rewards from your creative projects. Gain benefits, from potential sponsorship opportunities to scaling your creations for the marketplace.</p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p className="row">
                            <Link to={"/projects"} className="btn f active" id="l">marketplace (4)</Link>
                            <Link to={"/projects"} className="btn f active" id="l">resources (4)</Link>
                            <Link to={"/projects"} className="btn f active" id="l">makerspace (4)</Link>
                            <Link to={"/projects"} className="btn f active" id="l">collaboration (4)</Link>
                        </p>
                    </article>
                </aside>
            </section>


            <section className="row x" id="footer">
                <aside className="col l">
                    <article className="col">
                        <h2><span>build and review electronics
                            <Link to={"/"} className="active"><b>🕹️Apps</b></Link> intergrated  with
                            <Link to={"/"} className="active"><b>🤖Embedded</b></Link> systems
                        </span>
                        </h2>
                        <p><button className="btn" id="l">Lets Work</button></p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
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