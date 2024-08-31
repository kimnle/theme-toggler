console.log("CSS Theme Toggler loaded and running!");

let rootElement = document.querySelector(":root");
let themeToggleButton = document.getElementById("themeToggle");

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
    let foundTheme = localStorage.getItem("theme");
    console.log(foundTheme);
    return foundTheme;
}

// Set theme name stored in local storage
// and update CSS variables based on that name
function setChosenTheme(newThemeName) {
    localStorage.setItem("theme", newThemeName);
    updateCSSVariables();
}

if (getChosenTheme() == null) {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      // Theme set to dark.
      setChosenTheme("dark");
      console.log("No theme found, applied the dark theme");
    } else {
      // Theme set to light.
      setChosenTheme("light");
      console.log("No theme found, applied the light theme");

    }
} else {
    // If a theme DOES exist in local storage,
    // apply that theme's properties
    updateCSSVariables()
}

function updateButtonText() {
    // Read the current theme
    if (getChosenTheme() == "dark") {
        // Change button text to say other theme
        themeToggleButton.innerText = "Change theme to Light";

    } else {
        themeToggleButton.innerText = "Change theme to Dark";

    }
}

function toggleTheme() {
    // if ("dark" == "dark")
    // if ("light" == "light")
    if (getChosenTheme() == "dark") {
        // set it to light
        setChosenTheme("light");
        // Set button text to "Change theme to Dark"
    } else {
        // set it to dark
        setChosenTheme("dark");
        // Set button text to "Change theme to Light"
    }
}

themeToggleButton.onclick = toggleTheme;
// themeToggleButton.addEventListener("click", toggleTheme);


// Loop through properties key in chosen theme object
// and apply those properties to CSS
function updateCSSVariables() {
    // Find the matching theme object
    let matchingTheme = themes.find(themeObject => themeObject.name == getChosenTheme());
    console.log(matchingTheme);

    // Find the properties object in the matching theme object
    // Loop through all properties
    Object.keys(matchingTheme.properties).forEach(cssProperty => {
        console.log(cssProperty + ": " + matchingTheme.properties[cssProperty]);

        // Apply property value to CSS variables 
        rootElement.style.setProperty(`--${cssProperty}`, matchingTheme.properties[cssProperty]);
    })
    // for (const cssProperty of matchingTheme.properties) {
    //     console.log(cssProperty);
    // }

    updateButtonText();
}

function getVariablesFromCSS() {
    console.log(rootElement);

    // console.log(document.documentElement.style.getPropertyValue("--backgroundColour"));

    let RootStyles = getComputedStyle(rootElement);

    console.log(RootStyles.getPropertyValue("--backgroundColour"));

}

getVariablesFromCSS();