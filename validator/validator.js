function validate() {
    let err = "";
    err += nameValidate(document.getElementById("firstName").value) ? "" : "Invalid first name\n"
    err += nameValidate(document.getElementById("lastName").value) ? "" : "Invalid last name\n"
    err += egnValidate(document.getElementById("egn").value) ? "" : "Invalid EGN\n"
    err += ageValidate(document.getElementById("age").value) ? "" : "Invalid age\n"
    err += addressValidate(document.getElementById("address").value)? "" : "Invalid address\n"
    err += passwordValidate(document.getElementById("password").value) ? "" : "Invalid password\n"
    window.alert(err === "" ? "Correct" : err)
}

function nameValidate(name) {
    return (name.length >= 1 && name.length <= 15)
}

function egnValidate(egn) {
    return (egn.length === 10 && new RegExp("[0-9]").test(egn))
}

function ageValidate(age) {
    return (new RegExp("[0-9]").test(age) && age >= 18 && age <= 118)
}

function addressValidate(address) {
    return (address.length >= 1 && address.length <= 100)
}

function passwordValidate(password) {
    return (new RegExp("[a-z0-9]").test(password) && password.length >= 6 && password.length <= 18)
}

module.exports.nameValidate = nameValidate;
module.exports.egnValidate = egnValidate;
module.exports.ageValidate = ageValidate;
module.exports.addressValidate = addressValidate;
module.exports.passwordValidate = passwordValidate;