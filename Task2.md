# Task 2

#### 1. Make the code below cleaner, better and reusable

```javascript
// Add leading 0 number
// ex: 5 => 0005

const convertNumber = (number) => {
  let addNull = 4
  addNull -= number.toString().length

  if (addNull != 0) {
    let zero = ''
    for (let i = 0; i < addNull; i++) {
      zero += '0'
    }
    const result = zero + number
    console.log(result)
  }
}

convertNumber(5)
```

#### 2. After change the code, make a pull request