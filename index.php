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
                <a href="pgs/project.php">Project</a>
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
                        <img style="width:100%; height:auto;"
                            src="res/progressive_green.svg" alt="backyard embedded systems">
                    </a>
                </div>
                <div class="col r">
                    <h1>What's Made @<a href="#service__section" class="active">bckyrd</a>.</h1>
                    <p>Open As Freelance Developers and Also Follow Projects From Our Team. </p>
                </div>
            </div>
        </section>
        

<!--DESCRIPTION OF SERVICES OFFERED AT STORE-->
        <section id="service__section">
            <div class="mid" id="accordion">
                <div class="panel active">
                    <h2 class="header">SOFTWARE CODE</h2>
                    <p class="body">Build android development for cross platform apps with
                        different devices support.</p>
                    <p class="body">And web systems that offer API for extensibility of usage. 
                        <a href="wikipedia: crossplatform apps development">learn more</a> </p>
                </div>
                <div class="panel">
                    <h2 class="header">EMBEDDED SYSTEMS</h2>
                    <p class="body">Make Arduino automated electronics including IOT 
                        enabled for controlling remotely. </p>
                    <p class="body">And autonomous machines that are less Human operated. 
                        <a href="wikipedia: systems that use autonomy">learn more</a> </p>
                </div>
                <div class="panel">
                    <h2 class="header">DEVICE RECOVERY</h2>
                    <p class="body">Provide systems restores on devices failures get it fixed and working again. </p>
                    <p class="body">And also device reverse engineering to modify for upgrades 
                        <a href="wikipedia.com%20/%20reverse%20engineering">learn more</a> </p>
                </div>
                <div class="panel">
                    <h2 class="header">RESEARCH</h2>
                    <p class="body">Explore advancement in tech including replicating these
                        internet projects. </p>
                    <p class="body"> And do reviews on electronics devices plus finding out
                        altenatives .<a href="wikipedia.com%20%7C%20minimalism%20life">learn more</a></p>
                </div>
            </div>
        </section>


<!--PORTIFOLIO OF OUR PROJECTS GALLERY-->
        <section id="portifolio__section">
            <div class="left-heading">
                <h1>PotifoliO</h1>
                <p>Here is a Big Picture of what kinda Projects we have Been making. <a href="">view more</a> </p>   
            </div>
            <div class="max">
                <div class="masonry-grid">
                    <a href="https://host.bckyrd.io/pgs/profile.php?pro_id=<?=$pro['id']?>" class="brick">
                        <img src="etc/p1.png" alt="<?=$pro['name']?>-Design">
                    </a>
                     <a href="https://host.bckyrd.io/pgs/profile.php?pro_id=<?=$pro['id']?>" class="brick">
                        <img src="etc/p6.png" alt="<?=$pro['name']?>-Design">
                    </a>
                    <a href="https://host.bckyrd.io/pgs/profile.php?pro_id=<?=$pro['id']?>" class="brick">
                        <img src="etc/p2.png" alt="<?=$pro['name']?>-Design">
                    </a>
                    <a href="https://host.bckyrd.io/pgs/profile.php?pro_id=<?=$pro['id']?>" class="brick">
                        <img src="etc/p5.png" alt="<?=$pro['name']?>-Design">
                    </a>
                           
                    
                   
                    
                </div>
            </div>
        </section>


<!--UPCOMING EVENTS COLLABORATION-->
        <section id="event__section">
            <div class="mid" id="events">
                <div>
                    <p>Be part of the people, Building stuff in 
                        Their backyards <br><a href=""class="active">Visit</a></p>
                </div>
            </div>
        </section>
  


<!--OVERVIEW OF HOW WE WANNA WORK-->
        <section id="approach__section">
            <div class="left-heading">
                <button id="work" href="work@bckyrd.io">Let's work</button>
                <p>As an electronics company that gets your systems fixed we use these ideas to 
                    keep your hustle running.</p>   
            </div>
            <div class="max">
                <div class="col-section">
                    <h2>FLEXIBLE</h2>
                    <p>We dont do corporate stuff, rather communicate as Humans</p>
                    <p>Making the processes smooth by removing knowledge gaps.</p>
                </div>
                <div class="col-section">
                    <h2>VALUE</h2>
                    <p>The secret is to Understand what is needed, Then work together</p>
                    <p>And also keep you Updated on what we help on.</p>
                </div>
                <div class="col-section">
                    <h2>FASTER</h2>
                    <p>Depending on the Scale of Project, We often Teamup as an Agency.</p>
                    <p>Which makes Milestones complete in Less Time.</p>
                </div>
                <div class="col-section">
                    <h2>MODULAR</h2>
                    <p>Avoid being strict with tools usage, rather do what
                        achieves solution at the moment.
                    <p>Macgyver around to fix a problem and improve
                         on it from Prototype.</p>
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
                    <img src="res/drone_ft.svg" alt="backyard electronic item">
                </div> 
                <div class="item">
                    <img src="res/router_ft.svg" alt="backyard electronic item">
                </div> 
                <div class="item">
                    <img src="res/driller_ft.svg" alt="backyard electronic item">
                </div> 
                <div class="item">
                    <img src="res/gamer_ft.svg" alt="backyard electronic item">
                </div> 
            </div>
            <div class="col r">
                <p class="fix-text">
                the obbsessions with Breaking (stuff) througout the years , has led people
                to  ask us for repairs. But we only do, if there is a need to; not Often.
                </p>
            </div>
            
        </div>
    </section>


<!--FREQUENTRY ASKED QUESTIONS-->
    <section id="faq__section">
        <div class="mid" id="accordion">
            <div class="panel active">
                <h2 class="header">FUTURE </h2>
                <p class="body">anybod passionate of technology doesnt matter 
                    the field. From Scientist ,Engineers ,Handyman. etc </p>
                <p class="body">our jobs depends on the project scale, so freelancers
                    are good fit 
                    <a href="wikipedia: crossplatform apps development">learn more</a> </p>
            </div>
            <div class="panel">
                <h2 class="header">HIRE </h2>
                <p class="body">Make Arduino automated electronics including IOT 
                    enabled for controlling remotely. </p>
                <p class="body">And autonomous machines that are less Human operated. 
                    <a href="wikipedia: systems that use autonomy">learn more</a> </p>
            </div>
            <div class="panel">
                <h2 class="header">HIRES </h2>
                <p class="body">Provide systems restores on devices failures get it fixed and working again. </p>
                <p class="body">And also device reverse engineering to modify for upgrades 
                    <a href="wikipedia.com%20/%20reverse%20engineering">learn more</a> </p>
            </div>
            <div class="panel">
                <h2 class="header">EWASTE </h2>
                <p class="body">Explore advancement in tech including replicating these
                    internet projects. </p>
                <p class="body"> And do reviews on electronics devices plus finding out
                    altenatives .<a href="wikipedia.com%20%7C%20minimalism%20life">learn more</a></p>
            </div>
        </div>
    </section>

    
<!--THE FOOTER INVERTED DESIGN-->
    <footer>
        <section id="footer__section">
            <div class="max inverted">
                <div class="col l">
                    <a href="#move__top"><img src="res/error.svg" alt="inventor at backyard"></a>
                </div>
                <div class="col r">
                    <h1>BACKYARD<br> WORKSTATION</h1>
                    <p>Make What You<br> Wanna Have</p>
                    <a href="https://www.linkedin.com/company/bckyrdio/?viewAsMember=true" class="active">#linkedIn </a>
                    <a href="https://github.com/h0zt?tab=repositories" class="active">#github </a>
                </div>
            </div>
        </div>
        </section>
        <p class="right">Email <a class="active" href="#="> work@bckyrd.io</a>.</p>
    </footer>


    <script type="text/javascript" src="res/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="res/scrollreveal.min.js"></script>
    <script type="text/javascript" src="res/host.js"></script>

</body>
</html>