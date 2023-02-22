<?php 
/** *
    require('../process.php');
    $process = new Process();
    $articles =$process->getProjects();**/
?>


<!DOCTYPE html>
<html lang="en">
<head>
<!--SEO TAGS-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Software eveloper, Coding,
        Backyard Workstation, Freelance Agency, Electronics Hacking,  Arduino Iot, Android Apps, Autonomous Machines">
<!--PRE LOAD FONTS-->
    <link rel="preload" href="../res/AdobeCleanUX-Light.woff2" 
        as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="../res/host.css">
    <link rel="shortcut icon" href="../res/favicon.ico" type="image/x-icon">
    <title>bckyrd /blog. what projects we work on</title>
 </head>

<body>,
<!--NAVIGATION LINKS TO DESIGN-->
    <nav id="move__top">
        <div class="col l">
            <div id="nav_menu">
                <a href="../index.php" >Home</a>
                <a href="project.php" class="active">Project</a>
                <a href="blog.php" >Blog</a>
            </div>
            <div id="nav_link" onclick="openNav()">
                <span id="first"></span>
                <span id="second"></span>
                <span id="third"></span>
            </div>
        </div>
    </nav>



    <main>
<!--OUR WORKSTATION VIDEOS CHANNEL-->
        <?php// foreach($articles as $article){ ?>
        <section id="post__section">
            <div class="left-heading">
                <h1># bckyrd</h1>
                <p>website developed for our company where we showcase what we Build. and all the service that 
                    we provide for freelance. And also share our process.
                </p>   
            </div>
            <div class="mid">
                <img src="../etc/p1.png" alt="post">
            </div>
        </section> 

        <section id="post__section">
            <div class="left-heading">
                <h1># pmodule</h1>
                <p>The arduino controlled  module developed to be used for micro powerstations which cobnes the reote 
                    controed usign iot  odue sipify userex experiencennn via obie custo android app
                </p>   
            </div>
            <div class="mid">
                <img src="../etc/p6.png" alt="post">
            </div>
        </section>

        <section id="post__section">
            <div class="left-heading">
                <h1># workStation</h1>
                <p>WE ARE WORKING ON THE TOOLS TO PROGRESS CREATIVITY DONE IN BACKYARDS
                </p>   
            </div>
            <div class="mid">
                <img src="../etc/p1.png" alt="post">
            </div>
        </section>

        <section id="post__section">
            <div class="left-heading">
                <h1># Mgmt</h1>
                <p>WE ARE WORKING ON THE TOOLS TO PROGRESS CREATIVITY DONE IN BACKYARDS
                </p>   
            </div>
            <div class="mid">
                <img src="../etc/p2.png" alt="post">
            </div>
        </section>     

        <section id="post__section">
            <div class="left-heading">
                <h1># RiseApp</h1>
                <p>WE ARE WORKING ON THE TOOLS TO PROGRESS CREATIVITY DONE IN BACKYARDS
                </p>   
            </div>
            <div class="mid">
                <img src="../etc/p5.png" alt="post">
            </div>
        </section>   

        <section id="post__section">
            <div class="left-heading">
                <h1># Estate</h1>
                <p>WE ARE WORKING ON THE TOOLS TO PROGRESS CREATIVITY DONE IN BACKYARDS
                </p>   
            </div>
            <div class="mid">
                <img src="../etc/software_agency.jpg" alt="post">
            </div>
        </section>   

        <section id="post__section">
            <div class="left-heading">
                <h1># Cydt</h1>
                <p>WE ARE WORKING ON THE TOOLS TO PROGRESS CREATIVITY DONE IN BACKYARDS
                </p>   
            </div>
            <div class="mid">
                <img src="../etc/software_agency.jpg" alt="post">
            </div>
        </section>   
        <?php// } ?>
    </main>



    <footer>
<!--THE FOOTER INVERTED DESIGN-->
        <section id="footer__section">
            <div class="max inverted">
                <div class="col l">
                    <a href="#move__top"><img src="../res/web.svg" alt="inventor at backyard"></a>
                </div>
                <div class="col r">
                    <h1>BACKYARD<br> WORKSTATION</h1>
                    <p>It Was Written<br> And Its Been Compiled</p>
                    <a href="" class="active">#linkedIn</a>
                    <a href="" class="active">#github</a>
                </div>
            </div>
        </div>
        </section>
        <p class="right">Email <a class="active" href="#">work@bckyrd.io</a></p>
    </footer>

    <script src="../res/jquery-3.3.1.min.js"></script>
    <script src="../res/scrollreveal.min.js"></script>
    <script src="../res/host.js"></script>

</body>
</html>