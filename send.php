<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit;
}

// Anti-spam
if (!empty($_POST['website'])) {
    exit;
}

$name = strip_tags($_POST["name"]);
$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$message = strip_tags($_POST["message"]);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    exit;
}

$to = "contact@rtmf.fr";
$subject = "Demande de devis – RTMF Menuiserie";

$headers = [
    "From: Site RTMF <no-reply@rtmf.fr>",
    "Reply-To: $email",
    "Content-Type: text/plain; charset=UTF-8"
];

$content = "Nom : $name\n";
$content .= "Email : $email\n\n";
$content .= "Message :\n$message";

mail($to, $subject, $content, implode("\r\n", $headers));

header("Location: index.html?success=1");
