# Task 4

#### 1. Make the code below cleaner and readable

```php
public function getPrice(){
    if($customer->status == 'active'){
        if ($customer->debt > 10000000) {
            return error('this customer cannot make a purchase due to his debt over limit');
        }else{
            switch ($customer->group) {
                case 'distributor':
                    return Price::get('distributor');
                    break;
                case 'general':
                    return Price::get('general');
                    break;
                default:
                    return error('group not found');
                    break;
            }
        }
    }else{
        return error('this customer is not active');
    }
}
```

#### 2. After change the code, make a pull request