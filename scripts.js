function openIV() {
    document.getElementById("iv-pump").style.width = "20%";
  }

function closeIV() {
    document.getElementById("iv-pump").style.width = "0%";
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
    document.getElementById("rateValue").innerHTML = "" + newRate + "/min";
    document.getElementById("volumeValue").innerHTML = "" + newVol + "ml";
    
    document.getElementById("rateField").style.display = "none";
    document.getElementById("volumeField").style.display = "none";
    document.getElementById("rateValue").style.display = "block";
    document.getElementById("volumeValue").style.display = "block";

    document.getElementById("saveBtn").style.display = "none";
    document.getElementById("editBtn").style.display = "block";
} 