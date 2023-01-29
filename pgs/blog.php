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
    <meta name="description" content="Discover a Company that works on Systems also freelance 
        with a team that is obbsessed with Electronics and constantly builds on advances.">
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
                <a href="blog.php" class="active">Project</a>
                <a href="store.php" >Store</a>
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
                <h1>#workStation</h1>
                <p>THERE IS SOME EXPLAINING TO DO RIGHT HERE 
                    ON THE MATTER OF HACKING SYSTEMS TO THIS STUFF
                </p>   
            </div>
            <div class="mid">
                <img src="../etc/software agency.jpg" alt="post">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eum ut vero voluptatibus labore harum. Assumenda commodi quasi excepturi id itaque aut odio vitae obcaecati, unde magnam. Ullam cum et inventore, nesciunt id, excepturi natus rerum perferendis debitis tempore quam exercitationem magnam pariatur! Sapiente repellendus quaerat doloremque repellat, officiis iusto.</p>
            </div>
        </section>
        <section id="post__section">
            <div class="left-heading">
                <h1>#realHacking</h1>
                <p>THERE IS SOME EXPLAINING TO DO RIGHT HERE 
                    ON THE MATTER OF HACKING SYSTEMS TO THIS STUFF
                </p>   
            </div>
            <div class="mid">
                <img src="../etc/f5.jpg" alt="post">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eum ut vero voluptatibus labore harum. Assumenda commodi quasi excepturi id itaque aut odio vitae obcaecati, unde magnam. Ullam cum et inventore, nesciunt id, excepturi natus rerum perferendis debitis tempore quam exercitationem magnam pariatur! Sapiente repellendus quaerat doloremque repellat, officiis iusto.</p>
            </div>
        </section>
        <section id="post__section">
            <div class="left-heading">
                <h1>#realHacking</h1>
                <p>THERE IS SOME EXPLAINING TO DO RIGHT HERE 
                    ON THE MATTER OF HACKING SYSTEMS TO THIS STUFF
                </p>   
            </div>
            <div class="mid">
                <img src="../etc/f5.jpg" alt="post">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eum ut vero voluptatibus labore harum. Assumenda commodi quasi excepturi id itaque aut odio vitae obcaecati, unde magnam. Ullam cum et inventore, nesciunt id, excepturi natus rerum perferendis debitis tempore quam exercitationem magnam pariatur! Sapiente repellendus quaerat doloremque repellat, officiis iusto.</p>
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
        <p class="right">Email <a class="active" href="#">host@bckyrd.io</a></p>
    </footer>

    <script src="../res/jquery-3.3.1.min.js"></script>
    <script src="../res/scrollreveal.min.js"></script>
    <script src="../res/host.js"></script>

</body>
</html>