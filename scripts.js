/* Open when someone clicks on the span element */
function openInfo() {
    document.getElementById("patient-info").style.width = "25%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeInfo() {
    document.getElementById("patient-info").style.width = "0";
}

function parseInt(value) {
    try {
        return Number.parseInt(value.replace(/[^0-9]/g, ''));
    }
    catch {
        return NaN;
    }
}


function formatDateMDY(date) {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) {
        month = "0" + month;
    }
    if (day.length < 2) {
        day = "0" + day;
    }

    return [month, day, year].join("/");
}
function formatDateYMD(date) {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) {
        month = "0" + month;
    }
    if (day.length < 2) {
        day = "0" + day;
    }

    return [year, month, day].join("-");
}


function saveInfo() {
    var $firstName = $("#first-name .field input").val();
    var $lastName = $("#last-name .field input").val();
    var $birthDate = new Date(Date.parse($("#birth-date .field input").val() + " EDT"));
    var $height = $("#height .field input").val();
    var $weight = $("#weight .field input").val();
    var $phone = $("#phone .field input").val();
    var $address = $("#address .field textarea").val().split("\n").join("<br>");


    $("#first-name .value").text($firstName);
    $("#last-name .value").text($lastName);
    $("#birth-date .value").text(formatDateMDY($birthDate));
    $("#height .value").text($height);
    $("#weight .value").text($weight);
    $("#phone .value").text($phone);
    $("#address .value").html($address);

    $("#patient-info-form .field").toggle();
    $("#patient-info-form .value").toggle();
    $("input#edit-info").toggle();
    $("input#save-info").toggle();
}

function editInfo() {
    var $firstName = $("#first-name .value").text().trim();
    var $lastName = $("#last-name .value").text().trim();
    var $birthDate = new Date(Date.parse($("#birth-date .value").text().trim()));
    var $height = parseInt($("#height .value").text().trim());
    var $weight = parseInt($("#weight .value").text().trim());
    var $phone = $("#phone .value").text().trim();
    var $address = $("#address .value").html().split("<br>").join("\n").trim();

    $("#first-name .field input").val($firstName);
    $("#last-name .field input").val($lastName);
    $("#birth-date .field input").val(formatDateYMD($birthDate));
    $("#height .field input").val($height);
    $("#weight .field input").val($weight);
    $("#phone .field input").val($phone);
    $("#address .field textarea").val($address);

    $("#patient-info-form .value").toggle();
    $("#patient-info-form .field").toggle();
    $("input#edit-info").toggle();
    $("input#save-info").toggle();
}

$(document).ready(function () {
    $(".field").hide();
    $("input#save-info").hide();
});
