<?php

/** 
    require('process.php');
    $projects =$process->getProjects();**/
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <!--SEO META TAGS-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Software Developer, Coding,
        Backyard Workstation, Freelance Agency, Electronics Hacking,  Arduino Iot, Android Apps, Autonomous Machines">
    <meta name="description" content="Discover a Company that works on Systems also freelance 
        with a team that is obbsessed with Electronics and constantly builds on advances.">
    <!--PRE LOAD FONTS-->
    <link rel="preload" href="res/AdobeCleanUX-Light.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="res/host.css">
    <link rel="shortcut icon" href="res/favicon.ico" type="image/x-icon">
    <title>bckyrd :where stuff gets built.</title>
</head>

<body>
    <!--NAVIGATION LINKS TO DESIGN-->
    <nav id="move__top">
        <div class="col l">
            <div id="nav_menu">
                <a href="index.php" class="active">Home</a>
                <a href="pgs/blog.php?project_id=id">Project</a>
                <a href="pgs/blog.php">Blog</a>
            </div>
            <div id="nav_link" onclick="openNav()">
                <span id="first"></span>
                <span id="second"></span>
                <span id="third"></span>
            </div>
        </div>
    </nav>


    <main>
        <!--DESCRIPTIVE BIG TEXT WITH IMAGE -->
        <section>
            <div class="max inverted ">
                <div class="col l">
                    <a href="#service__section">
                        <img style="width:90%; height: auto;" src="res/web.svg" alt="backyard embedded systems">
                    </a>
                </div>
                <div class="col r" id="slide">
                    <h1 class="about">Explore Systems<br>We Build @<a href="#portifolio__section " class="active ">bckyrd</a>
                    </h1>
                    <h1 class="about_text" style="display:none">For Your Next Project Our Team is What You Contact <br> #<a href="https://calendly.com/bckyrd-io">Hire</a>
                    </h1>
                    <h1 class="about_text" style="display:none ">We Are Open To Freelance Projects. To Get Started Select Systems Bellow <br> &darr;<a href="#service__section">Get Started</a>
                    </h1>
                </div>
            </div>
        </section>


        <!--DESCRIPTION OF SERVICES OFFERED AT STORE-->
        <section id="service__section">
            <div class="mid" id="service__accordion">
                <div class="panel active">
                    <h2 class="header">MOBILE</h2>
                    <p class="body">Maximize your flexible work, with responsive systems featuring exceptional mobile UX and cross-platform app development including Android.
                        <a href="https://calendly.com/bckyrd-io" class="active-panel"> Select</a>
                    </p>
                </div>
                <div class="panel">
                    <h2 class="header">EMBEDDED </h2>
                    <p class="body">Advance your device Automation and also remotely controllable IoT, created from Microcontrollers and other Arduino based platforms. <a href="https://calendly.com/bckyrd-io" class="active-panel">Select</a></p>
                </div>
                <div class="panel">
                    <h2 class="header">WEB API</h2>
                    <p class="body">Create your scalable web systems with API backends for effortless integration across multiple interfaces, that are future adaptable. <a href="https://calendly.com/bckyrd-io" class="active-panel">Select</a>
                    </p>
                </div>
                <div class="panel">
                    <h2 class="header">MACHINES</h2>
                    <p class="body">Enhance your performance with Modules designed for Autonomous operation and high Precision. <a href="https://calendly.com/bckyrd-io" class="active-panel">Select</a></p>
                </div>
            </div>
        </section>


        <!--PORTIFOLIO OF OUR PROJECTS GALLERY-->
        <section id="portifolio__section">
            <div class="left-heading">
                <h1><a href="https://github.com/h0zt/bckyrd">PotifoliO</a></h1>
                <p>Big Picture Of Kinds Of Projects We Have Worked On <a class="active" href="pgs/blog.php?project_id=id">view more</a> </p>
            </div>
            <div class="gallery-grid">
                <div class="brick" style="background-image: url('etc/riseapp.png');">
                </div>
                <div class="brick" style="background-image: url('etc/mgmt.png');">
                </div>
                <div class="brick" style="background-image: url('etc/pmodule.png');">
                </div>
                <div class="brick" style="background-image: url('etc/bckyrd.png');">
                </div>
            </div>
        </section>


        <!--UPCOMING EVENTS COLLABORATION-->
        <section id="event__section">
            <div class="mid" id="events">
                <div>
                    <p>Join the hobbyist Platform and work on desirable Projects from your workspace. <br><a href="https://work.bckyrd.io" class="active">Visit</a></p>
                </div>
            </div>
        </section>



        <!--OVERVIEW OF HOW WE WANNA WORK-->
        <section id="approach__section">
            <div class="left-heading">
                <a class="button" id="work" href="https://calendly.com/bckyrd-io/">Let's work</a>
                <p>Our Approach to Collaborative Work To Avoid Compromise On Project. </p>
            </div>
            <div class="max">
                <div class="col-section">
                    <h2>FLEXIBLE</h2>
                    <p>Firstly, break formal protocols to interact casually to better understand project needs.</p>
                </div>
                <div class="col-section">
                    <h2>TEAM</h2>
                    <p>Secondly, scale our freelance team based on project milestones to ensure fast completion.</p>
                </div>
                <div class="col-section">
                    <h2>MODULAR</h2>
                    <p>Thirdly, utilize available resources and ideas to quickly iterate and improve on the prototype.</p>
                </div>
                <div class="col-section">
                    <h2>VALUE</h2>
                    <p>Finally, deliver the required outcome that gains and benefit us to constantly advance the build.</p>
                </div>
            </div>
        </section>


        <!--OUR WORKSTATION VIDEOS CHANNEL-->
        <section id="video__section">
            <div class="mid">
                <iframe src="https://www.youtube.com/embed/qJl9qFrHYm4? 
                    controls">
                </iframe>
            </div>
        </section>

        <!--DESCRIPTIVE BIG TEXT WITH IMAGE -->
        <section id="experience__section">
            <div class="left-heading">
                <h1><a href="https://github.com/h0zt/bckyrd">Background</a></h1>
            </div>
            <div class="max fixed inverted">
                <div class="col l">
                    <div class="item">
                        <img src="res/virtual_reality_ft.svg" alt="backyard electronic item">
                    </div>
                    <div class="item">
                        <img src="res/driller_ft.svg" alt="backyard electronic item">
                    </div>
                    <div class="item">
                        <img src="res/router_ft.svg" alt="backyard electronic item">
                    </div>
                    <div class="item">
                        <img src="res/drone_ft.svg" alt="backyard electronic item">
                    </div>
                    <div class="item">
                        <img src="res/gamer_ft.svg" alt="backyard electronic item">
                    </div>
                    <div class="item">
                        <img src="res/virtual_reality_ft.svg" alt="backyard electronic item">
                    </div>
                </div>
                <div class="col r">
                    <p>We've been
                        <a href="https://dictionary.cambridge.org/dictionary/english/obsession">Obsessed</a> with taking apart Electronics. We'll break that
                        <a href="https://www.scienceworld.ca/resource/take-apart/">Machine</a> and figure out out how it works. It's been our
                        <a href="https://www.lifehack.org/articles/lifestyle/what-means-have-passion.html">Passion </a> for years.
                    </p>
                    <p>we've gained some mad
                        <a href="https://www.urbandictionary.com/define.php?term=mad%20skills">Skills</a> along the way.And We've totally studied these
                        <a href="https://en.wikipedia.org/wiki/Device">Devices</a> and we keep getting damn good. That's how our
                        <a href="https://www.quora.com/Who-are-passionate-engineers">Career</a> was crafted.
                    </p>
                </div>
            </div>
        </section>


        <!--FREQUENTRY ASKED QUESTIONS-->
        <section id="faq__section">
            <div class="mid" id="faq__accordion">
                <div class="panel active">
                    <h2 class="header">FUTURE</h2>
                    <p class="body">Our vision for the future is to create a collaborative workstation where we can work on systems with others, and to constantly improve our platform to drive innovation forward.
                        <a class="active-panel" href="https://medium.com/@mmartiniere/hack-the-world-how-the-maker-movement-is-impacting-innovation-bbc0b46bd820">
                            learn more
                        </a>
                    </p>
                </div>
                <div class="panel">
                    <h2 class="header">RESEARCH</h2>
                    <p class="body">At our facility, we not only explore tech advancements by replicating internet projects and reviewing electronic devices, but we also engage in reverse engineering. Our goal is to find alternatives and share our findings
                        <a class="active-panel" href="https://hbr.org/2021/11/you-can-learn-anything-through-reverse-engineering">
                            learn more
                        </a>
                    </p>
                </div>
                <div class="panel">
                    <h2 class="header">HIRE </h2>
                    <p class="body">We welcome anyone passionate about technology, regardless of their background, whether they are scientists, engineers, handymen, or others. As our job requirements vary with the project scale, we find that freelancers are a good fit.
                        <a class="active-panel" href="https://www.quora.com/How-do-people-become-technology-enthusiasts-geeks-How-do-they-self-learn-engineering-skills">learn more</a>
                    </p>
                </div>
                <div class="panel">
                    <h2 class="header">RECOVERY </h2>
                    <p class="body">Our ability to receive a wide range of electronics devices and machines enables us to build diverse and innovative prototypes. Additionally, by fixing and repurposing these devices, we promote sustainability and reduce electronic waste.
                        <a class="active-panel" href="https://www.reddit.com/r/ZeroWaste/comments/i6ibdw/crafting_corner_for_all_your_repairing/">learn more</a>
                    </p>
                </div>
            </div>
        </section>
    </main>


    <!--THE FOOTER INVERTED DESIGN-->
    <footer>
        <section id="footer__section">
            <div class="max inverted">
                <div class="col l">
                    <a href="#move__top">
                        <img style="width:90%; height: auto;" src="res/error.svg" alt="inventor at backyard">
                    </a>
                </div>
                <div class="col r">
                    <h1>Follow</h1>
                    <p>It Was Written<br> And Its Been Compiled</p>
                    <a href="https://www.linkedin.com/company/bckyrd-io/?viewAsMember=true" class="active"># linkedIn</a>
                    <a href="https://github.com/bckyrd-io?tab=repositories" class="active"># github</a>
                    <a href="https://www.linkedin.com/company/bckyrd-io/?viewAsMember=true" class="active"># linkedIn</a>
                    <a href="https://github.com/bckyrd-io?tab=repositories" class="active"># github</a>
                </div>
            </div>
        </section>
    </footer>


    <script type="text/javascript" src="res/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="res/scrollreveal.min.js"></script>
    <script type="text/javascript" src="res/host.js"></script>

</body>

</html>