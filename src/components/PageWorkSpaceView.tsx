// Home.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/apr16-01-184777571.jpg";
import challenge from "../assets/paysafe-1.jpg";
import space1 from "../assets/space1.jpg";
import space2 from "../assets/space2.jpg";
import space3 from "../assets/space3.jpg";
import space4 from "../assets/space4.jpg";
// Authentication Links



const WorkSpaceView = () => {

    return (
        <>

            <section className="row" id="challenge__section">
                <aside className="col w" id="full__bg">
                    <article>
                        {/* <p>Leverage the next tech revolution To Reap the benefits From the Enthusiast </p> */}
                    </article>
                </aside>
            </section>


            <section className="row" id="approach__section">
                <aside className="col left">
                    <article>
                        <h2>First Challenge 1</h2>
                        <p>Join a community where enthusiasts turn ideas into reality. Collaborate, create, and commercialize your projects in a dynamic marketplace.</p>
                        <p>Explore the opportunities and join our innovative community. Whether you're a hobbyist, a tech enthusiast, or a professional, there's a place for you here.</p>
                        <p className="row">
                            <Link to={""} className="btn active">apply</Link>
                            <Link to={"/"} className="btn lnk">Back</Link>
                        </p>
                    </article>

                </aside>
            </section>


        </>
    );

};


export default WorkSpaceView;


interface FormDataItem {
    id: number;
    title: string;
    additionalContent: string; // Adjust the type based on your API response
    image: string; // Assuming the image path is stored in the 'image' field
}