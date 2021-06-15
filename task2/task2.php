<?php

class Converter {
    public function convertNumber ($number)
    {

        switch(strlen($number)) {
            case 1:
                $number = '000' . $number;
                break;
            case 2:
                $number = '00' . $number;
                break;
            case 3:
                $number = '0' . $number;
                break;
            default:
                var_dump(strlen($number));
                break;
        }        
        return $number;  
    }
}

$newNumber = new Converter();
$result = $newNumber -> convertNumber(1000);

var_dump($result);

?>