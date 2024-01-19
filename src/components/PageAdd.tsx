// Home.tsx
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FormAdd from "./FormAdd";
import profileImage from "../assets/download.jpg";


const AddPage = () => {

    return (
        <>
            <section className="row margin">
                <aside className="col left">
                    <article>
                        <p className="col">Lorem ipsum dolor sit amet consectetur adipisicing elit.  cum sunt incidunt, dicta, libero provident? Fuga dolorum autem, accusamus quaerat natus repudiandae eum explicabo!</p>
                    </article>
                    <article className="tag select">
                        <Link to={"/"}>
                            <p><b>Add Space</b></p>
                            <p>select here if you wanna share resources with others on condition</p>
                        </Link>
                    </article>
                    <article className="tag select">
                        <Link to={"/"}>
                            <p><b>Add challenge</b></p>
                            <p>Select to upload what you need solved for you</p>
                        </Link>
                    </article>
                    <article className="tag select">
                        <Link to={"/"}>
                            <p><b>Add Product</b></p>
                            <p>select here to upload stuff you wanna share on marketplace</p>
                        </Link>
                    </article>

                </aside>
                <aside className="col right">
                    <article>
                        <Link to={"/"} className="btn active tag">Return Home</Link>
                    </article>
                    <article className="row profile">
                        <div className="profileImage" style={{ backgroundImage: `url(${profileImage})` }}></div>
                        <div className="col">
                            <p><b>username</b></p>
                            <p>just a guy codng</p>
                        </div>
                    </article>
                </aside>
            </section>

        </>
    );

};


export default AddPage;