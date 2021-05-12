{
    const welcome = () => {
        console.log("Hello developers!");
    }
    
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const changeThemeButtonText = document.querySelector(".js-changeThemeButtonText");

        body.classList.toggle("body--violet");
        changeThemeButtonText.innerText = body.classList.contains("body--violet") ? "white" : "violet";
    };


    toggleNameColor = () => {
        const article__span = document.querySelector(".article__span");
        const changeNameColorButtonText = document.querySelector(".js-changeNameColorButtonText");
        
        article__span.classList.toggle("red");
        
        if (article__span.classList.contains("red")) {
            changeNameColorButtonText.innerText = "violet";
        } else {
            changeNameColorButtonText.innerText = "red";
        }
    };


    
    const init = () => {
        const changeThemeButton = document.querySelector(".js-changeThemeButton");
        changeThemeButton.addEventListener("click", toggleBackground);

        const changeNameColorButton = document.querySelector(".js-changeNameColorButton");
        changeNameColorButton.addEventListener("click", toggleNameColor);

        welcome();
    };

    init ();

  }


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
