// Home.tsx
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormAdd from "./FormAdd";


const Home = () => {

    return (
        <>
            <section className="row margin">
                <aside className="col left">
                    <article>
                        <FormAdd />
                    </article>
                </aside>
                <aside className="col right">
                    <article>
                        <Link to={"/"} className="active">Home</Link>
                    </article>
                </aside>
            </section>

        </>
    );

};


export default Home;