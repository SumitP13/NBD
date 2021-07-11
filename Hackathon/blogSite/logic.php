<?php

    // Don't display server errors 
    ini_set("display_errors", "off");

    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME', 'blogSite1');

    $conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    if(!$conn){
        echo "<h3>Not able to establish Database Connection<h3>";
    }

    //data lene keliye
    $sql = "SELECT * FROM blog_data";
    $query = mysqli_query($conn, $sql);

    // Create a new post
    if(isset($_REQUEST['new_post'])){
        $title = $_REQUEST['title'];
        $content = $_REQUEST['content'];

        $sql = "INSERT INTO blog_data(title, content) VALUES('$title', '$content')";
        mysqli_query($conn, $sql);

        //  

        header("Location: index.php?info=added"); //this method helps to redirect us
        exit();
    }

    // Get post data based on id
    if(isset($_REQUEST['id'])){
        $id = $_REQUEST['id']; 
        $sql = "SELECT * FROM blog_data WHERE id = $id";
        $query = mysqli_query($conn, $sql);
    }

    // Delete a post
    if(isset($_REQUEST['delete'])){
        $id = $_REQUEST['id'];

        $sql = "DELETE FROM blog_data WHERE id = $id";
        mysqli_query($conn, $sql);

        header("Location: index.php");
        exit();
    }

    // Update a post
    if(isset($_REQUEST['update'])){
        $id = $_REQUEST['id'];
        $title = $_REQUEST['title'];
        $content = $_REQUEST['content'];

        $sql = "UPDATE blog_data SET title = '$title', content = '$content' WHERE id = $id";
        mysqli_query($conn, $sql);

        header("Location: index.php");
        exit();
    }

?>
