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

            


            td6.append(i, i2);
            tr.append(td1, td2, td3, td4, td5, td6);
            tbody.append(tr);
        };

       
    });