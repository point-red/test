# Task 4

#### 1. Make the code below cleaner and readable

```javascript
const getPrice = (customer) => {
  if (customer.status == 'active' && customer.debt > 10000000) {
    return 'error: this customer cannot make a purchase due to his debt over limit'
  } else if (customer.status == 'active' && customer.debt <= 10000000) {
    return `Price get: ${customer.group}`
  } else {
    return 'error: this customer is not active'
  }
}

customer = {
  group: 'distributor',
  status: 'active',
  debt: 100000001
}

console.log(getPrice(customer))

```

#### 2. After change the code, make a pull request