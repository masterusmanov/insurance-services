let email = document.querySelector('#email');
let password = document.querySelector('#password');
let checkbox = document.querySelector('#checkbox');

const checkEmail = (check) =>{
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(check);
}

function showValue(){
    if(password.type === "password"){
        password.type = 'text';
    }else{
        password.type = 'password';
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(email.value == ''){
        alert("You did not enter a email!");
    }else if(password.value == ''){
        alert("You did not enter a password!")
    }

    fetch(`http://localhost:1988/get_users`, {
        method: "POST"
    }).then(res => res.json())
        .then(users => {
            if(email.value == "Admin@admin.com" && password.value == "insuranceAdmin"){
                location.href = '../html/Main_page_admin.html'
            }
            for(let user of users){
                if(user.email == email.value && user.password == password.value){
                    location.href = '../html/Main_page.html'
                }
                
        }
    });
});