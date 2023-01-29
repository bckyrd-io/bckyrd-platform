<?php 
#initial
$process = new Process();


class Process{

    public function db(){
        #global variables
        $password ="bckyrd_root";
        $username ="bcky99186883_root";
        $servername ="localhost";
        $dbname = "bcky99186883_workstation";
        //pdo
        $pdo = new PDO(
            "mysql:host=$servername;dbname=$dbname",
             "$username", "$password"
        ); 
        return $pdo;
    }


    public function getProjects(){
        $query ="SELECT * FROM project
            GROUP BY id ORDER BY id ASC LIMIT 8";
        $statement = $this->db()->prepare($query);
        $statement->execute();
        return $statement->fetchAll();
    }


    public function getFixes(){
        $query ="SELECT * FROM site WHERE type = 'fixed'
        GROUP BY id ORDER BY id ASC LIMIT 5";
        $statement = $this->db()->prepare($query);
        $statement->execute();
        return $statement->fetchAll();
    }


    public function getArticles(){
        $query ="SELECT * FROM site WHERE type = 'article' 
            GROUP BY id ORDER BY id ASC LIMIT 4";
        $statement = $this->db()->prepare($query);
        $statement->execute();
        return $statement->fetchAll();
    }



    public function getQuests(){
        $query ="SELECT * FROM site WHERE type = 'quest' 
            ORDER BY id DESC";
        $statement = $this->db()->prepare($query);
        $statement->execute();
        return $statement->fetchAll();
    }


    public function getItems(){
        $query ="SELECT * FROM site WHERE type = 'item' 
            ORDER BY id DESC";
        $statement = $this->db()->prepare($query);
        $statement->execute();
        return $statement->fetchAll();
    }


    public function getTags(){
        $query ="SELECT * FROM site WHERE type = 'item'
            ORDER BY id DESC";
        $statement = $this->db()->prepare($query);
        $statement->execute();
        return $statement->fetchAll();
    }
    

    public function insert(
        $name,$description,$head,$type,$link,$file,$tmp
    ){
        $query ="INSERT INTO site(name, description, head,type,link,image)
            VALUES('$name','$description','$head','$type','$link','$file')";
        if(move_uploaded_file($tmp,"etc/".$file)){
            $statement = $this->db()->prepare($query);
            $statement->execute();
        } 
    }

    public function insertQuest(
        $name,$type
    ){
        $query ="INSERT INTO site(name,type)
            VALUES('$name','$type')";
        $statement = $this->db()->prepare($query);
        $statement->execute();
        echo "success";
    }

}

?>