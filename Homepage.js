var inputField = document.getElementById("name");
var isMoved = false; // Flag to track if input box is moved
var moveSound = document.getElementById("moveSound");

inputField.addEventListener("click", function() {
    if (!isMoved) {
        inputField.classList.add("input-move");
        moveSound.play();
    } else {
        inputField.classList.remove("input-move");
        // Trigger reflow before adding animation class again
        void inputField.offsetWidth;
        inputField.classList.add("input-moveBack");
        moveSound.play();
    }
    isMoved = !isMoved; // Toggle the flag
});


