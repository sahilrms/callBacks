let person = {
    'first_name': 'sahil',
    'last_name': 'hussain',
    'age': 29
}

function ageFinder(user, callback) {
    let ageInDays = user.age * 365;
    let fullName = `${user.first_name} ${user.last_name}`;
    callback(ageInDays, fullName);
}

function putData(age, fullName) {

    console.log(`Age of ${fullName} is ${age} Days`)
}

ageFinder(person, putData);