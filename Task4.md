# Task 4

#### 1. This code is working perfectly but it's hard to maintain, please make the code below cleaner and readable

```php

public function checkStatus($status, $debt, $group) {
    if($status == 'active') {
      if($debt > 10000000) {
        return error('this customer cannot make a purchase due to his debt over limit');
      } else {
        return Price::get($group);
      }
    } else {
      return error('this customer is not active')
    }
}

public function getPrice() {
  if($customer->group == 'distributor') {
    checkStatus($customer->status, $customer->debt, $customer->group);
  } elseif($customer->group == 'general') {
    checkStatus($customer->status, $customer->debt, $customer->group);
  }
}
```

#### 2. After change the code, make a pull request
