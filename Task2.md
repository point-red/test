# Task 2

#### 1. Make the code below cleaner, better and reusable

```javascript
# Add leading 0 number
# ex: 5 => 0005

function convertNumber($number) {
    if ($number === 1) {
        $number = '000' + $number;
    }

    if ($number === 2) {
        $number = '00' + $number;
    }

    if ($number === 3) {
        $number = '0' + $number;
    }

    return $number;
}

convertNumber(1);
convertNumber(2);
convertNumber(3);
convertNumber(5);
```

#### 2. After change the code, make a pull request
