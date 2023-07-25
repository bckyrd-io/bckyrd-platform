import { Link } from "react-router-dom";
import { GoLinkExternal, GoChevronLeft, GoCommentDiscussion } from "react-icons/go";
import bckyrd from '../assets/bckyrd.png';
import pmodule from '../assets/pmodule.png';
import riseapp from '../assets/riseapp.png';
import web from '../assets/web.svg';

const Blog = () => {
    return (
        <>
            <main className="row article" id="main">
                <section className="col l">
                    <img src={bckyrd} loading="lazy" alt="image web" />
                    <p>We Are developing a web platform tool that streamlines backyard development and collaboration. Think of it as a GitHub for all types of developers, not just coders. Our platform will enable faster development and enhance collaboration
                        among backyard innovators
                    </p>
                </section>
                <section className="col r">
                    <h1>
                        <Link to={"github.com"}>#bckyrd</Link></h1>
                    <p className="h2" > we are working on tools to progress creativity done at backyards
                    </p>
                    <div className="icon row">
                        <Link to={"/"} className="active" ><GoChevronLeft /></Link>
                        <Link to={"/blog"} className="" ><GoLinkExternal /></Link>
                    </div>
                </section>
            </main>

            <main className="row article">
                <section className="col l">
                    <img src={riseapp} loading="lazy" alt="image web" />
                    <p>Our latest app is specifically designed for individuals who frequently travel with their workspaces and need to stay productive while on-the-go. With our app, you can easily access essential tools and resources from your everyday carry
                        bag, allowing you to work efficiently regardless of where you are or what you need to accomplish.</p>
                </section>
                <section className="col r">
                    <h1><Link to={""}>#riseApp</Link> </h1>
                    <p className="h2">productivity app for those who travel with their workspace
                    </p>
                    <div className="icon row">
                        <Link to={"/"} className="active" ><GoChevronLeft /></Link>
                        <Link to={"/blog"} className="" ><GoLinkExternal /></Link>
                    </div>
                </section>
            </main>

            <main className="row article">
                <section className="col l">
                    <img src={pmodule} loading="lazy" alt="image web" />
                    <p>Our module uses multiple micropower station combined to reduce power
                        failures with an Android app for efficient energy allocation while providing engineers with a simplified interface for complete control over the process. .</p>
                </section>
                <section className="col r">
                    <h1><Link to={""}>#pModule</Link> </h1>
                    <p className="h2"> makes controlling multiple micropower stations easier on android interface
                    </p>
                    <div className="icon row">
                        <Link to={"/"} className="active" ><GoChevronLeft /></Link>
                        <Link to={"/blog"} className="" ><GoLinkExternal /></Link>
                    </div>
                </section>
            </main>

            <main className="row">
                <section className="col l">
                    <p>you like how we do our stuff. And you wanna work together.
                        just tell us.
                    </p>
                    <Link><button className="btn">ring <GoCommentDiscussion /></button></Link>
                </section>
            </main>

            <main className="row footer">
                <section className="col l">
                    <Link to={"#main"}>
                        <img src={web} loading="lazy" alt="image web" />
                    </Link>
                </section>
                <section className="col r">
                    <h1><Link to={""}>YouFollow</Link></h1>
                    <p className="h2">we were lomoso ,no we are mosolo.<Link to={"https://threads.com/bckyrd.io"} className="active" ># Threads</Link>
                        <Link to={"https://github.com/bckyrd-io?tab=repositories"} className="active" ># Github</Link>
                        <Link to={"https://www.linkedin.com/company/bckyrd-io/?viewAsMember=true"} className="active" ># LinkedIn</Link>
                    </p>
                </section>
            </main>

        </>
    );
};


export default Blog;