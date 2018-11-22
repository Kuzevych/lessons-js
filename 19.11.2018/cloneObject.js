var user = {
    name: 'Kolya',
    surname: 'Kuzevych',
    age: 27,
    company: {
        name: 'Prodex',
        address: 'R. Okipnoy'
    }
};

function simpleClone (data) {
    var clonedData = {};
    for (var i in data) {
        if(typeof data[i]!=='object'){
            clonedData[i] = data[i];
        } else if(typeof user[i]==='object') {
            clonedData[i] = simpleClone(data[i]);
        }
    }

    return clonedData;
}

console.log(user.company.name);


const clonedUser = simpleClone(user);

clonedUser.company.name = 'Another';
console.log(clonedUser.company.name);
console.log(user.company.name);