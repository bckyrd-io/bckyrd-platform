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
    <link rel="preload" href="res/AdobeCleanUX-Light.woff2" as="font" 
        type="font/woff2" crossorigin>
    <link rel="stylesheet" href="res/host.css">
    <link rel="shortcut icon" href="res/favicon.ico" type="image/x-icon">
    <title>bckyrd / where stuff gets built.</title>
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
                <span id="third" style="width:60%"></span>
            </div>
        </div>
    </nav>


    <main>
<!--DESCRIPTIVE BIG TEXT WITH IMAGE -->
        <section>
            <div class="max inverted ">
                <div class="col l">
                    <a href="#service__section">
                        <img style="width:96%"
                            src="res/progressive_green.svg" alt="backyard embedded systems">
                    </a>
                    
                </div>
                <div class="col r">
                    <h1 class="about">Where Stuff<br>Gets Built <a href="#service__section" class="active">@bckyrd</a></h1>
                    <h1 hidden class="about">Explore Systems<br>We Create @<a href="#service__section" class="active">bckyrd</a></h1>
                    <h1 hidden style="color:#7d8590">For Your Next Project <a href="#"> #Hire</a> Our Team </h1>
                </div>
            </div>
        </section>
        

<!--DESCRIPTION OF SERVICES OFFERED AT STORE-->
        <section id="service__section">
            <div class="mid" id="accordion">
                <div class="panel active">
                    <h2 class="header">MOBILE</h2>
                    <p class="body">Develop android apps with better 
                        <a href="https://www.google.com/ cross platform apps development">UX</a>
                         built for crossplatforms
                        devices support.
                        <a href="https://calendly.com/bckyrd-io" class="active-panel">select</a> </p>
                </div>
                <div class="panel">
                    <h2 class="header">EMBEDDED </h2>
                    <p class="body">Make Arduino automated electronics including 
                        <a href="https://www.google.com/ modular iot electronics">IOT</a>
                        enabled for controlling remotely
                        <a href="https://calendly.com/bckyrd-io" class="active-panel">select</a> </p>
                </div>
                <div class="panel">
                    <h2 class="header">WEB API</h2>
                    <p class="body">Develop responsive web systems that are are
                        <a href="https://www.google.com/ api extensibility">Extensible</a>
                        to other devices.
                        <a href="https://calendly.com/bckyrd-io" class="active-panel">select</a></p>
                </div>
                <div class="panel">
                    <h2 class="header">MACHINES</h2>
                    <p class="body">create for
                        <a href="https://www.google.com/ systems that are autonomous">Autonomy</a>
                        on mechanical systems and others that increase precision.
                        <a href="https://calendly.com/bckyrd-io" class="active-panel">select</a> </p>
                </div>
            </div>
        </section>


<!--PORTIFOLIO OF OUR PROJECTS GALLERY-->
        <section id="portifolio__section">
            <div class="left-heading">
                <h1><a href="https://github.com/h0zt/bckyrd">PotifoliO</a></h1>
                <p>Big Picture of what kinda Projects we have Been making. <a class="active" href="pgs/blog.php?project_id=id">view more</a> </p>   
            </div>
            <div class="max">
                <div class="masonry-grid">
                    <a href="pgs/blog.php?project_id=id" class="brick">
                        <img src="etc/mgmt.png" alt="Backyard-Design">
                    </a>
                     <a href="pgs/blog.php?project_id=id" class="brick">
                        <img src="etc/pmodule.png" alt="Backyard-Design">
                    </a>
                    <a href="pgs/blog.php?project_id=id" class="brick">
                        <img src="etc/estate.png" alt="Backyard-Design">
                    </a>
                    <a href="pgs/blog.php?project_id=id" class="brick">
                        <img src="etc/riseapp.png" alt="Backyard-Design">
                    </a>
                </div>
            </div>
        </section>


<!--UPCOMING EVENTS COLLABORATION-->
        <section id="event__section">
            <div class="mid" id="events">
                <div>
                    <p>Be part of the Inventor, working on Electronics  at 
                        their Backyard Workstation. <br><a href="https://work.bckyrd.io"class="active">Visit</a></p>
                </div>
            </div>
        </section>
  


<!--OVERVIEW OF HOW WE WANNA WORK-->
        <section id="approach__section">
            <div class="left-heading">
                <a class="button" id="work" href="https://calendly.com/bckyrd-io/">Let's work</a>
                <p>This is Our Approach to Keep the Hustle going, And get electronics fixed</p>   
            </div>
            <div class="max">
                <div class="col-section">
                    <h2>FLEXIBLE</h2>
                    <p>first, break formal barrier and agree to understand requirements better.
                    </p>
                </div>
                <div class="col-section">
                    <h2>TEAM</h2>
                    <p>second, scale our freelance depending on project milestones to finnish fast.</p>
                </div>
                <div class="col-section">
                    <h2>MODULAR</h2>
                    <p>third, start from concepts that work as prototype and improve the system from that</p>
                </div>
                <div class="col-section">
                    <h2>VALUE</h2>
                    <p>finaly, deliver the needed solve, to profit and adapt to build better stuff</p>
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

    </main>
    

<!--DESCRIPTIVE BIG TEXT WITH IMAGE -->
    <section id="experience__section">
        <div class="max store-items fixed inverted">
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
            </div>
            <div class="col r">
                <p>Most of the <a href="">team</a> have a background in taking apart devices, figuring out how <a href="">machines</a> work, obviously 
                    we are obbsessed with <a href="">electronics</a> here. Now have aquired 
                    skills throughout these years. And have made the <a href="">carrier</a> from 
                    the craft we understand .
                </p>
            </div>
        </div>
    </section>


<!--FREQUENTRY ASKED QUESTIONS-->
    <section id="faq__section">
        <div class="mid" id="accordion">
            <div class="panel active">
                <h2 class="header">FUTURE</h2>
                <p class="body">wanna build a workstation where we can work on systems with others 
                    . And improve building on the platform to progress invention.
                   <a class="active-panel" href="wikipedia.com/ crossplatform apps development">learn more</a> </p>
            </div>
            <div class="panel">
                <h2 class="header">RESEARCH</h2>
                <p class="body">explore advancement in tech including replicating these
                    internet projects. </p>
                <p class="body"> And do reviews on electronics devices plus finding out
                    altenatives .<a class="active-panel" href="wikipedia.com%20%7C%20minimalism%20life">learn more</a></p>
           </div>
            <div class="panel">
                <h2 class="header">HIRE </h2>
                <p class="body">anybody passionate of technology doesnt matter 
                    the field. From Scientist ,Engineers ,Handyman. etc </p>
                <p class="body">our jobs depends on the project scale, so freelancers
                    are good fit 
                    <a class="active-panel" href="wikipedia.com/ crossplatform apps development">learn more</a> </p>
            </div>
            <div class="panel">
                <h2 class="header">RECOVERY </h2>
                <p class="body">Explore advancement in tech including replicating these
                    internet projects. </p>
                <p class="body"> And do reviews on electronics devices plus finding out
                    altenatives .<a class="active-panel" href="wikipedia.com%20%7C%20minimalism%20life">learn more</a></p>
            </div>
        </div>
    </section>

    
<!--THE FOOTER INVERTED DESIGN-->
    <footer>
        <section id="footer__section">
            <div class="max inverted">
                <div class="col l">
                    <a href="#move__top">
                        <img style="width:96%"
                            src="res/web.svg" alt="inventor at backyard">
                    </a>
                </div>
                <div class="col r">
                    <h1>Follow</h1>
                    <p>we were LoSoMo <br>we are MoLoSo now</p>
                    <a href="https://www.linkedin.com/company/bckyrd-io/?viewAsMember=true" class="active">#linkedIn </a>
                    <a href="https://github.com/bckyrd-io?tab=repositories" class="active">#github </a>
                </div>
            </div>
        </div>
        </section>
        <p class="right">Email <a href="mailto:work@bckyrd.io"> work@bckyrd.io</a>.</p>
    </footer>


    <script type="text/javascript" src="res/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="res/scrollreveal.min.js"></script>
    <script type="text/javascript" src="res/host.js"></script>

</body>
</html>