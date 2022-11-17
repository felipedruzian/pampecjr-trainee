const textbars = document.querySelectorAll('.textbar');
const itembars = document.querySelectorAll('.itembar');

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("searchbar").style.display = "inline-block";
    document.getElementById("logoimg").style.display = "flex";
    document.getElementById("logoutimg").style.display = "grid";
    document.getElementById("menubtn").style.width = "220px";
    document.getElementById("logoutbtn").style.left = "190px";
    textbars.forEach(textbar => {
        textbar.style.color = "#000000"
    });
    itembars.forEach(itembar => {
        itembar.style.width = "222px"
    });
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "78px";
    document.getElementById("main").style.marginLeft = "78px";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("logoimg").style.display = "none";
    document.getElementById("logoutimg").style.display = "none";
    document.getElementById("menubtn").style.width = "50px";
    document.getElementById("logoutbtn").style.left = "14px";
    textbars.forEach(textbar => {
        textbar.style.color = "#18c29c"
    });
    itembars.forEach(itembar => {
        itembar.style.width = "50px"
    });
}

function switchNav() {
    if (document.getElementById("mySidebar").style.width == "78px") {
        openNav();
    } else {
        closeNav();
    }
}