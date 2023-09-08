// Home.tsx
import { Link } from "react-router-dom";
import value from "../../assets/code.jpg"
import flexb from "../../assets/pieces.jpg"


const Home = () => {

    return (
        <>
            <section className="row x" id="main">
                <aside className="col l">
                    <article className="col">
                        <h2><span>
                            the ultimate platform for enthusiast that build from ideas freely.
                        </span></h2>
                        <p>
                            <button id="l">Explore</button>
                            <Link to={"/signup"}><button id="r">Join</button></Link>
                        </p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        {/* <p className="img"></p> */}
                        <p className="card">
                            😏ssdfadas  <br />
                            <Link to={""}>work@bckyrd.io</Link>
                        </p>
                    </article>
                </aside>
            </section>

            <section className="row" id="about">
                <aside className="col l">
                    <article>
                        <h1>bckyrd</h1>
                        <p>
                            <Link to="/apps" className="active" id="l">🕹️ Apps</Link>
                            <Link to="/embedded" className="active">🤖 Embedded</Link>
                        </p>
                        <p>
                            <b>We are a team of experienced embedded systems and app developers who also freelance.</b> We help our clients create innovative products that improve people's lives.
                            Our expertise includes:
                        </p>

                    </article>
                </aside>
            </section>

            <section className="row" id="faq">
                <aside className="col l">
                    <article>
                        <img src={value} alt="" loading="lazy" />
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p className="card">
                            what we are doing with the platform. and other stuff we use and do. find out here.
                            Each project is a unique experience. check them out.
                            .</p>
                        <p><Link to={"/blog"} className="active"><span>view &raquo; projects </span></Link></p>
                    </article>
                </aside>
            </section>



            <section className="row" id="review">
                <aside className="col l">
                    <article>
                        {/* <Link to={""} className="active">its going down </Link> */}
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, debitis. Harum, dolor.</h2>
                        <p>
                            <button id="l" className="f">marketplace</button>
                            <button id="l" className="f">resources</button>
                        </p>
                    </article>
                </aside>
                <aside className="col r">
                </aside>
            </section>

            <section className="row" id="approach">
                <aside className="col l">
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
                        <p className="card">🛰️ a place you can just work freely as an enthusiat</p>
                    </article>
                </aside>
            </section>

            <section className="row" id="review">
                <aside className="col l">
                    <article>
                        <h1>work</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis asperiores,
                            eos ex repudiandae ullam reprehenderit. Eum itaque blanditiis, illo nam dolores numquam deleniti maxime
                            distinctio, alias officiis voluptatem laborum natus quos omnis iusto qui veritatis delectus ipsa cumque!
                            Iste quos magni cumque delectus mollitia illum tenetur deleniti distinctio dolorum dolores.</p>
                        <p>
                            <Link to={""} className="active" id="l">🧑‍💻Hires</Link>
                            <Link to={""} className="active">💰Investors</Link>
                        </p>
                    </article>
                </aside>
                <aside className="col r">
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
                        <br />
                        <p className="card">text
                            <br />
                            <Link to={"mailto:work@bckyrd.io"}>read documentation</Link>
                        </p>
                        <p>
                            <Link to={""} className="active">github, </Link>
                            <Link to={""} className="active">linkedin, </Link>
                            <Link to={""} className="active">threads, </Link>
                            <Link to={""} className="active">youtube, </Link>
                            <Link to={""} className="active">tiktok </Link>
                        </p>
                    </article>
                </aside>
            </section>
        </>
    );

};


export default Home;
