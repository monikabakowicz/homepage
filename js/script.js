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


    onHideTableClick = () => {
        const table = document.querySelector(".table");
        const changeTableButtonText = document.querySelector(".js-changeTableButtonText");

        table.classList.toggle("table--hidden");
        changeTableButtonText.innerText = table.classList.contains("table--hidden") ? "Show" : "Hide";
    };


    onChangeImageClick = () => {
        const section__image1 = document.querySelector(".js-section__image1");
        const section__image2 = document.querySelector(".js-section__image2");

        section__image1.classList.toggle("section__image--hidden");
        section__image2.classList.toggle("section__image--hidden");
    };

   

    const init = () => {
        const changeThemeButton = document.querySelector(".js-changeThemeButton");
        changeThemeButton.addEventListener("click", toggleBackground);

        const changeNameColorButton = document.querySelector(".js-changeNameColorButton");
        changeNameColorButton.addEventListener("click", toggleNameColor);

        const hideTableButton = document.querySelector(".js-hideTableButton");
        hideTableButton.addEventListener("click", onHideTableClick);

        const changeImageButton = document.querySelector(".js-changeImageButton");  
        changeImageButton.addEventListener("click", onChangeImageClick);

        welcome();
    };

    init();

}
