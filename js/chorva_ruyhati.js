function createElement(...tegs) {
    let store = []
    for (let teg of tegs) {
        let createdTeg = document.createElement(`${teg}`)
        store.push(createdTeg)
    }
    return store
}

fetch('http://localhost:1988/get_animals', {
    method: "POST"
}).then(res => res.json())
    .then(animals => {
        for (let animal of animals) {
            let [tr, td1, td2, td3, td4, td5, td6, i, i2] = createElement('tr', 'td', 'td', 'td', 'td', 'td', 'td', 'i', 'i');
            td1.textContent = animal.id;
            td2.textContent = animal.fio;
            td3.textContent = animal.address;
            td4.textContent = animal.passport;
            td5.textContent = animal.chorva;

            i.className += 'fa fa-trash text-danger';
            i.style.cursor = 'pointer';
            i.addEventListener('click', () => {
                fetch(`http://localhost:1988/delete_animal/${animal.id}`, {
                    method: "POST"
                }).then(res => res.json())
                    .then(info => alert(info.msg))
            });

            i2.className += 'fa fa-edit text-primary ml-3';
            i2.setAttribute("data-target", "#myModal");
            i2.setAttribute("data-toggle", "modal");
            i2.style.cursor = 'pointer';
            i2.addEventListener('click', () => {
                fio.value = animal.fio
                address.value = animal.address
                passport.value = animal.passport
                chorva.value = animal.chorva
                localStorage.setItem('animalId', animal.id)
            });

            td6.append(i, i2);
            tr.append(td1, td2, td3, td4, td5, td6);
            tbody.append(tr);
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            let { fio, address, passport, chorva } = event.target;
            fetch(`http://localhost:1988/update_animal/${localStorage.getItem('animalId')}`, {
                method: "POST",
                body: JSON.stringify({
                    fio: fio.value,
                    address: address.value,
                    passport: passport.value,
                    chorva: chorva.value
                })
            }).then(res => res.json())
                .then(info => alert(info.msg))

        });
    });