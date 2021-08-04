# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
private function convertNumber($number) {
    $number = strlen($number) === 1 ? '000' + $number;
    $number = strlen($number) === 2 ? '00' + $number;
    $number = strlen($number) === 3 ? '0' + $number;

    return $number;
}

convertNumber(5);
```

#### 2. After change the code, make a pull request
