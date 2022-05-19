function buttonClick() {
    document.getElementById("createButton").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.button-gray')) {
        var dropdowns = document.getElementsByClassName("dropdown-button-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}