//When the page is loaded an alert box should pop up with the Caption from the 2nd figure.//
window.addEventListener("load", function() {
    var second = document.querySelectorAll("figcaption")[1].textContent;
    this.alert(second);
});