var link = document.querySelector(".cont-btn");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".close");

var name = popup.querySelector("[name=name]");


link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("popup-show");
        name.focus();

});

close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("popup-show");
});


