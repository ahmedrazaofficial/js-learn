// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 4) {
        console.log("4 is the best number");

    }
    console.log(element);
}

for (let j = 0; j <= 10; j++) {
    console.log(`outer loop value: ${j}`);

    for (let k = 0; k <= 10; k++) {
        console.log(`inner loop value ${k} and inner loop ${j}`);
        console.log(j + ' * ' + k + ' = ' + j * k);

    }
}

let myArray = ["Ahmed", "anas", "ibrahim"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);


}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("dectected 5");
        break
    }
    console.log(index);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("dectected 5");
        continue
    }
    console.log(index);
}