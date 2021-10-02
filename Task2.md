# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
private function convertNumber($number) {
    
$result = 0;
    strlen($number) === 1 
    ? $result = "000" . $number 
    : (strlen($number) === 2 
        ? $result = "00" . $number 
        : (strlen($number) === 3 
            ? $result = "0" . $number 
            : $result = $number));

    return $result;
}

convertNumber(5);
```

#### 2. After change the code, make a pull request
