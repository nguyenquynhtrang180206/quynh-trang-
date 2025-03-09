// Kiểm tra số nguyên dương
function checkPositive() {
    let num = Number(document.getElementById("numInput").value);
    let result = num > 0 && Number.isInteger(num) ? `${num} là số nguyên dương ✅` : `${num} không phải số nguyên dương ❌`;
    document.getElementById("result").innerText = result;
}

//  Kiểm tra số âm
function checkNegative() {
    let num = Number(document.getElementById("numInput").value);
    let result = num < 0 ? `${num} là số âm ✅` : `${num} không phải số âm ❌`;
    document.getElementById("result").innerText = result;
}

//  Tính tổng hai số
function sumNumbers() {
    let num1 = Number(prompt("Nhập số thứ nhất:"));
    let num2 = Number(prompt("Nhập số thứ hai:"));
    let sum = num1 + num2;
    document.getElementById("result").innerText = `Tổng hai số ${num1} + ${num2} = ${sum} ✅`;
}

//  Giải phương trình bậc 1: ax + b = 0
function solveLinearEquation() {
    let a = Number(prompt("Nhập a:"));
    let b = Number(prompt("Nhập b:"));
    let result;
    if (a === 0) {
        result = (b === 0) ? "Phương trình có vô số nghiệm ✅" : "Phương trình vô nghiệm ❌";
    } else {
        let x = -b / a;
        result = `Nghiệm của phương trình là x = ${x} ✅`;
    }
    document.getElementById("result").innerText = result;
}

// Kiểm tra số nguyên tố
function checkPrime() {
    let num = Number(document.getElementById("numInput").value);
    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    let result = isPrime ? `${num} là số nguyên tố ✅` : `${num} không phải số nguyên tố ❌`;
    document.getElementById("result").innerText = result;
}

// Kiểm tra số chính phương
function checkPerfectSquare() {
    let num = Number(document.getElementById("numInput").value);
    let sqrt = Math.sqrt(num);
    let result = Number.isInteger(sqrt) ? `${num} là số chính phương ✅` : `${num} không phải số chính phương ❌`;
    document.getElementById("result").innerText = result;
}
