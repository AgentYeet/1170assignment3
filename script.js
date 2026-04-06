/*
    script.js
    Purpose: provides JavaScript functionality for the portfolio website.
    Features included:
    1. Time-based greeting
    2. Welcome notification
    3. Colour theme changer
    4. Contact form event handling
    5. Project topic checker
*/

document.addEventListener("DOMContentLoaded", function () {
    loadSavedTheme();
    setupGreeting();
    setupNotification();
    setupThemeButtons();
    setupContactForm();
    setupTopicChecker();
});

/*
    Function: setupGreeting
    Purpose: uses a conditional statement to change the greeting based on the current time.
    Input: none
    Output: updates the text content of the greeting heading
*/

function setupGreeting() {
    const greetingElement = document.getElementById("greeting");

    if (!greetingElement) {
        return;
    }

    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetingElement.textContent = "Good morning";
    } else if (currentHour < 18) {
        greetingElement.textContent = "Good afternoon";
    } else {
        greetingElement.textContent = "Good evening";
    }
}


/*
    Function: setupNotification
    Purpose: creates a notification when the user clicks the welcome button.
    Input: button click
    Output: alert message
*/

function setupNotification() {
    const notifyButton = document.getElementById("notifyButton");

    if (!notifyButton) {
        return;
    }

    notifyButton.addEventListener("click", function () {
        alert("Welcome to my professional portfolio website.");
    });
}


/*
    Function: setupThemeButtons
    Purpose: changes the colour theme of the page when a theme button is clicked.
    Input: button click
    Output: applies a theme class to the body element
*/

function setupThemeButtons() {
    const body = document.getElementById("pageBody");
    const blueThemeButton = document.getElementById("blueThemeButton");
    const lightThemeButton = document.getElementById("lightThemeButton");
    const darkThemeButton = document.getElementById("darkThemeButton");

    if (!body) return;

    if (blueThemeButton) {
        blueThemeButton.addEventListener("click", function () {
            body.className = "theme-blue";
            localStorage.setItem("selectedTheme", "theme-blue");
        });
    }

    if (lightThemeButton) {
        lightThemeButton.addEventListener("click", function () {
            body.className = "theme-light";
            localStorage.setItem("selectedTheme", "theme-light");
        });
    }

    if (darkThemeButton) {
        darkThemeButton.addEventListener("click", function () {
            body.className = "theme-dark";
            localStorage.setItem("selectedTheme", "theme-dark");
        });
    }
}

/*
    Function: loadSavedTheme
    Purpose: Loads the previously selected colour theme 
    Input: Value stored in localStorage under the key "selectedTheme"
    Output:Applies the saved CSS class to the <body> element
*/

function loadSavedTheme() {
    const body = document.getElementById("pageBody");
    const savedTheme = localStorage.getItem("selectedTheme");

    if (body && savedTheme) {
        body.className = savedTheme;
    }
}


/*
    Function: setupContactForm
    Purpose: responds to user input on the contact page using an event handler.
    Input: form submission
    Output: prevents page reload and displays a message on the page
*/

function setupContactForm() {
    const contactForm = document.getElementById("contactForm");
    const userName = document.getElementById("userName");
    const formResponse = document.getElementById("formResponse");

    if (!contactForm || !userName || !formResponse) {
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const enteredName = userName.value.trim();

        if (enteredName === "") {
            formResponse.textContent = "Please enter your name before sending the form.";
        } else {
            formResponse.textContent = "Thank you, " + enteredName + ". Your message has been received.";
        }
    });
}


/*
    Function: setupTopicChecker
    Purpose: responds to user input on the projects page and uses a conditional statement.
    Input: text field and button click
    Output: displays a custom response
*/

function setupTopicChecker() {
    const topicInput = document.getElementById("topicInput");
    const topicButton = document.getElementById("topicButton");
    const topicResult = document.getElementById("topicResult");

    if (!topicInput || !topicButton || !topicResult) {
        return;
    }

    topicButton.addEventListener("click", function () {
        const topicValue = topicInput.value.trim().toLowerCase();

        if (topicValue === "") {
            topicResult.textContent = "Please enter a project topic.";
        } else if (topicValue === "automation") {
            topicResult.textContent = "Automation interests me because it improves efficiency and reduces repeated manual work.";
        } else if (topicValue === "data") {
            topicResult.textContent = "Data projects interest me because they support clear analysis and better decision-making.";
        } else if (topicValue === "design") {
            topicResult.textContent = "Design matters because a clean layout makes information easier to understand.";
        } else {
            topicResult.textContent = "That topic could still be a valuable addition to my professional portfolio.";
        }
    });
}
