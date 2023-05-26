<?php

/** *
    require('../process.php');
    $process = new Process();
    $articles =$process->getArticles();**/
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <!--SEO TAGS-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Software Developer, Coding,
        Backyard Workstation, Freelance Agency, Electronics Hacking,  Arduino Iot, Android Apps, Autonomous Machines">
    <!--PRE LOAD FONTS-->
    <link rel="preload" href="../res/gt-walsheim-regular-webfont.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="../res/GT Walsheim Light.woff" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="../res/host.css">
    <link rel="shortcut icon" href="../res/favicon.ico" type="image/x-icon">
    <title>bckyrd :blog. our experience on projects we are working on</title>
</head>

<body>
    <!--NAVIGATION LINKS TO DESIGN-->
    <nav id="move__top">
        <div class="col l">
            <div id="nav_menu">
                <a href="../index.php">Home</a>
                <a href="blog.php?project_id=id" class="active">Project</a>
                <a href="blog.php">Blog</a>
            </div>
            <div id="nav_link" onclick="openNav()">
                <span id="first"></span>
                <span id="second"></span>
            </div>
        </div>
    </nav>



    <main>
        <!--OUR WORKSTATION VIDEOS CHANNEL-->
        <section id="post__section">
            <div class="left-heading">
                <h1><a href=""># OurPlatform</a></h1>
                <p>WE ARE WORKING ON THE TOOLS TO PROGRESS CREATIVITY DONE IN BACKYARDS
                </p>
            </div>
            <div class="mid">
                <img src="../etc/estate.png" alt="post">
                <p>We're developing a web platform tool that streamlines backyard development and collaboration. Think of it as a GitHub for all types of developers, not just coders. Our platform will enable faster development and enhance collaboration
                    among backyard innovators
                    <a class="active" href="https://work.bckyrd.io">link</a>
                </p>
            </div>
        </section>

        <section id="post__section">
            <div class="left-heading">
                <h1><a href=""># GoboWebApp</a></h1>
                <p>A SAAS PROJECT THAT WE WORKED ON TO INTERGRATE MANAGEMENT SYSTEMS
                </p>
            </div>
            <div class="mid">
                <img src="../etc/mgmt.png" alt="post">
                <p>"After creating multiple systems, we noticed similarities among them and decided to develop a management project. We've packaged it online to simplify the process and reduce costs. Our aim is to provide an efficient solution that streamlines
                    system management for businesses.
                    <a class="active" href="https://bckyrd.io/host/mgmt">link</a>
                </p>
            </div>
        </section>

        <section id="post__section">
            <div class="left-heading">
                <h1><a href=""># Electronics.2</a></h1>
                <p> YOU CAN PROTOTYPE YOUR COOL STUFF FROM EWASTE THEN TO PRODUCTS LATER
                </p>
            </div>
            <div class="mid">
                <img src="../etc/embedded.png" alt="post">
                <p>Many believe that having all the tools and materials is necessary to create cool things, but we've learned otherwise. By starting with e-waste and building prototypes, we've found that you can refine and create usable products. You
                    don't need everything from the start. Start with what you have and let creativity guide you. <a class="active" href="https://bckyrd.io/host/mgmt">View</a>
                </p>
            </div>
        </section>

        <section id="post__section">
            <div class="left-heading">
                <h1><a href=""># RiseApp</a></h1>
                <p>PRODUCTIVITY APP FOR THOSE WHO TRAVEL WITH THEIR WORKSPACES
                </p>
            </div>
            <div class="mid">
                <img src="../etc/riseapp.png" alt="post">
                <p>Our latest app is specifically designed for individuals who frequently travel with their workspaces and need to stay productive while on-the-go. With our app, you can easily access essential tools and resources from your everyday carry
                    bag, allowing you to work efficiently regardless of where you are or what you need to accomplish.</p>
            </div>
        </section>

        <section id="post__section">
            <div class="left-heading">
                <h1><a href="">PModule</a></h1>
                <p>MAKES CONTROLLING MULTIPLE MICRO POWER STATION EASIER ON ANDROID INTERFACE
                </p>
            </div>
            <div class="mid">
                <img src="../etc/pmodule.png" alt="post">
                <p>Our module uses multiple micropower station combined to reduce power failures with an Android app for efficient energy allocation while providing engineers with a simplified interface for complete control over the process. .</p>
            </div>
        </section>

        <section id="post__section" hidden>
            <div class="left-heading">
                <h1><a href=""># EstateWebsite</a></h1>
                <p>FREELANCED ON A FAMILY BUSINESS WEBSITE. FOR THEIR ONLINE PRESENCE TO EXTENDED REACHABILITY
                </p>
            </div>
            <div class="mid">
                <img src="../etc/estate" alt="post">
                <p>We worked on a family business website to enhance its online presence and ensure maximum reachability. By utilizing digital marketing strategies such as SEO, social media marketing, and email campaigns, I helped the business to connect
                    with a larger audience, boosting engagement and driving sales.</p>
        </section>

        <section id="post__section">
            <div class="left-heading">
                <h1><a href=""># Cydt</a></h1>
                <p>WE FREELANCED ON A YOUTH ORGANISATION WEBSITE THAT DRIVES TRAFFIK FOR DONATIONS
                </p>
            </div>
            <div class="mid">
                <img src="../etc/cydt.png" alt="post">
                <p>We developed a website for a youth organization, highlighting their mission and showcasing their work. The site also features a donation portal, improving the organization's online presence and facilitating contributions from interested
                    supporters.
                    <a class="active" href="https://www.cydt.org">link</a>
                </p>
            </div>
        </section>
    </main>



    <footer>
        <!--THE FOOTER INVERTED DESIGN-->
        <section id="footer__section">
            <div class="max inverted">
                <div class="col l">
                    <a href="#move__top">
                        <img style="width:90%; height: auto;" src="../res/error.svg" alt="inventor at backyard">
                    </a>
                </div>
                <div class="col r">
                    <h1>Follow</h1>
                    <p>It Was Written<br> And Its Been Compiled</p>
                    <a href="https://www.linkedin.com/company/bckyrd-io/?viewAsMember=true" class="active">#linkedIn
                    </a>
                    <a href="https://github.com/bckyrd-io?tab=repositories" class="active">#github </a>
                </div>
            </div>
        </section>
    </footer>

    <script src="../res/jquery-3.3.1.min.js"></script>
    <script src="../res/scrollreveal.min.js"></script>
    <script src="../res/host.js"></script>

</body>

</html>