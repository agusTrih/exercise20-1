let menu = [["Home", "Profile"], ["Setting"], ["Logout"]];
var sidebar = document.getElementById("sidebar");

menu.forEach((el, index) => {
    if (index > 0) {
        let line = document.createElement("hr");
        sidebar.appendChild(line);
    }
    el.forEach((column) => {
        let paragraph = document.createElement("p");
        let text = document.createTextNode(column);
        paragraph.appendChild(text);
        sidebar.appendChild(paragraph);
    });
});
