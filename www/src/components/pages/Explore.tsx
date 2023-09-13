// Home.tsx
import { Link } from "react-router-dom";
import value from "../../assets/code.jpg"
import flexb from "../../assets/pieces.jpg"


const Explore = () => {

    return (
        <>


            <section className="row" id="approach">
                <aside className="col l">
                    <article>
                        <p>
                            <Link to={"/projects"}><button id="l" className="f">projects (4)</button></Link>
                            <button id="l" className="f">search (0)</button>
                        </p>
                    </article>
                    <article>
                        <h2>1. poly design studio offers free space for hobbyist to work on their design</h2>
                        <img src={value} alt="" loading="lazy" />
                        <p><Link to={""}>📍 MUBAS, blantyre</Link>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod
                            explicabo rerum cumque eaque autem, maxime minima dolores hic quidem?</p>
                    </article>
                    <article>
                        <h2>2. poly design studio offers free space for hobbyist to work on their design</h2>
                        <img src={value} alt="" loading="lazy" />
                        <p><Link to={""}>📍 MUBAS, blantyre</Link>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod
                            explicabo rerum cumque eaque autem, maxime minima dolores hic quidem?</p>
                    </article>
                    <article>
                        <h2>3. poly design studio offers free space for hobbyist to work on their design</h2>
                        <img src={value} alt="" loading="lazy" />
                        <p><Link to={""}>📍 MUBAS, blantyre</Link>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod
                            explicabo rerum cumque eaque autem, maxime minima dolores hic quidem?</p>
                    </article>
                    
                </aside>
                <aside className="col r">
                    <article>
                        <p className="card">
                            Suggested makerspaces you might like to with at. some have free services
                            .</p>
                        <p><Link to={"/"} className="active"><span>&laquo; home </span></Link></p>
                    </article>
                </aside>
            </section>

        </>
    );

};


export default Explore;
