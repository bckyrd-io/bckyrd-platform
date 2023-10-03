// Home.tsx
import React, { useState, useEffect } from "react";
import { useScroll, useAnimation, useTransform, useViewportScroll, motion } from "framer-motion";
import { Link } from "react-router-dom";
// page assets
import value from "../../assets/feat-1.webp";
import flex from "../../assets/Makerspace-B-LE21-V3-1080sml_File-1024x576.jpg";
import module from "../../assets/pax-workbench-1.jpg";
import resource from "../../assets/apr16-01-184777571.jpg";
import sponsor from "../../assets/code.jpg";


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
                                Leverage the new industrial revolution to build what's possible now.
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
                        </motion.p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p className="card">
                            <Link to={""} className="active row r"><span className="note"></span></Link>
                            <Link to={""} className="active"><u>Unlock</u></Link> your creativity

                        </p>

                    </article>
                </aside>
            </section>


            <section className="row" id="about">
                <aside className="col">
                    <article>
                        <h1>bckyrd</h1>
                        <Link to={""} className="">👋<u>work@bckyrd.io</u></Link>
                    </article>
                </aside>
            </section>


            <section className="row" id="approach">

                <aside className="col l">
                    <article>
                        <img src={flex} alt="" loading="lazy" />
                        <p> Work where you want, whether in makerspaces 🪫 or your beloved basement. Our platform adapts to your workspace preferences, allowing you to create freely.</p>
                    </article>
                    <article>
                        <img src={resource} alt="" loading="lazy" />
                        <p>Achieve project milestones swiftly 🎮 by collaborating with like-minded enthusiasts. Depending on project scale, you can connect with others to accelerate progress.</p>
                    </article>
                    <article>
                        <img src={module} alt="" loading="lazy" />
                        <p> Share and access resources with ease. Build 🧩 on others' progress effortlessly. Our platform encourages resourceful, modular project development.</p>
                    </article>
                    <article>
                        <img src={value} alt="" loading="lazy" />
                        <p> Reap rewards 💎 from your creative projects. Gain benefits, from potential sponsorship opportunities to scaling your creations for the marketplace.</p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p className="row">
                            <Link to={"/projects"} className="btn f active" id="l">create (+)</Link>
                            <Link to={"/projects"} className="btn f active" id="l">share (4)</Link>
                            <Link to={"/projects"} className="btn f active" id="l">buy (4)</Link>
                            <Link to={"/projects"} className="btn f active" id="l">collaborate (4)</Link>
                        </p>
                    </article>
                </aside>
            </section>


            <section className="row x" id="footer">
                <aside className="col l">
                    <article className="col">
                        <h2>build
                            <Link to={"/"} className="active"> 🕹️Apps</Link> and
                            <Link to={"/"} className="active"> 🤖Embedded</Link> systems. electronics review.
                        </h2>
                        <p><button className="btn" id="l">Lets Work</button></p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p>
                            <Link to={""} id="l" >&raquo; Github </Link>
                        </p>
                        <p>
                            <Link to={""} id="l">&raquo; Youtube </Link>
                        </p>
                        <p>
                            <Link to={""} id="l" >&raquo; TikTok </Link>
                        </p>
                        <p>
                            <Link to={""} id="l">&raquo; Linkedin </Link>
                        </p>
                        <p>
                            <Link to={""} id="l" >&raquo; Threads </Link>
                        </p>
                    </article>
                </aside>
            </section>
        </>
    );

};


export default Home;