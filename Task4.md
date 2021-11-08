# Task 4

#### 1. This code is working perfectly but it's hard to maintain, please make the code below cleaner and readable

```php
public function getPrice() {

  if ($cs != 'active') return 'this customer is not active';

  if ($cd > 10000000) return 'this customer cannot make a purchase due to his debt over limit';

  return Price::get($customer->group);
  
}
```

#### 2. After change the code, make a pull request
