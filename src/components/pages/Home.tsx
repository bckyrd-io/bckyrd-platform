// Home.tsx
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import value from "../../assets/Security-Intel-Hacking-Lab_SHO1107.webp";


const Home = () => {

    return (
        <>
            <section className="row bg">
                <aside className="col left">

                </aside>
                <aside className="col right">
                    <article>
                        <p>
                            <span>
                                platform with enthusiast that progress to build stuff in unusual spaces. Find
                                necessities here!</span>
                        </p>
                        <p className="row">
                            <Link to={""} className="btn active">Sign In</Link>
                            <Link to={""} className="btn light">Contact Us</Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row reverse">
                <aside className="col left">
                    <article>
                        <h1>Leverage on the next tech revolution to build</h1>
                    </article>
                </aside>
                <aside className="col right">
                    <article>
                        <Link to={"/"} className="active">About</Link>
                    </article>
                </aside>
            </section>

            <section className="row margin">
                <aside className="col left">
                    <article>
                        <img src={value} alt="" loading="lazy" />
                        <p><b> hosting today hackathon in bt</b></p>
                        <p className="row">
                            <span className="tag">time: <i>2323/2323/23</i> </span>
                            <span className="tag">space: <i>40 people</i> </span>
                        </p>
                    </article>
                    <article>
                        <img src={value} alt="" loading="lazy" />
                        <p><b> hosting today hackathon in bt</b></p>
                        <p className="row">
                            <span className="tag">time: <i>2323/2323/23</i> </span>
                            <span className="tag">space: <i>40 people</i> </span>
                        </p>
                    </article>

                </aside>
                <aside className="col right">
                    <article>
                        <p>keep on building stuff with other get benfit from it and progress on
                            other inventions
                        </p>

                        <p className="row">
                            <Link to={""} className="btn active">New</Link>
                            <Link to={""} className="btn ">Search</Link>
                        </p>
                    </article>
                </aside>
            </section>

        </>
    );

};


export default Home;