document.getElementById("burger").onclick = function() {
    document.getElementById("nav-div").style.display

    if(document.getElementById("nav-div").style.display == "none"){
        document.getElementById("nav-div").style.display = "block";
    console.log(document.getElementById("nav-div").style.display);
    }else{
        document.getElementById("nav-div").style.display = "none";
        console.log(document.getElementById("nav-div").style.display);
    } 

} 

