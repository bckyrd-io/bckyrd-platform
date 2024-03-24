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
                <aside className="maxed" >
                </aside>
                <aside className="col">
                    <article>
                        <p className="col">Unleash your potential and expertise. Build projects with ease using pre-made kits, showcase your skills, and connect with a passionate tech community.</p>
                    </article>
                    <article className="">
                        <p>
                            <Link href="https://www.youtube.com/@bckyrd-io" className="tag">🧑‍🚀 Discover</Link>
                            <Link href="https://mw.linkedin.com/company/bckyrd-io?trk=similar-pages" className="tag">🎲 Read More</Link>
                        </p>
                    </article>
                </aside>
            </section>

            {/* END SECTION */}
            <section id="__talk" className="row">
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
                            src="/enthusiast.webp" // Correct path, assuming 'hobby.webp' is directly in the 'public' folder
                            alt="Company Logo"
                            loading="lazy"
                            // Assuming you know the dimensions of the image; for example, 500x500
                            width={500}
                            height={500}
                            layout='responsive'
                        />
                        <h4>Connect & Collaborate:</h4>
                        <p className="col">
                            Network with fellow enthusiasts, share knowledge, and work together on groundbreaking projects.
                        </p>
                    </article>

                </aside>
                <aside className="col right">
                    <article className="col">
                        <h2>Step into the future and bring your innovative ideas to life. </h2>
                    </article>
                    <article className="">
                        <p>
                            <Link href="https://play.google.com/store/apps" className="active">Download &nbsp; &nbsp;</Link>
                            <Link href="https://github.com/bckyrd-io/bckyrd-platform" className="active">Github &nbsp; &nbsp;</Link>
                        </p>
                    </article>
                </aside>
            </section>
        </>
    )
}
