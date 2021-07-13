# Task 4

#### 1. Make the code below cleaner and readable

```javascript
function getPrice() {
    if($customerGroup == 'distributor') {
        if($customerStatus == 'active') {
            if($customerDebt > 10000000) {
                return error('this customer cannot make a purchase due to his debt over limit');
            } else {
                return Price('distributor');
            }
        } else {
            return error('this customer is not active')
        }
                } else if($customerGroup == 'general') {
        if($customerStatus == 'active') {
            if($customerDebt > 10000000) {
                return error('this customer cannot make a purchase due to his debt over limit');
            } else {
                return Price('general');
            }
        } else {
            return error('this customer is not active')
        }
                } else if($customerGroup == 'general') {
        if($customerStatus == 'active') {
            if($customerDebt > 10000000) {
                return error('this customer cannot make a purchase due to his debt over limit');
            } else {
                return Price('general');
            }
        } else {
            return error('this customer is not active')
        }
    }
}
```

#### 2. After change the code, make a pull request
