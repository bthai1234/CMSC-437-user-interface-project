$(document).ready(function () {
    $("#patient-info-form .field").hide();
    $("input#save-info").hide();

    function swapEcgImageTimer() {
        setInterval(swapEcgImage, 1000);
    }
    swapEcgImageTimer();
});

/** Open when someone clicks on the span element */
function openInfo() {
    closeAll();

    $("#main-content").css("padding-left", "280px");
    $("#patient-info").css({
        "width": "270px",
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
    var $gender = $("#gender .field :selected").val();

    $("#first-name .value").text($firstName);
    $("#last-name .value").text($lastName);
    $("#birth-date .value").text(formatDateMDY($birthDate));
    $("#height .value").text($height + " ft.");
    $("#weight .value").text($weight + " lb.");
    $("#phone .value").text($phone);
    $("#address .value").html($address);
    $("#gender .value").html($gender);

    $("#patient-info-form .value").show();
    $("#patient-info-form .field").hide();
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

    var $firstName = $("#first-name .value").text().trim();
    var $lastName = $("#last-name .value").text().trim();
    var $birthDate = new Date(Date.parse($("#birth-date .value").text().trim()));
    var $height = parseInt($("#height .value").text().trim());
    var $weight = parseInt($("#weight .value").text().trim());
    var $phone = $("#phone .value").text().trim();
    var $address = $("#address .value").html().split("<br>").join("\n").trim();
    var $gender = $("#gender .value").text().trim();

    $("#first-name .field input").val($firstName);
    $("#last-name .field input").val($lastName);
    $("#birth-date .field input").val(formatDateYMD($birthDate));
    $("#height .field input").val($height);
    $("#weight .field input").val($weight);
    $("#phone .field input").val($phone);
    $("#address .field textarea").val($address);
    $("#gender .field select").val($gender);

    $("#patient-info-form .value").hide();
    $("#patient-info-form .field").show();
    $("input#edit-info").hide();
    $("input#save-info").show();
}

function openIV() {
    closeAll();

    document.getElementById("main-content").style.paddingLeft = "280px";
    document.getElementById("iv-sidebar").style.width = "270px";
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

    document.getElementById("ivSaveBtn").style.display = "block";
    document.getElementById("ivEditBtn").style.display = "none";
}

function saveIV() {
    var newRate = document.getElementById("rateField").value;
    var newVol = document.getElementById("volumeField").value;

    if(/\d+/.test(newRate) && /\d+/.test(newVol)){
        document.getElementById("rateValue").innerHTML = "" + newRate + " min";
        document.getElementById("volumeValue").innerHTML = "" + newVol + " ml";

        document.getElementById("rateField").style.display = "none";
        document.getElementById("volumeField").style.display = "none";
        document.getElementById("rateValue").style.display = "block";
        document.getElementById("volumeValue").style.display = "block";

        document.getElementById("ivSaveBtn").style.display = "none";
        document.getElementById("ivSideBarErrorMsg").style.display = "none";
        document.getElementById("ivEditBtn").style.display = "block";
    }else{
        document.getElementById("ivSideBarErrorMsg").style.display = "block";
    }
}

function openVent() {
    closeAll();

    document.getElementById("main-content").style.paddingLeft = "280px";
    document.getElementById("ventilator-sidebar").style.width = "270px";
    document.getElementById("ventilator-sidebar").style.display = "block";
    document.getElementById("vent-toggle-on").style.display = "none";
    document.getElementById("vent-toggle-off").style.display = "block";
}

function closeVent() {
    document.getElementById("main-content").style.paddingLeft = "0px";
    document.getElementById("ventilator-sidebar").style.width = "0px";
    document.getElementById("ventilator-sidebar").style.display = "none";
    document.getElementById("vent-toggle-on").style.display = "block";
    document.getElementById("vent-toggle-off").style.display = "none";
}

function editVent() {
    document.getElementById("volValue").style.display = "none";
    document.getElementById("ventRateValue").style.display = "none";

    document.getElementById("volField").style.display = "block";
    document.getElementById("ventRateField").style.display = "block";

    document.getElementById("ventSaveBtn").style.display = "block";
    document.getElementById("ventEditBtn").style.display = "none";
}

function saveVent() {
    var newVol = document.getElementById("volField").value;
    var newRate = document.getElementById("ventRateField").value;

    if(/\d+/.test(newRate) && /\d+/.test(newVol)){
        document.getElementById("volValue").innerHTML = "" + newVol + " cc";
        document.getElementById("ventRateValue").innerHTML = "" + newRate + " min";

        document.getElementById("volField").style.display = "none";
        document.getElementById("ventRateField").style.display = "none";
        document.getElementById("volValue").style.display = "block";
        document.getElementById("ventRateValue").style.display = "block";

        document.getElementById("ventSaveBtn").style.display = "none";
        document.getElementById("ventSideBarErrorMsg").style.display = "none";
        document.getElementById("ventEditBtn").style.display = "block";
    }else{
        document.getElementById("ventSideBarErrorMsg").style.display = "block";
    }
} 

function openHistory() {
    closeAll();

    // TODO
}

function openXray() {
    closeAll();

    document.getElementById("main-content").style.paddingLeft = "280px";
    document.getElementById("x-ray-sidebar").style.width = "270px";
    document.getElementById("x-ray-sidebar").style.display = "block";
    document.getElementById("x-ray-toggle-on").style.display = "none";
    document.getElementById("x-ray-toggle-off").style.display = "block";
}

function closeXray() {
    document.getElementById("main-content").style.paddingLeft = "0px";
    document.getElementById("x-ray-sidebar").style.width = "0px";
    document.getElementById("x-ray-sidebar").style.display = "none";
    document.getElementById("x-ray-toggle-on").style.display = "block";
    document.getElementById("x-ray-toggle-off").style.display = "none";
}

function xRaySelector(){
    document.getElementById('xRayFileSelector').click();
}

function changeXrayImg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#x-ray-img')
                .attr('src', e.target.result)
                .width(220)
                .height(275);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function closeAll() {
    $("body > div.sidebar").hide();
    $(".nav-item .toggle-on").show();
    $(".nav-item .toggle-off").hide();
}

function swapEcgImage() {
    currentImage = currentImage == images.length ? 1 : currentImage + 1;
    document.getElementById("ecg-image").src = images[currentImage - 1];
    console.log(document.getElementById("ecg-image").src)
}

var images = [];
var currentImage = 0;
for (var i = 1; i <= 4; i++) {
    images.push(`ecgImage${i}.png`);
}


