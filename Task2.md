# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
function convertNumber($number) {
  if (String($number).length === 1) {
    $number = "000" + $number;
  } else if (String($number).length === 2) {
    $number = "00" + $number;
  } else if (String($number).length === 3) {
    $number = "0" + $number;
  } else {
    $number = $number;
  }

  return $number;
}
console.log(convertNumber(5));
convertNumber(5);
```

#### 2. After change the code, make a pull request
