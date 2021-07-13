# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
private function convertNumber($number) {
    $zero = '';
    $long = strlen($number);
    while($long <= 999) {
        $zero = $zero . '0';
        $long = $long * 10; 
    }
    return $zero + $number;
}

convertNumber(5);
```
==============
when I use javascript
function convertNumber(number) {
    let zero = "";
    let long = number
    while(long <= 999) {
        zero = zero + '0';
        long = long * 10;
    }
    return zero + number
}

convertNumber(100);
==================

#### 2. After change the code, make a pull request
