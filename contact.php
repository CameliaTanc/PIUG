<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Validate input
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "Please fill in all fields.";
        exit;
    }

    // Send email
    $to = "cameliatanc@gmail.com"; // Replace with your email address
    $headers = "From: $email";
    $mailBody = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";

    if (mail($to, $subject, $mailBody, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Error sending message. Please try again later.";
    }
}
?>
