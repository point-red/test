<?php

function convertNumber($number) {
    $numberStringResult = '';
    if (strlen($number) >= 1 && strlen($number) <= 3) {
        for ($i = 1; $i <= (4-strlen($number)); $i++){
            $numberStringResult .= '0';
        }
        $numberStringResult .= $number;
    }

    return $numberStringResult;
}

convertNumber(5);
?>