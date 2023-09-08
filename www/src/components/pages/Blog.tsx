// Home.tsx
import { Link } from "react-router-dom";
import value from "../../assets/code.jpg"
import flexb from "../../assets/pieces.jpg"


const Blog = () => {

    return (
        <>


            <section className="row" id="approach">
                <aside className="col l">
                    <article>
                        {/* <Link to={""} className="active">its going down </Link> */}
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, debitis. Harum, dolor.</h2>
                        <p>
                            <button id="l" className="f">marketplace</button>
                            <button id="l" className="f">resources</button>
                        </p>
                    </article>
                    <article>
                        <img src={value} alt="" loading="lazy" />
                        <p><Link to={""}>value</Link>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod
                            explicabo rerum cumque eaque autem, maxime minima dolores hic quidem?</p>
                    </article>
                    <article>
                        <img src={flexb} alt="" loading="lazy" />
                        <p><Link to={""}>value</Link>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod
                            explicabo rerum cumque eaque autem, maxime minima dolores hic quidem?</p>
                    </article>
                    <article>
                        <img src={value} alt="" loading="lazy" />
                        <p><Link to={""}>value</Link>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod
                            explicabo rerum cumque eaque autem, maxime minima dolores hic quidem?</p>
                    </article>
                    <article>
                        <img src={value} alt="" loading="lazy" />
                        <p><Link to={""}>value</Link>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod
                            explicabo rerum cumque eaque autem, maxime minima dolores hic quidem?</p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p className="card">
                            what we are doing with the platform. and other stuff we use and do. find out here.
                            Each project is a unique experience. check them out.
                            .</p>
                        <p><Link to={"/"} className="active"><span>&laquo; home </span></Link></p>
                    </article>
                </aside>
            </section>

            <section className="row x" id="footer">
                <aside className="col l">
                    <article className="col">
                        <h2><span>
                            You like how we do our stuff and you have something we are good fit for.
                        </span></h2>
                        <p>
                            <button id="l">Lets Work</button>
                        </p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p className="card">text
                            <br />
                            <Link to={"mailto:work@bckyrd.io"}>read documentation</Link>
                        </p>
                        <p>
                            <Link to={""} id="l" className="active">&raquo; github </Link>
                            <Link to={""} id="l" className="active">&raquo; linkedin </Link>
                            <Link to={""} id="l" className="active">&raquo; threads </Link>
                            <Link to={""} id="l" className="active">&raquo; youtube </Link>
                            <Link to={""} id="l" className="active">&raquo; tiktok </Link>
                        </p>
                    </article>
                </aside>
            </section>
        </>
    );

};


export default Blog;
