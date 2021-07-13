# Task 4

#### 1. Make the code below cleaner and readable

```php
public function getPrice() {
    // valid group
  $group = array("distributor", "general");
  // check valid group
  if(in_array($costumer->group, $group)){
    return error("Costumer doesn't have valid group");
  }
  // check costumer status and debt status
  if($costumer->status == 'active'){
    if($customer->debt > 10000000) {
        return error('this customer cannot make a purchase due to his debt over limit');
    } else {
        return Price::get($costumer->group);
    }
  } else {
    return error('this customer is not active');
  }
}
```

#### 2. After change the code, make a pull request