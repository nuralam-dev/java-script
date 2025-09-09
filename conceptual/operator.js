var x = 8;
var y = 9;
var total = x + y - 8;
console.log('total', total)

var modulus = 23;
console.log('modulus', modulus % 2);

var x = 40;
x += 2
console.log(x)

var num = 290.565;
console.log(parseInt(num));

// if else { ! its mean not equal}
    var num = 3;

if (num == 3){
    console.log('give me a pice');}
else{
    console.log('give me two pice');
}

// logical &

var hour = 14;

if (hour >= 6 && hour < 12){
    console.log('good morning !');
}
else {
    if (hour >= 12 && hour < 18){
        console.log('good afternoon !');
    } 
    else {
    console.log('good evening !');
}
}

// logical or

var x = 5;

if (x > 3 || x < 7){
    console.log('the condition is true');
}
else (
    console.log('the condition is false')
)