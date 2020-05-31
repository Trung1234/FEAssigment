



function caculateBMI(height, weight){
    return Number(weight)/(Number(height)*Number(height));
}

function compare(){
    // khai báo biến và lấy giá trị của các input
    var height1 = document.getElementById('heightToan').value;
    var weight1 = document.getElementById('weightToan').value;
    var height2 = document.getElementById('heightMinh').value;
    var weight2 = document.getElementById('weightMinh').value;
    //tính bmi bằng gọi hàm 
    var bmi1 = caculateBMI(height1, weight1);
    var bmi2 = caculateBMI(height2, weight2);
    console.log('BMI của Toàn :' +bmi1);
    console.log('BMI của Minh :' +bmi2);
    if(bmi1 > bmi2){
        console.log('BMI của Toàn lớn hơn của Minh');
        document.getElementById("result").innerHTML = 'BMI của Toàn lớn hơn của Minh';
    }
    else{
        console.log('BMI của Toàn nhỏ hơn của Minh');
        document.getElementById("result").innerHTML = 'BMI của Toàn nhỏ hơn của Minh';
    }
}