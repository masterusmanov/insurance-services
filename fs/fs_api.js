import fs from 'fs';

const read_user = (file_name) => {
    return JSON.parse(fs.readFileSync(`./model/${file_name}`, 'utf8'));
};

const write_user = (file_name, data) => {
    return fs.writeFile(`./model/${file_name}`, JSON.stringify(data, null, 4), (err) => {
        if (err) throw err;
        console.log('Created!!!');
    })
};

export {
    read_user,
    write_user
}