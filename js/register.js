let user_name = document.querySelector('#user_name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let password1 = document.querySelector('#password1');
let checkbox = document.querySelector('#checkbox');

const checkEmail = (check) =>{
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(check);
}

function showValue(){
    if(password.type === "password" || password1.type === "password"){
        password.type = 'text';
        password1.type = 'text';
    }else{
        password.type = 'password';
        password1.type = 'password';
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(user_name.value == ''){
        alert("Ismingizni kiriting!");
    }else if(email.value == ''){
        alert("E-mailni kiriting!");
    }else if(password.value == ''){
        alert("Ikkinchi E-mailni kiriting!");
    }else if(password1.value == ''){
        alert("Parolni kiritmadingiz!")
    }

    let len = password.value.length;
    if(len < 8){
        return alert('the password entered must be longer than eight characters')
    }else{    
        let res = checkEmail(email.value);
        if(!res){
            alert("You entered the wrong email!");
        }
    }
    if(password.value == password1.value){
        let { user_name, email, password } = event.target;
        fetch('http://localhost:1988/create_user', {
            method: "POST",
            body: JSON.stringify({
                user_name: user_name.value,
                email: email.value,
                password: password.value
            })
        }).then(res => res.json())
        .then(info => alert(info.msg))
        .catch(err=>console.log(err))
        location.href = '../html/login.html'
    }else{
        alert("You entered the second email incorrectly!")
    }
    
});