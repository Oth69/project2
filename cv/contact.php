<?php
    $name - $_POST['name'];
    $visitor_email = $_POST['email'];
    $message= $_POST['message'];

    $email_from='message';
    $email_subject = "Job Hiring";
    $email_body = "User Name:$name.\n".
     "User Email:$visitor_email.\n". 
     "User Message: $message.\n";
    $to = "othellotmkhonto@gmail.com";
    $headers = "From: $email_from\r\n";
    $headers = "Reply To: $visitor_email\r\n";
    mail($to,$email subject,$email body,$headers);
    header("Location: contactinfo.html");
?>