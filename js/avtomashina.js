let fio = document.querySelector('#fio');
let address = document.querySelector('#address');
let passport = document.querySelector('#passport');
let marka = document.querySelector('#marka');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let { fio, address, passport, marka } = event.target;
    fetch('http://localhost:1988/create_car', {
        method: "POST",
        body: JSON.stringify({
            fio: fio.value,
            address: address.value,
            passport: passport.value,
            marka: marka.value
        })
    }).then(res => res.json())
    .then(info => alert(info.msg))
    .catch(err=>console.log(err))
    alert("Kiritilgan ma'lumot qo'shildi");
});