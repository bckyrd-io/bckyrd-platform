// Home.tsx
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import value from "../assets/1_s3G5nsnRWplMhct3HU6wVg.png";
import space from "../assets/makerspaces-story-7.jpg";
import ButtonLogin from "./ButtonLogin";
import ButtonLogout from "./ButtonLogout";
import AuthProfile from "./authProfile";

const Home = () => {

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
                        <h1>Leverage on the next tech revolution to build</h1>
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
                        <p>OTHERS ARE WORKING HERE, ENGAGE ON STUFF THEY SHARE</p>
                        <p className="row">
                            <Link to={"/new"} className="btn active">New</Link>
                            <Link to={"/search"} className="btn ">Search</Link>
                        </p>
                    </article>
                </aside>
            </section>

        </>
    );

};


export default Home;