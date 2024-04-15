document.addEventListener("DOMContentLoaded", function () {
    const skipButton = document.getElementById("skipButton");
    skipButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "page3.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const skipButton = document.getElementById("next");
    skipButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "page2.html";
    });
});
