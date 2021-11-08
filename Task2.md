# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
private function convertNumber($number) {
    $template = '';
    $length = strlen($number);
    
    if ($length === 1) {
        $template = '000';
    }else if ($length > 1 && $length < 3) {
        $template = '00';
    }else {
        $template = '0';
    }

    return $template+$number;
}

convertNumber(5);
```

#### 2. After change the code, make a pull request
