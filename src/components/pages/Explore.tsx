// Home.tsx
import { Link } from "react-router-dom";
import value from "../../assets/code.jpg"
import flexb from "../../assets/pieces.jpg"


const Explore = () => {

    return (
        <>
         
            <section className="row">
                <aside className="col l">
                    <article>
                        <h2><Link to={""}>marketplace</Link></h2>
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
                        <p className="row">
                            <Link to={"/projects"} className="btn f" id="l">projects (4)</Link>
                            <Link to={"/projects"} className="btn f" id="l"> &; </Link>
                        </p>
                    </article>
                </aside>
            </section>

        </>
    );

};


export default Explore;
