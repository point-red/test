# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
private function convertNumber($number) {
    switch (strlen($number)){
        case 1:
            $number = '000' + $number;
        case 2:
            $number = '00' + $number;
        case 3:
            $number = '0' + $number;
    }

    return $number;
}

convertNumber(5);
```

#### 2. After change the code, make a pull request
