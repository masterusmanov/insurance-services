function createElement(...tegs) {
    let store = []
    for (let teg of tegs) {
        let createdTeg = document.createElement(`${teg}`)
        store.push(createdTeg)
    }
    return store
}

fetch('http://localhost:1988/get_lifes', {
    method: "POST"
}).then(res => res.json())
    .then(lifes => {
        for (let life of lifes) {
            let [tr, td1, td2, td3, td4, td6, i, i2] = createElement('tr', 'td', 'td', 'td', 'td', 'td', 'i', 'i');
            td1.textContent = life.id;
            td2.textContent = life.fio;
            td3.textContent = life.address;
            td4.textContent = life.passport;

            i.className += 'fa fa-trash text-danger';
            i.style.cursor = 'pointer';
            i.addEventListener('click', () => {
                fetch(`http://localhost:1988/delete_life/${life.id}`, {
                    method: "POST"
                }).then(res => res.json())
                    .then(info => alert(info.msg))
            });

            i2.className += 'fa fa-edit text-primary ml-3';
            i2.setAttribute("data-target", "#myModal");
            i2.setAttribute("data-toggle", "modal");
            i2.style.cursor = 'pointer';
            i2.addEventListener('click', () => {
                fio.value = life.fio
                address.value = life.address
                passport.value = life.passport
                localStorage.setItem('lifeId', life.id)
            });

            td6.append(i, i2);
            tr.append(td1, td2, td3, td4, td6);
            tbody.append(tr);
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            let { fio, address, passport } = event.target;
            fetch(`http://localhost:1988/update_life/${localStorage.getItem('lifeId')}`, {
                method: "POST",
                body: JSON.stringify({
                    fio: fio.value,
                    address: address.value,
                    passport: passport.value,
                })
            }).then(res => res.json())
                .then(info => alert(info.msg))

        });
    });