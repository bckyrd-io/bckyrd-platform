import { Link } from "react-router-dom";
import { useState } from "react";
import { GoCode, GoCommentDiscussion, GoLinkExternal } from "react-icons/go";
import developer from "../assets/code.jpg";
import social from "../assets/adhc-header-desktop.png.twimg.1920.png";
import build from "../assets/APIv2_Launch_masthead_d.jpg.twimg.1920.jpg";
import lab from "../assets/Photography-Equipment-The-Gear-You-Need-artificial-light-726x1088.jpg";
import pmodule from "../assets/pmodule.png";
import riseapp from "../assets/riseapp.png";
import team from "../assets/team.png";
import value from "../assets/value.png";
import modular from "../assets/modular.png";
import flexible from "../assets/flexible.png";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      <article className="row top" id="main">
        <section className="col l">
          <Link to={"#service"}>
            <img src={build} loading="lazy" alt="image web" />
          </Link>
        </section>
        <section className="col r ">
          <h1 className="h1">
            <Link to={"work"}>
              where stuff <br /> is build
            </Link>
          </h1>
          <p className="h2">created for people who love to build ...</p>

          <div className="icon row">
            <Link to={"/"} className="active animate-bounce">
              <GoCommentDiscussion />
            </Link>
            <Link to={"/blog"} className="animate-bounce">
              <GoLinkExternal />
            </Link>
          </div>
        </section>
      </article>

      <article className="row">
        <section className="col l accordion" id="work__accordion">
          <div
            className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleClick(0)}
          >
            <button className="accordion-button">
              EMBEDDED MACHINE <GoCode />
            </button>
            <p className="accordion-content">
              Build with arduino platforms and other microcontrollers on IoT,
              Autonomous Robotics{" "}
              <Link className="no-clr" to={""}>
                #Precision
              </Link>
            </p>
          </div>
          <div
            className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            <button className="accordion-button">
              MOBILE APP <GoCode />
            </button>
            <p className="accordion-content">
              Code for android and crossplatform intergratable with web Api on
              multiple Interfaces{" "}
              <Link className="no-clr" to={""}>
                #Ux
              </Link>
            </p>
          </div>
        </section>
      </article>

      <article className="row article">
        <section className="col l">
          <img src={pmodule} loading="lazy" alt="image web" />
          <img src={riseapp} loading="lazy" alt="image web" />
        </section>
        <section className="col r ">
          <p className="h2">
            only scratched the surface of what we can do. Still interested to
            understand.
          </p>
          <div className="icon row">
            <Link to={"/blog"}>
              <button className="btn animate-bounce">
                View <GoLinkExternal />
              </button>
            </Link>
          </div>
        </section>
      </article>

      <article className="row article">
        <section className="col l">
          <p>bigger picture of what we create</p>
        </section>
      </article>

      <article className="row ">
        <section className="col l ">
          <Link to={"#main"}>
            <img src={developer} loading="lazy" alt="image web" />
          </Link>
        </section>
        <section className="col r ">
          <h1>
            <Link to={""}>freelance</Link>
          </h1>
          <p className="h2">
            catch the latest builds. Always doing something at bckyrd
          </p>
        </section>
      </article>

      <article className="row">
        <section className="col l">
          <p>you like how we do our stuff. #bckyrd</p>
        </section>
      </article>

      <article className="row article ">
        <section className="col l">
          <img src={flexible} loading="lazy" alt="image web" title="" />
          <img src={team} loading="lazy" alt="image web" title="" />
          <img src={modular} loading="lazy" alt="image web" title="" />
          <img src={value} loading="lazy" alt="image web" title="" />
        </section>
        <section className="col r ">
          <p className="h2">
            Always looking for new collaborators, so if you have a project you
            think we would be a good fit for
          </p>
          <div className="icon row">
            <Link to={"https://calendly.com/bckyrd-io/"}>
              <button className="btn animate-bounce">
                Work <GoCommentDiscussion />
              </button>
            </Link>
          </div>
        </section>
      </article>

      <article className="row article">
        <section className="col l">
          <p>Scroll below to Explore</p>
        </section>
      </article>

      <article className="row ">
        <section className="col l ">
          <div className="row review">
            <img src={lab} loading="lazy" alt="image web" />
          </div>
          <iframe
            src="https://www.youtube.com/embed/qJl9qFrHYm4? 
                    controls"
          ></iframe>
        </section>
        <section className="col r ">
          <h1>
            <Link to={""}>reviews</Link>
          </h1>
          <p className="h2">
            break apart machines to review the inside workings. And use what we
            figure to build our own projects.
          </p>
          <p>
            {" "}
            <Link className="no-clr" to={""}>
              #electronics
            </Link>{" "}
            <Link className="no-clr" to={""}>
              #enthusiast
            </Link>{" "}
          </p>
        </section>
      </article>

      {/* Rest of your code */}
      <article className="row">
        <section className="col l accordion" id="faq__accordion">
          <div
            className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleClick(0)}
          >
            <button className="accordion-button">Hiring</button>
            <p className="accordion-content">
              The team we work with depends on job type. So Freelancers are good
              fit to work with now.{" "}
              <Link className="no-clr" to={""}>
                #freelance
              </Link>
            </p>
          </div>
          <div
            className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            <button className="accordion-button">Investor</button>
            <p className="accordion-content">
              you like how we do our stuff and you wanna work together. hit us
              on our social
            </p>
          </div>
        </section>
      </article>

      <article className="row footer ">
        <section className="col l ">
          <Link to={"#main"}>
            <img src={social} loading="lazy" alt="image web" />
          </Link>
        </section>
        <section className="col r ">
          <h1>
            <Link to={""}>follow</Link>
          </h1>
          <p className="h2">we were lomoso ,no we are mosolo.</p>
          <p>
            <Link
              to={"https://github.com/bckyrd-io?tab=repositories"}
              className="active"
            >
              {" "}
              # Github
            </Link>
            <Link
              to={
                "https://www.linkedin.com/company/bckyrd-io/?viewAsMember=true"
              }
              className="active"
            >
              {" "}
              # LinkedIn
            </Link>
          </p>
        </section>
      </article>
    </>
  );
};

export default Home;
