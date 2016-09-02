var link = document.querySelector(".cont-btn");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".close");

var form = popup.querySelector(".form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var storage = localStorage.getItem("name");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
});

form.addEventListener("submit", function(event) {
        if (!name.value || !email.value) {
        event.preventDefault();
        popup.classList.remove("popup-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup-error");
        } else {
          localStorage.setItem("name", name.value);
        }
});

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
 			if (popup.classList.contains("popup-show")) {
 				popup.classList.remove("popup-show");
 				popup.classList.remove("popup-error");
          	}
        }
});



