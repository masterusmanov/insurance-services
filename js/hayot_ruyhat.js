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

            

            

            td6.append(i, i2);
            tr.append(td1, td2, td3, td4, td6);
            tbody.append(tr);
        };


    });