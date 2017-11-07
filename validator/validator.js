
const validators = [
    {name: "firstName", validator: new RegExp("[a-z0-9]{1,15}"), errorMessage: "Invalid first name\n"},
    {name: "lastName", validator: new RegExp("[a-z0-9]{1,15}"), errorMessage: "Invalid last name\n"},
    {name: "egn", validator: new RegExp("[0-9]{10}"), errorMessage: "Invalid EGN\n"},
    {name: "age", validator: new RegExp("([1][8-9]|[2-9][0-9]|[1][0-1][0-8])"), errorMessage: "Invalid age\n"},
    {name: "address", validator: new RegExp("[a-z0-9]{1,100}"), errorMessage: "Invalid address\n"},
    {name: "password", validator: new RegExp("[a-z0-9]{6,18}"), errorMessage: "Invalid password\n"}
]

function validate(validators) {
    let err = "";
    validators.forEach(function(x) {
        err += x.validator.test(document.getElementById(x.name).value) ? "" : x.errorMessage
    })
    return err
}

function showValidationResult() {
    const errors = validate(validators)
    if(errors.length === 0) {
        window.alert("Correct")
    }
    else{
        window.alert(errors)
    }
}