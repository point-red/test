# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
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
```

#### 2. After change the code, make a pull request