let fio = document.querySelector('#fio');
let address = document.querySelector('#address');
let passport = document.querySelector('#passport');
let credit = document.querySelector('#credit');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let { fio, address, passport, credit } = event.target;
    fetch('http://localhost:1988/create_bank', {
        method: "POST",
        body: JSON.stringify({
            fio: fio.value,
            address: address.value,
            passport: passport.value,
            credit: credit.value
        })
    }).then(res => res.json())
    .then(info => alert(info.msg))
    .catch(err=>console.log(err))
    alert("Kiritilgan ma'lumot qo'shildi");
});