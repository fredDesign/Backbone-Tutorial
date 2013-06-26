<?php
    $a= array();
    $a [] =array
    (
        "id"    => 1,
        "prenom"    => "alliod"
        "nom"       => "nono"
    );
    $a [] =array
    (
        "id"    => 2,
        "prenom"    => "BElliod"
        "nom"       => "nono2"
    );
    $a [] =array
    (
        "id"    => 3,
        "prenom"    => "Calliod"
        "nom"       => "nono3"
    );
    echo json_encode( $a );
    ?>