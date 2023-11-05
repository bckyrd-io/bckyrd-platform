// Home.tsx
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import value from "../../assets/apr16-01-184777571.jpg";
import space from "../../assets/makerspaces-story-7.jpg";


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
                                Platform that progress to build stuff in unusual spaces. Reap benefits other enthusiast </span>
                        </p>
                        <p className="row">
                            <Link to={""} className="btn active">Sign In</Link>
                            <Link to={""} className="btn light">Contact</Link>
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
                        <a href="">
                            <img src={value} alt="" loading="lazy" />
                            <p><b> hosting today hackathon in bt</b></p>
                            <p className="row">
                                <span className="tag">time: <i>2323/2323/23</i> </span>
                                <span className="tag">space: <i>40 people</i> </span>
                            </p>
                        </a>
                    </article>
                    <article>
                        <img src={space} alt="" loading="lazy" />
                        <p><b>makerspace available in your area </b></p>
                        <p className="row">
                            <span className="tag">location: <i>blantyre</i> </span>
                            <span className="tag">tools: <i>cnc, 3d printers, lab</i> </span>
                        </p>
                    </article>

                </aside>
                <aside className="col right">
                    <article className="features">
                        <p>Select the article and see what you can do from whats available:</p>
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