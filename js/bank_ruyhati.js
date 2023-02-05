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

            


            td6.append(i, i2);
            tr.append(td1, td2, td3, td4, td5, td6);
            tbody.append(tr);
        };

    });