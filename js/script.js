let changeThemeButton = document.querySelector(".js-changeThemeButton");
let body = document.querySelector(".body");
let changeThemeButtonText = document.querySelector(".js-changeThemeButtonText");

changeThemeButton.addEventListener("click", () => {
    body.classList.toggle("violet");

    changeThemeButtonText.innerText = body.classList.contains("violet") ? "white" : "violet";
});


let changeNameColorButton = document.querySelector(".js-changeNameColorButton");
let article__span = document.querySelector(".article__span");
let changeNameColorButtonText = document.querySelector(".js-changeNameColorButtonText");

changeNameColorButton.addEventListener("click", () => {
    article__span.classList.toggle("red");


    if (article__span.classList.contains("red")) {
        changeNameColorButtonText.innerText = "violet";
    } else {
        changeNameColorButtonText.innerText = "red";
    }
})


let hideTableButton = document.querySelector(".js-hideTableButton");
let changeTableButtonText = document.querySelector(".js-changeTableButtonText");
let table = document.querySelector(".table");

hideTableButton.addEventListener("click", () => {
    table.classList.toggle("table--hidden");

    changeTableButtonText.innerText = table.classList.contains("table--hidden")
        ? "Show"
        : "Hide";
});



let changeImageButton = document.querySelector(".js-changeImageButton");
let section__image1 = document.querySelector(".js-section__image1");
let section__image2 = document.querySelector(".js-section__image2");

changeImageButton.addEventListener("click", () => {
    section__image1.classList.toggle("section__image--hidden");
    section__image2.classList.toggle("section__image--hidden");
});
