<?php
 
 
 
 define('DB_SERVER', 'localhost');
 define('DB_USERNAME', 'root');
 define('DB_PASSWORD', '');
 define('DB_NAME', 'contactus');

 $conn = mysqli_connect("localhost", "root", "", "contactus");
if(!$conn){
    echo "<h3>Not able to establish Database Connection<h3>";
  }
 if(isset($_POST['send'])){ 
  $name=$_POST['name'];
  $email=$_POST['email'];
  $subject=$_POST['subject'];
  $message=$_POST['message'];

  $sql = "INSERT INTO data(name,email,subject,message) VALUES('$name','$email','$subject','$message')";
  mysqli_query($conn, $sql);
 }

?>

<html>
  <head>
    <title>Contact Us</title>
    <link rel="stylesheet" href="contactus.css" />
  </head>
  <body>
    <h1>Contact Us</h1>
    <div class="contact-box">
      <form action="contactUs.php" method="POST">
        <input type="text" class="input-field" placeholder="Name" name="name" required />
        <input type="email" class="input-field" placeholder="Email address" name="email" required />
        <input type="text" class="input-field" placeholder="Subject" name="subject" required />
        <textarea type="text" class="input-field textarea-field" placeholder="Enter your message" name="message"></textarea>
        <button type="submit" class="btn" name="send">Submit Form</button>
      </form>
    </div>
  </body>
</html>