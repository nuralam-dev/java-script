
let num = 1;
let sum = 0;
while (num < 10) {
    console.log(num);
    sum = sum + num;
    console.log('sum:', sum)
    num++;
}
i = 0;
while (i <= 10) {
    sum = sum + i;
    console.log(i);
    i++;
}
console.log('total sum:', sum);

for(let i = 0; i <= 10; i++) {
    sum = sum + i;
    console.log(i);
}
console.log('total sum:', sum);