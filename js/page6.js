document.addEventListener("DOMContentLoaded", function () {
    const skipButton = document.getElementById("chart");
    skipButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "page7.html";
    });
});