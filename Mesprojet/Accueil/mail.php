<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins:wght@200&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/formulaire.css">
	<title>Document</title>
</head>
<body>
	
</body>
</html>




<?php

if(isset($_POST['metier']) && empty($_POST['metier'])){ // eviter les spams

    if(isset($_POST['message'])){   

    $entete  = 'MIME-Version: 1.0' . "\r\n";
    $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $entete .= 'From: ' . $_POST['email'] . "\r\n";

    
    $message = '<h1>Message envoyé depuis la page Contact de  aidescoolai.re</h1>
    <p><b>Nom : </b>' . $_POST['name'] . '<br>
    <b>Email : </b>' . $_POST['email'] . '<br>
    <b>Message : </b>' . $_POST['message'] . '</p>';

    $position_arobas = strpos($_POST['email'],'@');

        if($position_arobas === false) {

            echo '<h1>Votre email doit comporter un arobase.</h1>';
        }else
        {

            $retour = mail('josiasmbogle237@gmail.com', 'Email envoyé a Aide Scolaire', $message, $entete);

            if($retour) {
                echo '<h1>Votre message a bien été envoyé ;)</h1>
                 <p>nous allons vous envoyer une reponse d\' ici 24h maximunm. </p>';
            }else{
                '<p>Erreur</p>';
            
            }   
        }
   
    }
}
    

?>
