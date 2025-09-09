
// index
var num = [10, 20, 30, 40, 50, 60]
console.log(num[3])

var num = [10, 20, 30, 40, 50, 60]
num.push(60, 70, 80, 90, 100)
console.log(num)

var num = [10, 20, 30, 40, 50, 60]
num.pop() 
console.log(num)

var num = [10, 20, 30, 40, 50, 60]
num.unshift(60, 70, 80, 90, 100)
console.log(num)

var num = [10, 20, 30, 40, 50, 60]
num.shift()
console.log(num)

// slice 
var num = [10, 20, 30, 40, 50, 60]
console.log('slice num', num.slice(1,4));
console.log('slice num', num.slice(4));

// splice( start , delete count , element 1, element 2.........)
var num = [10, 20, 30, 40, 50, 60]
console.log('splice num', num.splice(2,2) )

var num = [10, 20, 30, 40, 50, 60]
num.splice(3,1)
console.log(num)