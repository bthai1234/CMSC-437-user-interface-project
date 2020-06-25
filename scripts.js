$(document).ready(function () {
    $("#patient-info-form .field").hide();
    $("input#save-info").hide();
});

/** Open when someone clicks on the span element */
function openInfo() {
    closeAll();

    $("#main-content").css("padding-left", "260px");
    $("#patient-info").css({
        "width": "250px",
        "display": "block"
    });
    $("#p-info-toggle-on").hide();
    $("#p-info-toggle-off").show();
}

/** Close when someone clicks on the "x" symbol inside the overlay */
function closeInfo() {
    $("#main-content").css("padding-left", "0");
    $(".sidebar#patient-info").css({
        "width": "0",
        "display": "none"
    });
    $("#p-info-toggle-on").show();
    $("#p-info-toggle-off").hide();
}

function saveInfo() {
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

    $("#patient-info-form .field").show();
    $("#patient-info-form .value").hide();
    $("input#edit-info").show();
    $("input#save-info").hide();
}

function editInfo() {
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
    function parseInt(value) {
        try {
            return Number.parseInt(value.replace(/[^0-9]/g, ''));
        } catch {
            return NaN;
        }
    }

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

    $("#patient-info-form .value").hide();
    $("#patient-info-form .field").show();
    $("input#edit-info").hide();
    $("input#save-info").show();
}

function openIV() {
    closeAll();

    document.getElementById("main-content").style.paddingLeft = "260px";
    document.getElementById("iv-sidebar").style.width = "250px";
    document.getElementById("iv-sidebar").style.display = "block";
    document.getElementById("iv-toggle-on").style.display = "none";
    document.getElementById("iv-toggle-off").style.display = "block";
}

function closeIV() {
    document.getElementById("main-content").style.paddingLeft = "0px";
    document.getElementById("iv-sidebar").style.width = "0px";
    document.getElementById("iv-sidebar").style.display = "none";
    document.getElementById("iv-toggle-on").style.display = "block";
    document.getElementById("iv-toggle-off").style.display = "none";
}

function editIV() {
    document.getElementById("rateValue").style.display = "none";
    document.getElementById("volumeValue").style.display = "none";

    document.getElementById("rateField").style.display = "block";
    document.getElementById("volumeField").style.display = "block";

    document.getElementById("saveBtn").style.display = "block";
    document.getElementById("editBtn").style.display = "none";
}

function saveIV() {
    var newRate = document.getElementById("rateField").value;
    var newVol = document.getElementById("volumeField").value;

    if(/\d+/.test(newRate) && /\d+/.test(newVol)){
        document.getElementById("rateValue").innerHTML = "" + newRate + "/min";
        document.getElementById("volumeValue").innerHTML = "" + newVol + " ml";

        document.getElementById("rateField").style.display = "none";
        document.getElementById("volumeField").style.display = "none";
        document.getElementById("rateValue").style.display = "block";
        document.getElementById("volumeValue").style.display = "block";

        document.getElementById("saveBtn").style.display = "none";
        document.getElementById("sideBarErrorMsg").style.display = "none";
        document.getElementById("editBtn").style.display = "block";
    }else{
        document.getElementById("sideBarErrorMsg").style.display = "block";
    }
}

function openHistory() {
    closeAll();

    // TODO
}

function openXray() {
    closeAll();

    // TODO
}

function openVent() {
    closeAll();

    // TODO
}

function closeAll() {
    $("body > div.sidebar").hide();
    $(".nav-item .toggle-on").show();
    $(".nav-item .toggle-off").hide();
}
