<?php
    $name = $_POST['email'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'lionelmessibot0727@yahoo.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "kenseijp15@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headerz);

    header("Location: index.html");
?> 