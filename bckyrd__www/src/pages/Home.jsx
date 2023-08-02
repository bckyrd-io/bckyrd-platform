import { Link } from "react-router-dom";
import { useState } from "react";
import { GoCode, GoCommentDiscussion, GoLinkExternal } from "react-icons/go";
import web from "../assets/web.svg";
import error from "../assets/error.svg";
import code from "../assets/code.jpg";
import router from "../assets/router_ft.svg";
import drone from "../assets/drone_ft.svg";
import pad from "../assets/gamer_ft.svg";
import vr from "../assets/virtual_reality_ft.svg";
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
            <img src={web} loading="lazy" alt="image web" />
          </Link>
        </section>
        <section className="col r ">
          <h1 className="h1">
            <Link to={"work"}>
              where stuff <br /> gets build
            </Link>
          </h1>
          <p className="h2">
            building a platform for ...
            <Link className="no-clr" to={""}>
              #bckyrd
            </Link>{" "}
            <Link className="no-clr" to={""}>
              #platform
            </Link>
          </p>
          <div className="icon row">
            <Link to={"/"} className="active">
              <GoCommentDiscussion />
            </Link>
            <Link to={"/blog"} className="">
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
          <p>
            only scratched the surface of what we can do. Still interested to
            understand. Arent You ?
          </p>
          <div className="icon row">
            <Link to={"/blog"}>
              <button className="btn">
                ViewMore <GoLinkExternal />
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
            <img src={code} loading="lazy" alt="image web" />
          </Link>
        </section>
        <section className="col r ">
          <h1>
            <Link to={""}>WhatsHere</Link>
          </h1>
          <p>catch the latest builds. Always doing something at bckyrd</p>
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
          <p>
            Always looking for new collaborators, so if you have a project you
            think we would be a good fit for
          </p>
          <div className="icon row">
            <Link to={"https://calendly.com/bckyrd-io/"}>
              <button className="btn">
                LetsWork <GoCommentDiscussion />
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
          <iframe
            src="https://www.youtube.com/embed/qJl9qFrHYm4? 
                    controls"
          ></iframe>
          <div className="row review">
            <img src={pad} loading="lazy" alt="image web" />
            <img src={vr} loading="lazy" alt="image web" />
            <img src={router} loading="lazy" alt="image web" />
            <img src={drone} loading="lazy" alt="image web" />
          </div>
        </section>
        <section className="col r ">
          <h1>
            <Link to={""}>ThatSetup</Link>
          </h1>
          <p>
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
            <img src={error} loading="lazy" alt="image web" />
          </Link>
        </section>
        <section className="col r ">
          <h1>
            <Link to={""}>Follow</Link>
          </h1>
          <p className="h2">
            we were lomoso ,no we are mosolo.
            <Link
              to={"https://github.com/bckyrd-io?tab=repositories"}
              className="active"
            >
              # Github
            </Link>
            <Link
              to={
                "https://www.linkedin.com/company/bckyrd-io/?viewAsMember=true"
              }
              className="active"
            >
              # LinkedIn
            </Link>
          </p>
        </section>
      </article>
    </>
  );
};

export default Home;
