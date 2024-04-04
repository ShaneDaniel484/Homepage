var inputField = document.getElementById("name");
var isMoved = false; // Flag to track if input box is moved

inputField.addEventListener("click", function() {
    if (!isMoved) {
        inputField.classList.add("input-move");
    } else {
        inputField.classList.remove("input-move");
        // Trigger reflow before adding animation class again
        void inputField.offsetWidth;
        inputField.classList.add("input-moveBack");
    }
    isMoved = !isMoved; // Toggle the flag
});


