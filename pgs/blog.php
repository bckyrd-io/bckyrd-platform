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
    <link rel="preload" href="../res/AdobeCleanUX-Light.woff2" 
        as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="../res/host.css">
    <link rel="shortcut icon" href="../res/favicon.ico" type="image/x-icon">
    <title>bckyrd /blog. what projects we work on</title>
 </head>

<body>
<!--NAVIGATION LINKS TO DESIGN-->
    <nav id="move__top">
        <div class="col l">
            <div id="nav_menu">
                <a href="../index.php" >Home</a>
                <a href="project.php">Project</a>
                <a href="blog.php" class="active" >Blog</a>
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
                <h1># About</h1>
                <p>WE ARE WORKING ON THE TOOLS TO PROGRESS CREATIVITY DONE IN BACKYARDS
                </p>   
            </div>
            <div class="mid">
                <img src="../etc/software_agency.jpg" alt="post">
                <p><a>@Backyard</a> has been a place where creativity has always started. Many cool things were started in these places. The motivations to build/invent stuff at backyards has been just to see there imagination fluition. Most startups have started in their <a>garages</a>
                to making impact in the world.</p>
                <p>But the problem has been the progress for these project, that they dont get pushed to be used
                by others who might like to test there <a>usefulness</a>. We wanna join in as the company that got started from backyard, to push what we have seen built in these backyards to make these projects finish and be useful </p>
                <p>Imagine if most companies are within our backyards, stuff will be cheaper, be delivered faster and be built by people who love their craft. With most automation coming, stuff might be designed in another backyard and get <a>3dPrinted</a> in another backyard where its needed. Being one of the companies in this space we wanna contribute to the progress. <a>work.bckyrd.io</a> is a platform you should watch for as an opensource to build these things together.</p>

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