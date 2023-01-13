import http from 'http';
import { read_user, write_user } from './fs/fs_api.js';
import url from 'url';

let options = { "Content-Type": "aplication/json", "Access-Control-Allow-Origin": "*" };
http.createServer((req, res) => {
    if (req.method === 'POST') {
        if (req.url == '/get_users') {
            let users = read_user('users.json');
            res.writeHead(200, options);
            res.end(JSON.stringify(users))
        };
        if (req.url == '/create_user') {
            req.on('data', (chunk) => {
                let new_user = JSON.parse(chunk);
                let users = read_user('users.json');
                users.push({ id: users.at(-1).id + 1, ...new_user });
                write_user('users.json', users);
                res.writeHead(200, options);
                res.end('Created user!!!');
            });
        };
        let user_id = url.parse(req.url).pathname.split('/')[2];
        if (req.url === `/update_user/${user_id}`) {
            req.on('data', (chunk) => {
                let update_user = JSON.parse(chunk);
                let users = read_user('users.json');
                let { title, body } = update_user;
                users.forEach(user => {
                    if (user.id == user_id) {
                        title && (user.title = title);
                        body && (user.body = body);
                    }
                });
                write_user('users.json', users);
                res.writeHead(200, options);
                res.end('user updated!');
            });
        };
        if (req.url === `/delete_user/${user_id}`) {
            let users = read_user('users.json');
            users.forEach((user, idx) => {
                if (user.id == user_id) {
                    users.splice(idx, 1);
                };
            });
            write_user('users.json', users);
            res.writeHead(200, options);
            res.end('user deleted!');
        };
        // ============================================================================================;
        if (req.url == '/get_cars') {
            let cars = read_user('avtomashina.json');
            res.writeHead(200, options);
            res.end(JSON.stringify(cars))
        };
        if (req.url == '/create_car') {
            req.on('data', (chunk) => {
                let new_car = JSON.parse(chunk);
                let cars = read_user('avtomashina.json');
                cars.push({ id: cars.at(-1).id + 1, ...new_car });
                write_user('avtomashina.json', cars);
                res.writeHead(200, options);
                res.end('Created car!!!');
            });
        };
        let car_id = url.parse(req.url).pathname.split('/')[2];
        if (req.url === `/update_car/${car_id}`) {
            req.on('data', (chunk) => {
                let update_car = JSON.parse(chunk);
                let cars = read_user('avtomashina.json');
                let { fio, address, passport, marka } = update_car;
                cars.forEach(car => {
                    if (car.id == car_id) {
                        fio && (car.fio = fio);
                        address && (car.address = address);
                        passport && (car.passport = passport);
                        marka && (car.marka = marka);
                    }
                });
                write_user('avtomashina.json', cars);
                res.writeHead(200, options);
                res.end('car updated!');
            });
        };
        if (req.url === `/delete_car/${car_id}`) {
            let cars = read_user('avtomashina.json');
            cars.forEach((car, idx) => {
                if (car.id == car_id) {
                    cars.splice(idx, 1);
                };
            });
            write_user('avtomashina.json', cars);
            res.writeHead(200, options);
            res.end('car deleted!');
        };
        // ============================================================================================;
        if (req.url == '/get_banks') {
            let banks = read_user('bank.json');
            res.writeHead(200, options);
            res.end(JSON.stringify(banks))
        };
        if (req.url == '/create_bank') {
            req.on('data', (chunk) => {
                let new_bank = JSON.parse(chunk);
                let banks = read_user('bank.json');
                banks.push({ id: banks.at(-1).id + 1, ...new_bank });
                write_user('bank.json', banks);
                res.writeHead(200, options);
                res.end('Created credit!!!');
            });
        };
        let bank_id = url.parse(req.url).pathname.split('/')[2];
        if (req.url === `/update_bank/${bank_id}`) {
            req.on('data', (chunk) => {
                let update_bank = JSON.parse(chunk);
                let banks = read_user('bank.json');
                let { fio, address, passport, credit } = update_bank;
                banks.forEach(bank => {
                    if (bank.id == bank_id) {
                        fio && (bank.fio = fio);
                        address && (bank.address = address);
                        passport && (bank.passport = passport);
                        credit && (bank.credit = credit);
                    }
                });
                write_user('bank.json', banks);
                res.writeHead(200, options);
                res.end('Kredit updated!');
            });
        };
        if (req.url === `/delete_bank/${car_id}`) {
            let banks = read_user('bank.json');
            banks.forEach((bank, idx) => {
                if (bank.id == bank_id) {
                    banks.splice(idx, 1);
                };
            });
            write_user('bank.json', banks);
            res.writeHead(200, options);
            res.end('Kredit deleted!');
        };
        // ============================================================================================;
        if (req.url == '/get_animals') {
            let animals = read_user('chorva.json');
            res.writeHead(200, options);
            res.end(JSON.stringify(animals))
        };
        if (req.url == '/create_animal') {
            req.on('data', (chunk) => {
                let new_animal = JSON.parse(chunk);
                let animals = read_user('chorva.json');
                animals.push({ id: animals.at(-1).id + 1, ...new_animal });
                write_user('chorva.json', animals);
                res.writeHead(200, options);
                res.end('Created animal!!!');
            });
        };
        let animal_id = url.parse(req.url).pathname.split('/')[2];
        if (req.url === `/update_animal/${animal_id}`) {
            req.on('data', (chunk) => {
                let update_animal = JSON.parse(chunk);
                let animals = read_user('chorva.json');
                let { fio, address, passport, chorva } = update_animal;
                animals.forEach(animal => {
                    if (animal.id == animal_id) {
                        fio && (animal.fio = fio);
                        address && (animal.address = address);
                        passport && (animal.passport = passport);
                        chorva && (animal.chorva = chorva);
                    }
                });
                write_user('chorva.json', animals);
                res.writeHead(200, options);
                res.end('animal updated!');
            });
        };
        if (req.url === `/delete_animal/${animal_id}`) {
            let animals = read_user('chorva.json');
            animals.forEach((animal, idx) => {
                if (animal.id == animal_id) {
                    animals.splice(idx, 1);
                };
            });
            write_user('chorva.json', animals);
            res.writeHead(200, options);
            res.end('animal deleted!');
        };
        // ============================================================================================;
        if (req.url == '/get_lifes') {
            let lifes = read_user('hayot.json');
            res.writeHead(200, options);
            res.end(JSON.stringify(lifes))
        };
        if (req.url == '/create_life') {
            req.on('data', (chunk) => {
                let new_life = JSON.parse(chunk);
                let lifes = read_user('hayot.json');
                lifes.push({ id: lifes.at(-1).id + 1, ...new_life });
                write_user('hayot.json', lifes);
                res.writeHead(200, options);
                res.end('Created life!!!');
            });
        };
        let life_id = url.parse(req.url).pathname.split('/')[2];
        if (req.url === `/update_life/${life_id}`) {
            req.on('data', (chunk) => {
                let update_life = JSON.parse(chunk);
                let lifes = read_user('hayot.json');
                let { fio, address, passport } = update_life;
                lifes.forEach(life => {
                    if (life.id == life_id) {
                        fio && (life.fio = fio);
                        address && (life.address = address);
                        passport && (life.passport = passport);
                    }
                });
                write_user('lifes.json', lifes);
                res.writeHead(200, options);
                res.end('life updated!');
            });
        };
        if (req.url === `/delete_life/${life_id}`) {
            let lifes = read_user('hayot.json');
            lifes.forEach((life, idx) => {
                if (life.id == life_id) {
                    lifes.splice(idx, 1);
                };
            });
            write_user('hayot.json', lifes);
            res.writeHead(200, options);
            res.end('life deleted!');
        };
        // ============================================================================================;
        if (req.url == '/get_harvests') {
            let harvests = read_user('hosil.json');
            res.writeHead(200, options);
            res.end(JSON.stringify(harvests))
        };
        if (req.url == '/create_harvest') {
            req.on('data', (chunk) => {
                let new_harvest = JSON.parse(chunk);
                let harvests = read_user('hosil.json');
                harvests.push({ id: harvests.at(-1).id + 1, ...new_harvest });
                write_user('hosil.json', harvests);
                res.writeHead(200, options);
                res.end('Created harvest!!!');
            });
        };
        let harvest_id = url.parse(req.url).pathname.split('/')[2];
        if (req.url === `/update_harvest/${harvest_id}`) {
            req.on('data', (chunk) => {
                let update_harvest = JSON.parse(chunk);
                let harvests = read_user('hosil.json');
                let { fio, address, passport } = update_harvest;
                harvests.forEach(harvest => {
                    if (harvest.id == harvest_id) {
                        fio && (harvest.fio = fio);
                        address && (harvest.address = address);
                        passport && (harvest.passport = passport);
                    }
                });
                write_user('hosil.json', harvests);
                res.writeHead(200, options);
                res.end('harvest updated!');
            });
        };
        if (req.url === `/delete_harvest/${harvest_id}`) {
            let harvests = read_user('hosil.json');
            harvests.forEach((harvest, idx) => {
                if (harvest.id == harvest_id) {
                    harvests.splice(idx, 1);
                };
            });
            write_user('hosil.json', harvests);
            res.writeHead(200, options);
            res.end('harvest deleted!');
        };
        // ============================================================================================;
        if (req.url == '/get_propertys') {
            let propertys = read_user('molmulk.json');
            res.writeHead(200, options);
            res.end(JSON.stringify(propertys))
        };
        if (req.url == '/create_property') {
            req.on('data', (chunk) => {
                let new_property = JSON.parse(chunk);
                let propertys = read_user('molmulk.json');
                propertys.push({ id: propertys.at(-1).id + 1, ...new_property });
                write_user('molmulk.json', propertys);
                res.writeHead(200, options);
                res.end('Created property!!!');
            });
        };
        let property_id = url.parse(req.url).pathname.split('/')[2];
        if (req.url === `/update_property/${property_id}`) {
            req.on('data', (chunk) => {
                let update_property = JSON.parse(chunk);
                let propertys = read_user('molmulk.json');
                let { fio, address, passport, mulk } = update_property;
                propertys.forEach(property => {
                    if (property.id == property_id) {
                        fio && (property.fio = fio);
                        address && (property.address = address);
                        passport && (property.passport = passport);
                        mulk && (property.mulk = mulk);
                    }
                });
                write_user('molmulk.json', propertys);
                res.writeHead(200, options);
                res.end('property updated!');
            });
        };
        if (req.url === `/delete_property/${property_id}`) {
            let propertys = read_user('molmulk.json');
            propertys.forEach((property, idx) => {
                if (property.id == property_id) {
                    propertys.splice(idx, 1);
                };
            });
            write_user('molmulk.json', propertys);
            res.writeHead(200, options);
            res.end('property deleted!');
        };
    }

}).listen(1988, () => {
    console.log('Server is running on the 1988 port!');
})