// Home.tsx
import { Link } from "react-router-dom";
import value from "../../assets/code.jpg"


const Explore = () => {

    return (
        <>
            

           

            <section className="row margin">
                <aside className="col left">
                    <article>
                        <img src={value} alt="" loading="lazy" />
                        <p><b> hosting today hackathon in bt</b></p>
                        <p className="row">
                            <span className="tag">time: <i>2323/2323/23</i> </span> 
                            <span className="tag">space: <i>40 people</i> </span>
                        </p>
                    </article>
                    <article>
                        <img src={value} alt="" loading="lazy" />
                        <p><b> hosting today hackathon in bt</b></p>
                        <p className="row">
                            <span className="tag">time: <i>2323/2323/23</i> </span> 
                            <span className="tag">space: <i>40 people</i> </span>
                        </p>
                    </article>
                    
                </aside>
                <aside className="col right">
                    <article>
                        <p>keep on building stuff with other get benfit from it and progress on 
                            other inventions
                        </p>
                       
                        <p className="row">
                            <Link to={""} className="btn active">Home</Link>
                            <Link to={""} className="btn ">Search</Link>
                        </p>
                    </article>
                </aside>
            </section>

        </>
    );

};


export default Explore;
