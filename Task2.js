// Add leading 0 number
// ex: 5 => 0005

function convertNumber(num, size) {
    var s = num+"";
    while (s.length < 4) s = "0" + s;
    return s;
}

convertNumber(5);
console.log(convertNumber(5));

convertNumber(99);
console.log(convertNumber(99));