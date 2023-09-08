// Home.tsx
import { Link } from "react-router-dom";


const SignUp = () => {

    return (
        <>
            <section className="row x" id="footer">
                <aside className="col l">
                    <article className="col">
                        <h2><span>
                            You like how we do our stuff and you have something we are good fit for.
                        </span></h2>
                        <p>
                            <button id="l">Finnish </button>
                        </p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p className="card">text
                            <br />
                            <Link to={"mailto:work@bckyrd.io"}>Login Here</Link>
                        </p>
                        <p>
                            <Link to={"/"} className="active">&laquo; home </Link>
                           
                        </p>
                    </article>
                </aside>
            </section>
        </>
    );

};


export default SignUp;
