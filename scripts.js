
function openIV() {
    //close any other open sidebars
    document.getElementById("ventilator-sidebar").style.display = "none";
    
    //switch any other navbar buttons toggle-off buttons to toggle-on
    document.getElementById("vent-toggle-off").style.display = "none";
    document.getElementById("vent-toggle-on").style.display = "block";

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
    //close any other open sidebars first
    document.getElementById("iv-sidebar").style.display = "none";
    //document.getElementById("info-sidebar").style.width = "0px";
    //add more side bars to close as they get developed
    
    //switch any navbar buttons toggle-off buttons to toggle-on
    document.getElementById("iv-toggle-off").style.display = "none";
    document.getElementById("iv-toggle-on").style.display = "block";
    //add other sidebars as they get developed

    document.getElementById("vent-toggle-on").style.display = "none";
    document.getElementById("vent-toggle-off").style.display = "block";

    document.getElementById("main-content").style.paddingLeft = "260px";
    document.getElementById("ventilator-sidebar").style.width = "250px";
    document.getElementById("ventilator-sidebar").style.display = "block";

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