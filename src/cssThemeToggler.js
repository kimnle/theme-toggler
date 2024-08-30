console.log("CSS Theme Toggler loaded and running!");

let themes = [
    {
        name: "dark",
        properties: {
            backgroundColour: "darkgrey",
            fontColour: "white",
            "theme-100": "#4641d1"
        }
    },
    {
        name: "light",
        properties: {
            backgroundColour: "#87E0E0",
            fontColour: "black",
            "theme-100": "#87E0E0"
        }
    }
];

// Read theme name stored in local storage
// and update CSS variables based on that name
function getChosenTheme() {

}

// Set theme name stored in local storage
// and update CSS variables based on that name
function setChosenTheme(newThemeName) {

}

// Loop through properties key in chosen theme object
// and apply those properties to CSS
function updateCSSVariables() {

}

let rootElement = document.querySelector(":root");

function getVariablesFromCSS() {
    console.log(rootElement);

    // console.log(document.documentElement.style.getPropertyValue("--backgroundColour"));

    let RootStyles = getComputedStyle(rootElement);

    console.log(RootStyles.getPropertyValue("--backgroundColour"));

}

getVariablesFromCSS();