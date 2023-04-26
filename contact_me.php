<?php
if (isset($_POST['name']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['message'])) {
    $nombre = $_POST['name'];
    $apellido = $_POST['lastname'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $to = "gabrielramondev23@gmail.com";
    $subject = "Nuevo mensaje de $nombre";
    $body = "Nombre: $nombre\nApellido: $apellido\nEmail: $email\nMensaje: $mensaje";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por tu mensaje!";
    } else {
        echo "Lo siento, algo salió mal. Inténtalo de nuevo más tarde.";
    }
}
?>
