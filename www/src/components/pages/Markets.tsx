// Home.tsx
import { Link } from "react-router-dom";
import value from "../../assets/code.jpg"
import flexb from "../../assets/pieces.jpg"


const Markets = () => {

    return (
        <>
            <section className="row" id="approach">
                <aside className="col l">
                    <article>
                        <h2><span>buy from the hackers</span></h2>
                        <p>
                            <button id="l" className="f">share (7)</button>
                            <button id="l" className="f">search (0)</button>
                        </p>
                    </article>
                    <article>
                        <h2>1. building a plotter for the cnc</h2>
                        <img src={value} alt="" loading="lazy" />
                        <p><Link to={""}>🪄 status, complete</Link>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod
                            explicabo rerum cumque eaque autem, maxime minima dolores hic quidem?</p>
                    </article>
                    <article>
                        <h2>1. building a plotter for the cnc</h2>
                        <img src={value} alt="" loading="lazy" />
                        <p><Link to={""}>🪄 status, complete</Link>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod
                            explicabo rerum cumque eaque autem, maxime minima dolores hic quidem?</p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p className="card">
                            buy from these stuff that you have here. or check them out for inspiration.</p>
                        <p><Link to={"/"} className="active"><span>&laquo; home </span></Link></p>
                    </article>
                </aside>
            </section>

        </>
    );

};


export default Markets;
