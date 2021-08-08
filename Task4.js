function getPrice(group, debt) {
    if (group == "distributor" && debt <= 10000000 ) {
        return "price distributor"
      } else if ( group == "customer" && debt <= 10000000 ) {
        return "price general"
      } else if ( group == "distributor" || "customer" && debt > 10000000 ) {
        return "this customer cannot make a purchase due to his debt over limit"
      } else if ( group == "distributor" || "customer" && isNaN(debt) ) {
        return "invalid data"
      } else {
        return "this customer is not active"
      }
      
}

getPrice("customer", 10000001);
console.log(getPrice("customer", 10000001));

getPrice("distributor", 10000001);
console.log(getPrice("distributor", 10000001));

getPrice("customer", 10000000);
console.log(getPrice("customer", 10000000));

getPrice("distributor", 10000001);
console.log(getPrice("distributor", 10000000));

getPrice("konsumen", 10000000);
console.log(getPrice("konsumen", 10000000));

getPrice("konsumen", 10000000);
console.log(getPrice("konsumen", "satu juta"));