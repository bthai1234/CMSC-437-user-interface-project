
function openIV() {
    document.getElementById("main-content").style.paddingLeft = "250px";
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