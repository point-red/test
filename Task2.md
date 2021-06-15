# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
private function convertNumber($number, $length) {
    return str_pad($number, $length, "0", STR_PAD_LEFT);
}

convertNumber(5, 3);
```

#### 2. After change the code, make a pull request