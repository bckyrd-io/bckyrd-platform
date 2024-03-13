import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <>
            {/* REVEAL SECTION */}
            <section id="__start">
                <aside className=" maxed">
                    <article>
                        <h1>Empower your tech reviewing journey with the next industrial revolution.</h1>
                        <p className="row">
                            <Link href="/about" className="btn active">Get Started </Link>
                            {/* <Link href="/on" className="tag">🔅</Link> */}
                        </p>
                    </article>
                </aside>
            </section>

            {/* IMAGE SECTION */}
            <section id="__back" >
                <aside className="maxed"  >
                </aside>
                <aside className="col">
                    <article>
                        <p className="col">Unleash your potential and expertise. Build projects with ease using pre-made kits, showcase your skills, and connect with a passionate tech community.</p>
                    </article>
                </aside>
            </section>

            {/* POST SECTION */}
            <section id="__post" className="row reverse">
                <aside className="col left">
                    <article>
                        <Image
                            src="/robot.webp" // Correct path, assuming 'hobby.webp' is directly in the 'public' folder
                            alt="Company Logo"
                            loading="lazy"
                            // Assuming you know the dimensions of the image; for example, 500x500
                            width={500}
                            height={500}
                            // If you need the image to be responsive and maintain aspect ratio, use layout='responsive'
                            layout='responsive'
                        />
                        <h4> Streamlined Workflow:</h4>
                        <p className="col">
                            Focus on content creation. Pre-built kits and intuitive tools simplify the project building process
                        </p>
                    </article>
                    <article>
                        <Image
                            src="/enthusia.jpg" // Correct path, assuming 'hobby.webp' is directly in the 'public' folder
                            alt="Company Logo"
                            loading="lazy"
                            // Assuming you know the dimensions of the image; for example, 500x500
                            width={500}
                            height={500}
                            // If you need the image to be responsive and maintain aspect ratio, use layout='responsive'
                            layout='responsive'
                        />
                        <h4>Connect & Collaborate:</h4>
                        <p className="col">
                            Network with fellow enthusiasts, share knowledge, and work together on groundbreaking projects.
                        </p>
                    </article>
                    <article>
                        <Image
                            src="/worksho.jpg" // Correct path, assuming 'hobby.webp' is directly in the 'public' folder
                            alt="Company Logo"
                            loading="lazy"
                            width={500}
                            height={500}
                            layout='responsive'
                        />
                        <h4>Expand Your Influence:</h4>
                        <p className="col">
                            Showcase your work to a wider audience and establish yourself as a leader in the tech review community.
                        </p>
                    </article>

                </aside>
                <aside className="col right">
                    <article className="col">
                        <p> <Link href="/events" className="tag">🧑‍🚀 Discover</Link>
                            <Link href="/challenges" className="tag">🎲 Read More</Link>
                        </p>
                    </article>
                </aside>
            </section>

            {/* END SECTION */}
            <section id="__talk" className="row reverse">
                <aside className="col right" >
                    <article className="col">
                        <Link href="/" className="active">🤖 APP INSTALL</Link>
                    </article>
                </aside>
                <aside className="col">
                    <article className="col">
                        <h2>Step into the future and bring your innovative ideas to life. </h2>
                    </article>
                </aside>

            </section>
        </>
    )
}
