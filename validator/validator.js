function validate() {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let egn = document.getElementById("egn").value
    let age = document.getElementById("age").value
    let address = document.getElementById("address").value
    let password = document.getElementById("password").value
    let err = "";
    if(!isNameValid(firstName)){
        err += "Invalid first name\n";
    }
    if(!isNameValid(lastName)){
        err += "Invalid last name\n";
    }
    if(!isEgnValid(egn)){
        err += "Invalid egn\n";
    }
    if(!isAgeValid(age)){
        err += "Invalid age\n";
    }
    if(!isAddressValid(address)){
        err += "Invalid addrss\n";
    }
    if(!isPasswordValid(password)){
        err += "Invalid password";
    }
    window.alert(err === "" ? "Correct" : err)
}

function isNameValid(name) {
    return (name.length >= 1 && name.length <= 15);
}

function isEgnValid(egn) {
    return (egn.length === 10 && new RegExp("[0-9]").test(egn))
}

function isAgeValid(age) {
    return (new RegExp("[0-9]").test(age) && age >= 18 && age <= 118)
}

function isAddressValid(address) {
    return (address.length >= 1 && address.length <= 100)
}

function isPasswordValid(password) {
    return (new RegExp("[a-z0-9]").test(password) && password.length >= 6 && password.length <= 18)
}


module.exports.isNameValid = isNameValid;
module.exports.isEgnValid = isEgnValid;
module.exports.isAgeValid = isAgeValid;
module.exports.isAddressValid = isAddressValid;
module.exports.isPasswordValid = isPasswordValid;