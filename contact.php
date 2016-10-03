<?php
if(isset($_GET('submit'))){
    $msg="Nombre: ".$_GET["name"]."\n"
        ."E-mail: ".$_GET["email"]."\n"
        ."Telefono: ".$_GET"phone"]."\n"
        ."Comentario: ".$_GET["email"];
    $to="turi.arturo@gmail.com";
    $subject="test mail";
    $header="From:some@domain.com\r\n";
    $retval=mail($to,$subject,$message,$header);
    if($retval==true){
        echo "<script>alert('Gracias por contactarnos , responderemos en la brevedad')</script>";
    }else{
         echo "<script>alert('El mensaje no se ha podido enviar')</script>";

    }
}else{
    header('index.html');
    exit(0);
}
?>