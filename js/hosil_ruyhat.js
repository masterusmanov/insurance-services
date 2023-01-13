function createElement(...tegs) {
    let store = []
    for (let teg of tegs) {
        let createdTeg = document.createElement(`${teg}`)
        store.push(createdTeg)
    }
    return store
}

fetch('http://localhost:1988/get_harvests', {
    method: "POST"
}).then(res => res.json())
    .then(harvests => {
        for (let harvest of harvests) {
            let [tr, td1, td2, td3, td4, td5, td6, i, i2] = createElement('tr', 'td', 'td', 'td', 'td', 'td', 'td', 'i', 'i');
            td1.textContent = harvest.id;
            td2.textContent = harvest.fio;
            td3.textContent = harvest.address;
            td4.textContent = harvest.passport;
            td5.textContent = harvest.hosil;

            i.className += 'fa fa-trash text-danger';
            i.style.cursor = 'pointer';
            i.addEventListener('click', () => {
                fetch(`http://localhost:1988/delete_harvest/${harvest.id}`, {
                    method: "POST"
                }).then(res => res.json())
                    .then(info => alert(info.msg))
            });

            i2.className += 'fa fa-edit text-primary ml-3';
            i2.setAttribute("data-target", "#myModal");
            i2.setAttribute("data-toggle", "modal");
            i2.style.cursor = 'pointer';
            i2.addEventListener('click', () => {
                fio.value = harvest.fio
                address.value = harvest.address
                passport.value = harvest.passport
                hosil.value = harvest.hosil
                localStorage.setItem('harvestId', harvest.id)
            });

            td6.append(i, i2);
            tr.append(td1, td2, td3, td4, td5, td6);
            tbody.append(tr);
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            let { fio, address, passport, hosil } = event.target;
            fetch(`http://localhost:1988/update_harvest/${localStorage.getItem('harvestId')}`, {
                method: "POST",
                body: JSON.stringify({
                    fio: fio.value,
                    address: address.value,
                    passport: passport.value,
                    hosil: hosil.value,
                })
            }).then(res => res.json())
                .then(info => alert(info.msg))

        });
    });