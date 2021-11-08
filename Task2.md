# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
private function convertNumber($number) {
  
    $digits = 4;
  
    $digits -= strlen($number);
    
    $lead = str_pad($value, $digits, '0', STR_PAD_LEFT);

    $number = $lead . $number;

    return $number;
    
}

convertNumber(5);
```

#### 2. After change the code, make a pull request