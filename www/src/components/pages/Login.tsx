// Home.tsx
import { Link } from "react-router-dom";


const Login = () => {

    return (
        <>
            <section className="row x" id="footer">
                <aside className="col l">
                    <article className="col">
                        <h2><span>get back to doing your thing. more features are coming</span></h2>
                        <p>
                            <form action="" className="col">
                                <input type="text" placeholder="enter username" name="" id="" />
                                <input type="text" placeholder="enter password" name="" id="" />
                            </form>
                        </p>
                        <p>
                            <button id="l">Finish Login</button>
                            <button id="f">google</button>
                        </p>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <br />
                        <p className="card">
                            get back to doing your thing. more features are coming
                            <br /> <br />
                            <Link to={"mailto:work@bckyrd.io"}>Signup Here</Link>
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


export default Login;
