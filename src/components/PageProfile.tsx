// Home.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import space1 from "../assets/space1.jpg";
import space2 from "../assets/space2.jpg";
import space3 from "../assets/space3.jpg";
import space4 from "../assets/space4.jpg";



const Profile = () => {

    return (
        <>
            <section className="row" id="company__section">
                <aside className="col left">
                    <article>
                        <img src={space1} alt="Company Image" loading="lazy" />
                        <p className="row">Explore the opportunities and join our innovative community. Whether you're a hobbyist, a tech enthusiast, or a professional, there's a place for you here.</p>
                    </article>
                    <article>
                        <img src={space1} alt="Company Image" loading="lazy" />
                        <p className="row">Explore the opportunities and join our innovative community. Whether you're a hobbyist, a tech enthusiast, or a professional, there's a place for you here.</p>
                    </article>
                    <article>
                        <img src={space1} alt="Company Image" loading="lazy" />
                        <p className="row">Explore the opportunities and join our innovative community. Whether you're a hobbyist, a tech enthusiast, or a professional, there's a place for you here.</p>
                    </article>
                    <article>
                        <img src={space1} alt="Company Image" loading="lazy" />
                        <p className="row">Explore the opportunities and join our innovative community. Whether you're a hobbyist, a tech enthusiast, or a professional, there's a place for you here.</p>
                    </article>

                </aside>
                <aside className="col right">
                    <article>
                        <p className="row">
                            <Link to={"/"} className="btn active tag">Back Home</Link>
                            <Link to={"/careers"} className="btn active tag">Careers As An Enthusiast</Link>
                            <Link to={"/challenges"} className="btn active tag">Solve Sponsored Challenges</Link>
                            <Link to={"/challenges"} className="btn active tag">Know About Company</Link>
                        </p>
                    </article>
                </aside>
            </section>
        </>
    );

};


export default Profile;
