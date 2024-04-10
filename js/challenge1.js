//When the page is loaded use my CSS to style the h1 heading to match my example below.//
window.addEventListener("load", function() {
    const element = document.querySelector('h1');
    element.classList.add('heading');
});

//If the visitor double-clicks anywhere on the page an alert button should pop up with the current time.//
window.addEventListener("dblclick", function() {
    alert(Date());
});


