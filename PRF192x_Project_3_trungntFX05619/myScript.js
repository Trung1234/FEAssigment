


// xử lý xự kiện khi ấn Đăng kí
function register(){  
    // khai báo biến và lấy giá trị của các input
    var surname = document.getElementById("surname").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var repassword = document.getElementById('repass').value;
    var year = document.getElementById('years');
    var birthyear = year.options[year.selectedIndex].value;
    var citys = document.getElementById('city');
    var city = citys.options[citys.selectedIndex].value;
    // xử lý logic
    if(isEmpty(surname)){
        alert('Chưa nhập họ');
    }else{
        if(surname.length<2 || surname.length>30){
            alert('họ phải từ 2 đến 30 ký tự');
        }
        else{
            if(isEmpty(name)){
                alert('Hãy nhập vào tên');
            }else{
                if(name.length<2 || name.length>30){
                    alert('Tên phải từ 2 đến 30 ký tự');
                }
                else{
                    if(isEmpty(email)){
                        alert('Hãy nhập vào email');
                    }else{
                        if(!validateEmail(email)){
                            alert('email không đúng định dạng');
                        }else{
                            if(isEmpty(password)){
                                alert('Hãy nhập vào mật khẩu');
                            }else{
                                if(password.length < 6 || password.length > 30){
                                    alert('Mật khẩu phải từ 6 đến 30 kí tự');
                                }
                                else{
                                    if(isEmpty(password)){
                                        alert('Hãy nhập vào ô nhập lại mật khẩu');
                                    }else{
                                        if(password.localeCompare(repassword)){
                                            alert('Mật khẩu nhập lại không khớp');
                                        }else{
                                            if(isEmpty(birthyear)){
                                                alert('Hãy chọn năm sinh');
                                            }
                                            else{
                                                if(isEmpty(city)){
                                                    alert('Hãy chọn  thành phố');
                                                }
                                                else{
                                                    alert('Đăng kí thành công');
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }               
            }
        }       
    }
}

// validate email dùng regex
function validateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return inputText.match(mailformat);   
}

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}