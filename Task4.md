# Task 4

#### 1. Make the code below cleaner and readable

```php
<?php
    // after refactor
    function getPrice() {
    switch ($customer->group) {
        case 'distributor':
            if($customer->status != 'active') return error('this customer is not active');
            if($customer->debt > 10000000) return error('this customer cannot make a purchase due to his debt over limit');
            return Price::get('distributor');

        case 'general':
            if($customer->status != 'active') return error('this customer is not active');
            if($customer->debt > 10000000) return error('this customer cannot make a purchase due to his debt over limit');
            return Price::get('general');
    }
}
?>
```

#### 2. After change the code, make a pull request
