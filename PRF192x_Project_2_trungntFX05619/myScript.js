



function add(){
    // dùng dom để lấy giá trị từ input
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    // set giá trị cho ô kết quả
    document.getElementById("result").value = Number(number1)+Number(number2);
}

function subtract(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    document.getElementById("result").value = Number(number1)-Number(number2);
}

function multiply(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    document.getElementById("result").value = Number(number1)*Number(number2);
}

function divide(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    document.getElementById("result").value = Number(number1)/Number(number2);
}

