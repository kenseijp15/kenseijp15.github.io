<?php
    $name = $_POST['email'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "lionelmessibot0727@yahoo.com";

    $headers = "From: $visitor_email \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headerz);

    header("Location: index.html");
?> 