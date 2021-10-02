# Task 4

#### 1. Make the code below cleaner and readable

```php
public function getPrice($customer) {

$customer->status == "active" && switch ($customer->group) {
  case "distributor":
    $customer->debt > 10000000 ? return error('this customer cannot make a purchase due to his debt over limit') : return Price::get('distributor');
    break;
  case "general":
    $customer->debt > 10000000 ? return error('this customer cannot make a purchase due to his debt over limit') : return Price::get('distributor');
    break;

  default:
    ;

    return error('this customer is not active')
}

}
```

#### 2. After change the code, make a pull request
