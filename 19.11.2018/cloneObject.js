

function cloneObject () {
    var user = {
        name: 'Kolya',
        surname: 'Kuzevych',
        age: 27
    };
    console.log('Old Object "user" is:');
    console.log(user);
    var cloneUser = {};

    for (var i in user) {
        cloneUser[i]=user[i];
    }

    console.log('clone Object is:');
    console.log(cloneUser);
}