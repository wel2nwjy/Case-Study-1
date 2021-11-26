
function validate(){
    let valid=true;
    let getusername=document.getElementById("inputVal1");
    let getpassword=document.getElementById("inputVal2");
    let valid1=check(getusername,1);
    let valid2=check(getpassword,2);
    if(valid1==true && valid2==true){
        if(getusername.value.trim() != "admin"|| getpassword.value.trim() != "12345"){
            setTimeout(function(){ alert("Invalid Username/Password! Please try again"); }, 600);
            valid=false;
        }  
    }else{
        valid=false; 
    }

    return valid;
}

function check(getobj,error){
    let msg=document.getElementById("errormsg"+error);
    let valid=true;
    
    if (getobj.value.trim()===""){         
        msg.style.border="1px solid red";
        if(error==1){
            msg.innerHTML = 'Username is required..!';
        }else{
            msg.innerHTML = 'Password is required..!';
        }
        valid = false;
    }else{
        msg.style.border='initial';
        msg.innerHTML = '';       
    }
    return valid;
}


