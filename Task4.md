# Task 4

#### 1. This code is working perfectly but it's hard to maintain, please make the code below cleaner and readable

```php
public function getPrice() {
    $customerGroup = $customer->group; 

    if($customerGroup != 'distributor' || $customerGroup != 'general'){
        return error('Customer Group Not Valid!')
    }

    if($customer->status != 'active') {
        return error('this customer is not active')
    }

    if($customer->debt > 10000000) {
       return error('this customer cannot make a purchase due to his debt over limit');
     } 
    
    return Price::get($customerGroup); 
  }
```

#### 2. After change the code, make a pull request
