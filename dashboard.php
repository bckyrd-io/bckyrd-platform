<?php 
    require('process.php');
    $quests = $process->getQuests();
    if(isset($_POST['upload'])){
        $process->insert(
            $_POST['name'],
            $_POST['description'],
            $_POST['head'],
            $_POST['type'],
            $_POST['link'],
            $_FILES['file']['name'],
            $_FILES['file']['tmp_name']
        );
    }
?>


<!DOCTYPE html>
<html lang="en">
<head> 
<!--SEO TAGS-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <!--PRE LOAD FONTS--->
    <link rel="preload" href="res/AdobeCleanUX-Light.woff2" as="font" type="font/woff2" crossorigin>  
    <link rel="shortcut icon" href="res/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="res/host.css">
    <title>bckyrd | admn</title>
    <link rel="shortcut icon" href="res/favicon.ico" type="image/x-icon">
 </head>

<body>

    <main>
<!--OUR WORKSTATION EDITS CHANNEL-->
        <section>
            <div class="mid">
                <?php foreach($quests as $quest){?>
                        <h2><?=$quest['name']?></h2>
                        <p><?=$quest['description']?></p>
                <?php } ?>
             </div>
       </section>

<!--OUR WORKSTATION EDITS CHANNEL-->
        <section id="uploads">
            <form class="mid" action="" method="post" enctype="multipart/form-data">
                <select name="type" placeholder="type">
                    <option value="item">item</option>
                    <option value="article">article</option>
                    <option value="fixed">fixed</option>
                </select>
                <input type="text" name="name" placeholder="name">
                <input type="text" name="head" placeholder="heading">
                <textarea name="description" placeholder="description"></textarea>
                <input type="text" name="link" placeholder="link">
                <input type="file" name="file" placeholder="image">
                <button class="btn" name="upload">UPLOAD</button>
            </form>
            
            
        </section>

    </main>


    <script type="text/javascript" src="res/host.js"></script>

</body>
</html>