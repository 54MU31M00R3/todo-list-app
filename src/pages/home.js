let isLoggedIn = false;

const homePage = (function () {
    const getHeadline = () => {
        const headline = document.createElement("h1");
        headline.textContent = "Todo";
        return headline;
    }
    const getNavButtons = () => {
        const buttonContainer = document.createElement("div");
        buttonContainer.id = "home-buttons";

        if (!isLoggedIn) {
            const signupButton = document.createElement("button");
            signupButton.textContent = "Sign Up";
            buttonContainer.appendChild(signupButton);
            
            const loginButton = document.createElement("button");
            loginButton.textContent = "Log In";
            buttonContainer.appendChild(loginButton);
        } else {
            const viewDashButton = document.createElement("button");
            viewDashButton.textContent = "View Projects";
            buttonContainer.appendChild(viewDashButton);
        }
        
        return buttonContainer;
    }
    const getPage = () => {
        const page = document.createElement("div");
        page.id ="content";

        const headline = getHeadline();
        page.appendChild(headline);

        const buttonContainer = getNavButtons();
        page.appendChild(buttonContainer);

        return page;
    }

    return { getPage };
})();

export { homePage };