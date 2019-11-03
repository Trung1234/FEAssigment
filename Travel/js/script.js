

function login(){
    hideErrors();
    document.getElementById("success").innerHTML = "";
    var name = document.getElementById("name").value
    var password = document.getElementById("password").value;
    if(name.length==0){
        document.getElementById("errorName").innerHTML = "Missing Email!";
    }else{
        if(password.length==0){;
            document.getElementById("errorPassword").innerHTML = "Missing Password";
        }
        else if(password.length < 6){
            document.getElementById("errorPassword").innerHTML = "Password is too short, please input a least 6 characters";
        }else{
            hideErrors();
            document.getElementById("success").innerHTML = "Login successfully!!"
        }
    }   
}
function hideErrors(){
    document.getElementById("errorName").innerHTML = "";
    document.getElementById("errorPassword").innerHTML = "";
}

