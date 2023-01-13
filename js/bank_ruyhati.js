function createElement(...tegs) {
    let store = []
    for (let teg of tegs) {
        let createdTeg = document.createElement(`${teg}`)
        store.push(createdTeg)
    }
    return store
}

fetch('http://localhost:1988/get_banks', {
    method: "POST"
}).then(res => res.json())
    .then(banks => {
        for (let bank of banks) {
            let [tr, td1, td2, td3, td4, td5, td6, i, i2] = createElement('tr', 'td', 'td', 'td', 'td', 'td', 'td', 'i', 'i');
            td1.textContent = bank.id;
            td2.textContent = bank.fio;
            td3.textContent = bank.address;
            td4.textContent = bank.passport;
            td5.textContent = bank.credit;

            i.className += 'fa fa-trash text-danger';
            i.style.cursor = 'pointer';
            i.addEventListener('click', () => {
                fetch(`http://localhost:1988/delete_bank/${bank.id}`, {
                    method: "POST"
                }).then(res => res.json())
                    .then(info => alert(info.msg))
            });

            i2.className += 'fa fa-edit text-primary ml-3';
            i2.setAttribute("data-target", "#myModal");
            i2.setAttribute("data-toggle", "modal");
            i2.style.cursor = 'pointer';
            i2.addEventListener('click', () => {
                fio.value = bank.fio
                address.value = bank.address
                passport.value = bank.passport
                credit.value = bank.credit
                localStorage.setItem('bankId', bank.id)
            });

            td6.append(i, i2);
            tr.append(td1, td2, td3, td4, td5, td6);
            tbody.append(tr);
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            let { fio, address, passport, credit } = event.target;
            fetch(`http://localhost:1988/update_bank/${localStorage.getItem('bankId')}`, {
                method: "POST",
                body: JSON.stringify({
                    fio: fio.value,
                    address: address.value,
                    passport: passport.value,
                    credit: credit.value
                })
            }).then(res => res.json())
                .then(info => alert(info.msg))

        });
    });