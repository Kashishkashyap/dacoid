document.addEventListener("DOMContentLoaded", function () {
    const skipButton = document.getElementById("register");
    skipButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "page3.html";
    });
});