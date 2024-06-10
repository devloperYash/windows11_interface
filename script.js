let taskbar = document.getElementsByClassName("win_icon")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

// Set the startmenu's bottom style to "50px" initially


taskbar.addEventListener("click", () => {
    console.log("clicked");
    if(startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-655px";
    } else {
        startmenu.style.bottom = "50px";
    }
});
