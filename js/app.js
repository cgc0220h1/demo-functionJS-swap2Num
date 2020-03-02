function startFunc() {
    let numA = prompt("Nhập vào số A");
    let numB = prompt("Nhập vào số B");
    alert("Số A là: " + numA + " Số B là: " + numB);
    let arrAB = swap(numA,numB);
    alert("Sau khi hoán đổi, số A là: " + arrAB[0] + " số B là: " + arrAB[1])
}

function swap(num1,num2) {
    let arr = [num1,num2];
    let temp;
    temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
}