# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
<?php
    function convertNumber($number,$digit) {
        $length = strlen($number);
        for ($i = $length; $i < $digit; $i++) {
            $number = '0'.$number;
        }
        return $number;
    }

    echo convertNumber(5, 6);
?>
```

#### 2. After change the code, make a pull request
