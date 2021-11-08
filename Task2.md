# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
<?php

 function convertNumber($number){

    
    $maxStrLength = 3;

    $strLength =  strlen($number) + 1;
    

    if($strLength > 3){
        print('Terlalu Panjang!');
        return;
    }

    $zerrosCount = ($maxStrLength - $strLength )+ 1;

    $returnedValue = getZeros($zerrosCount).$number; 

    print("$returnedValue");
}

function getZeros($count){
    $zeros = "";
    for ($i=0; $i < $count; $i++) { 
        $zeros .= $zeros + "0"; 
    }
    return $zeros;
}

convertNumber(5);
?>

```

#### 2. After change the code, make a pull request
