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


            

            td6.append(i, i2);
            tr.append(td1, td2, td3, td4, td5, td6);
            tbody.append(tr);
        };

        
    });