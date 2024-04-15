document.addEventListener("DOMContentLoaded", function () {
    const skipButton = document.getElementById("login");
    skipButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "page4.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const skipButton = document.getElementById("register");
    skipButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "page5.html";
    });
});