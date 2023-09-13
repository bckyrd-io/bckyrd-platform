// Home.tsx
import { Link } from "react-router-dom";


const SignUp = () => {

    return (
        <>
            <section className="row x" id="footer">
                <aside className="col l">
                    <article className="col">
                        <h2><span>Join And get more benefit you can share with others</span></h2>
                    </article>
                </aside>
                <aside className="col r">
                    <article>
                        <p>
                            <Link to={"/"} className="active">&laquo; home </Link>

                        </p>
                        <form action="" className="col">
                            <input type="text" placeholder="enter username" name="" id="" />
                            <input type="text" placeholder="enter password" name="" id="" />
                            <input type="text" placeholder="enter email" name="" id="" />
                        </form>
                        <p>
                            <button id="l">Enter</button>
                        </p>


                    </article>
                </aside>
            </section>
        </>
    );

};


export default SignUp;
