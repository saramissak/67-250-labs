// alert("Hello World");

function showDescription(descript) {
    $("#description").html("Description: " + descript);
}

function hideDescription() {
    $("#description").html("");
}

function validate() {
    var dob = $("#txtDate").val();
    var today = new Date();
    var dobObj = new Date(dob);
    if (dobObj <= today) {
        alert("Date of birth is not valid. Date has to be before today.");
        return false;
    }
    var phone = $("#phone").val();
    if (phone.length != 10 || isNaN(phone)) {
        alert("Phone number is not valid or not valid format.");
        return false;
    }
}