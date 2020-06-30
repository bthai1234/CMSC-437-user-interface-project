$(document).ready(function () {
    $("#patient-info-form .field").hide();
    $("#patient-history-form .field").hide();
    $("input.edit-buttons").hide();

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

    $("#main-content").css("padding-left", "280px");
    $("#patient-history").css({
        "width": "270px",
        "display": "block"
    });
    $("#p-hist-toggle-on").hide();
    $("#p-hist-toggle-off").show();
}

function closeHistory() {
    $("#main-content").css("padding-left", "0");
    $(".sidebar#patient-history").css({
        "width": "0",
        "display": "none"
    });
    $("#p-info-toggle-on").show();
    $("#p-info-toggle-off").hide();
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
    // document.getElementById("ecg-image").src = images[currentImage - 1];
    // TODO
}

function editMeds() {
    var meds = {};
    var counter = 0;
    $("#medications .value ul li").each(function () {
        meds[counter++] = $(this).text();
    });

    var addToDiv = $("#medications .field").html("");
    for (var i = 0; i < counter; i++) {
        var med = meds[i];
        addToDiv.append(`<input type="text" name="med-${i}" id="med-${i}" value="${med}">`);
        addToDiv.append(`<input type="button" id="del-med-${i}" value="-" onclick="delMed('med-${i}')" class="plus-minus">`);
    }

    $("#medications .value").hide();
    $("#medications .field").show();
    $("#edit-meds").hide();
    $("#patient-history input.edit-buttons").show();
}

function addMeds() {
    var n = $("#medications .field input[type=text]").length;
    $("#medications .field").append(`<input type="text" name="med-${n}" id="med-${n}">`);
    $("#medications .field").append(`<input type="button" id="del-med-${n}" value="-" onclick="delMed('med-${n}')" class="plus-minus">`);
}

function delMed(medId) {
    $(`#${medId}`).remove();
    $(`#del-${medId}`).remove();
}

function saveMeds() {
    var meds = {};
    var counter = 0;
    $("#medications .field input[type=text]").each(function () {
        meds[counter++] = $(this).val();
    });
    $("#medications .value ul li").each(function () {
        $(this).remove();
    });

    if ($("#medications .value ul").html() === undefined) {
        $("#medications .value").html("<ul></ul>");
    }
    for (var i = 0; i < counter; i++) {
        var med = meds[i];
        $("#medications .value ul").append(`<li>${med}</li>\n`);
    }
    if (counter == 0) {
        $("#medications .value ul").remove();
        $("#medications .value").text("None");
    }

    $("#medications .value").show();
    $("#medications .field").hide();
    $("#edit-meds").show();
    $("#patient-history input.edit-buttons").hide();
}


function editConds() {
    var meds = {};
    var counter = 0;
    $("#conditions .value ul li").each(function () {
        meds[counter++] = $(this).text();
    });

    var addToDiv = $("#conditions .field").html("");
    for (var i = 0; i < counter; i++) {
        var med = meds[i];
        addToDiv.append(`<input type="text" name="med-${i}" id="med-${i}" value="${med}">`);
        addToDiv.append(`<input type="button" id="del-med-${i}" value="-" onclick="delCond('med-${i}')" class="plus-minus">`);
    }

    $("#conditions .value").hide();
    $("#conditions .field").show();
    $("#edit-conds").hide();
    $("#patient-history #conditions input.edit-buttons").show();
}

function addConds() {
    var n = $("#conditions .field input[type=text]").length;
    $("#conditions .field").append(`<input type="text" name="cond-${n}" id="cond-${n}">`);
    $("#conditions .field").append(`<input type="button" id="del-cond-${n}" value="-" onclick="delCond('med-${n}')" class="plus-minus">`);
}

function delCond(medId) {
    $(`#${medId}`).remove();
    $(`#del-${medId}`).remove();
}

function saveConds() {
    var meds = {};
    var counter = 0;
    $("#conditions .field input[type=text]").each(function () {
        meds[counter++] = $(this).val();
    });
    $("#conditions .value ul li").each(function () {
        $(this).remove();
    });

    if ($("#conditions .value ul").html() === undefined) {
        $("#conditions .value").html("<ul></ul>");
    }

    for (var i = 0; i < counter; i++) {
        var med = meds[i];
        $("#conditions .value ul").append(`<li>${med}</li>\n`);
    }
    if (counter == 0) {
        $("#conditions .value ul").remove();
        $("#conditions .value").text("None");
    }

    $("#conditions .value").show();
    $("#conditions .field").hide();
    $("#edit-conds").show();
    $("#patient-history #conditions input.edit-buttons").hide();
}



var images = [];
var currentImage = 0;
for (var i = 1; i <= 4; i++) {
    images.push(`ecgImage${i}.png`);
}


