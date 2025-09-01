
let num = 1;
while (num <= 10) {
    console.log(num);
    if (num % 2 === 0) {
        console.log('even:', num);
    }
    num++;
}  

for(let i = 0; i <= 10; i++) {
    console.log('for i:', i);
}

for(let i = 0; i <= 20; i=i+2){
    console.log('even', i);
}

for(let i = 1; i <= 20; i=i+2){
    console.log('odd', i);
}