import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <>
            {/* REVEAL SECTION */}
            <section id="__start">
                <aside className=" maxed">
                    <article>
                        <h1>Leverage next industrial revolution to benefit from electronics Enthusiast</h1>
                    </article>
                    <article>
                        <p className="">
                            <Link href="/about" className="btn active">Get Started </Link>
                            <Link href="/on" className="tag">🔅</Link>
                        </p>
                    </article>
                </aside>
            </section>

            {/* IMAGE SECTION */}
            <section id="__back" >
                <aside className="maxed" style={{ backgroundImage: `url("./worksho.jpg")` }}>
                </aside>
                <aside className="col">
                    <article>
                        <p className="col">Get started , with your electronics projects you wanna see . See the posts and post for others to Benefit </p>                  </article>
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
                        <h4>Leverage </h4>
                        <p>modern workshop equipped with CNC machines and robotic arms, emphasizing precision, automation, and the seamless integration of technology in the manufacturing process. </p>
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
                        <h4>Enthusiastic </h4>
                        <p>Working with enthusiasts ensures passion, creativity, dedication, high energy, and a deep commitment to quality and innovation in every task.</p>
                    </article>
                    <article>
                        <Image
                            src="/simplify.webp" // Correct path, assuming 'hobby.webp' is directly in the 'public' folder
                            alt="Company Logo"
                            loading="lazy"
                            // Assuming you know the dimensions of the image; for example, 500x500
                            width={500}
                            height={500}
                            // If you need the image to be responsive and maintain aspect ratio, use layout='responsive'
                            layout='responsive'
                        />
                        <h4>Simplicity </h4>
                        <p>sharpen fundamentals, inspire creativity, and build confidence for tackling more complex challenges efficiently.</p>
                    </article>
                    <article>
                        <Image
                            src="/profit.webp" // Correct path, assuming 'hobby.webp' is directly in the 'public' folder
                            alt="Company Logo"
                            loading="lazy"
                            // Assuming you know the dimensions of the image; for example, 500x500
                            width={500}
                            height={500}
                            // If you need the image to be responsive and maintain aspect ratio, use layout='responsive'
                            layout='responsive'
                        />
                        <h4>Profitable </h4>
                        <p>
Enthusiast brands are profitable because their authentic passion attracts loyal customers, fostering a community that values quality and innovation, driving sales and growth..</p>
                    </article>

                </aside>
                <aside className="col right">
                    <article className="row">

                        <Link href="/events" className="tag">🧑‍🚀 Discover</Link>
                        <Link href="/challenges" className="tag">🎲 Read More</Link>

                    </article>
                </aside>
            </section>

            {/* END SECTION */}
            <section id="__talk" className="row reverse">
                <aside className="col right" >
                    <article className="">
                        <Link href="/" className="active">Download App 💎</Link>
                    </article>
                </aside>
                <aside className="col">
                    <article className="col">
                        <h2>Step into the space where you will be able to roll out your product as an electronics enthusiast Quickly </h2>

                    </article>
                </aside>

            </section>
        </>
    )
}
