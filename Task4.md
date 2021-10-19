# Task 4

#### 1. Make the code below cleaner and readable

```php
function customerCheck($customer) {
    if($customer->status == 'active') {
        if($customer->debt > 10000000) {
            return error('this customer cannot make a purchase due to his debt over limit');
        } else {
            if($customer->group == 'distributor' || $customer->group == 'general')
                return Price::get($customer->group);
        }
    } else {
        return error('this customer is not active');
    }
}
```

#### 2. After change the code, make a pull request