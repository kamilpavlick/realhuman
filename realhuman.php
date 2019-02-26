<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptcha_response'])) {

    // Build POST request:
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '%SECRETKEY%';
    $recaptcha_response = $_POST['recaptcha_response'];

    // Make and decode POST request:
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);

    if($recaptcha->score <= 0.5) {
        header('HTTP/1.1 500 Internal Server Error');
        echo 'No, you are not human';
    } else {
        echo 'Yes, you are human';
    }

    exit(0);

}
