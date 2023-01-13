let fio = document.querySelector('#fio');
let address = document.querySelector('#address');
let passport = document.querySelector('#passport');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    let { fio, address, passport } = event.target;
    fetch('http://localhost:1988/create_life', {
        method: "POST",
        body: JSON.stringify({
            fio: fio.value,
            address: address.value,
            passport: passport.value,
        })
    }).then(res => res.json())
    .then(info => alert(info.msg))
    .catch(err=>console.log(err))
    alert("Kiritilgan ma'lumot qo'shildi");
});