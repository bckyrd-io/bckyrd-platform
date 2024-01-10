// Home.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import space1 from "../assets/space1.jpg";
import space2 from "../assets/space2.jpg";
import space3 from "../assets/space3.jpg";
import space4 from "../assets/space4.jpg";


const MarketPlace = () => {
  

    return (
        <>
            <section className="row">
                <aside className="col w">
                    <article>
                        <h1>MarketPlace </h1>
                        <p>get all the lastest projects to buy from the inventors</p>
                        <p className="row">
                            <Link to={"/search"} className="btn light tag">Search</Link>
                            <Link to={"/"} className="btn lnk">Home </Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row" id="workspace__section">
                <aside className="col left" id="space_1">
                    <article>
                        <a href="">
                            <img src={space1} alt="" loading="lazy" />
                        </a>
                    </article>
                    {/* {
                        formData.length > 0 && (
                            formData.map((item) => (
                                <article key={item.id}>
                                    <a href="">
                                        <img src={`${item.image}`} alt="" loading="lazy" />
                                        <p><b>{item.title}</b></p>
                                        <p className="row">
                                            <span className="tag">time: <i>{item.additionalContent}</i></span>
                                            <span className="tag">play: <i>{item.additionalContent}</i></span>
                                        </p>
                                    </a>
                                </article>
                            ))
                        )
                    } */}
                </aside>
                <aside className="col left" id="space_1">
                    <article>
                        <a href="">
                            <img src={space2} alt="" loading="lazy" />
                        </a>
                    </article>
                </aside>
                <aside className="col left" id="space_1">
                    <article>
                        <a href="">
                            <img src={space3} alt="" loading="lazy" />
                        </a>
                    </article>
                </aside>
                <aside className="col left" id="space_1">
                    <article>
                        <a href="">
                            <img src={space4} alt="" loading="lazy" />
                        </a>
                    </article>
                </aside>

            </section>

        </>
    );

};


export default MarketPlace;
