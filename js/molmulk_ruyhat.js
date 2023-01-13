function createElement(...tegs) {
    let store = []
    for (let teg of tegs) {
        let createdTeg = document.createElement(`${teg}`)
        store.push(createdTeg)
    }
    return store
}

fetch('http://localhost:1988/get_propertys', {
    method: "POST"
}).then(res => res.json())
    .then(propertys => {
        for (let property of propertys) {
            let [tr, td1, td2, td3, td4, td5, td6, i, i2] = createElement('tr', 'td', 'td', 'td', 'td', 'td', 'td', 'i', 'i');
            td1.textContent = property.id;
            td2.textContent = property.fio;
            td3.textContent = property.address;
            td4.textContent = property.passport;
            td5.textContent = property.mulk;

            i.className += 'fa fa-trash text-danger';
            i.style.cursor = 'pointer';
            i.addEventListener('click', () => {
                fetch(`http://localhost:1988/delete_property/${property.id}`, {
                    method: "POST"
                }).then(res => res.json())
                    .then(info => alert(info.msg))
            });

            i2.className += 'fa fa-edit text-primary ml-3';
            i2.setAttribute("data-target", "#myModal");
            i2.setAttribute("data-toggle", "modal");
            i2.style.cursor = 'pointer';
            i2.addEventListener('click', () => {
                fio.value = property.fio
                address.value = property.address
                passport.value = property.passport
                mulk.value = property.mulk
                localStorage.setItem('propertyId', property.id)
            });

            td6.append(i, i2);
            tr.append(td1, td2, td3, td4, td5, td6);
            tbody.append(tr);
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            let { fio, address, passport, mulk } = event.target;
            fetch(`http://localhost:1988/update_property/${localStorage.getItem('propertyId')}`, {
                method: "POST",
                body: JSON.stringify({
                    fio: fio.value,
                    address: address.value,
                    passport: passport.value,
                    mulk: mulk.value,
                })
            }).then(res => res.json())
                .then(info => alert(info.msg))

        });
    });