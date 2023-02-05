function createElement(...tegs) {
    let store = []
    for (let teg of tegs) {
        let createdTeg = document.createElement(`${teg}`)
        store.push(createdTeg)
    }
    return store
}

fetch('http://localhost:1988/get_cars', {
    method: "POST"
}).then(res => res.json())
    .then(cars => {
        for (let car of cars) {
            let [tr, td1, td2, td3, td4, td5, td6, i, i2] = createElement('tr', 'td', 'td', 'td', 'td', 'td', 'td', 'i', 'i');
            td1.textContent = car.id;
            td2.textContent = car.fio;
            td3.textContent = car.address;
            td4.textContent = car.passport;
            td5.textContent = car.marka;

            i.className += 'fa fa-trash text-danger';
            i.style.cursor = 'pointer';
            i.addEventListener('click', () => {
                fetch(`http://localhost:1988/delete_car/${car.id}`, {
                    method: "POST"
                }).then(res => res.json())
                    .then(info => alert(info.msg))
            });

            i2.className += 'fa fa-edit text-primary ml-3';
            i2.setAttribute("data-target", "#myModal");
            i2.setAttribute("data-toggle", "modal");
            i2.style.cursor = 'pointer';
            i2.addEventListener('click', () => {
                fio.value = car.fio
                address.value = car.address
                passport.value = car.passport
                marka.value = car.marka
                localStorage.setItem('carId', car.id)
            });

            td6.append(i, i2);
            tr.append(td1, td2, td3, td4, td5, td6);
            tbody.append(tr);
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            let { fio, address, passport, marka } = event.target;
            fetch(`http://localhost:1988/update_car/${localStorage.getItem('carId')}`, {
                method: "POST",
                body: JSON.stringify({
                    fio: fio.value,
                    address: address.value,
                    passport: passport.value,
                    marka: marka.value
                })
            }).then(res => res.json())
                .then(info => alert(info.msg))

        });
    });