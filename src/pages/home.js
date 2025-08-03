import { loginForm } from "../forms/loginForm";
import { signupForm } from "../forms/signupForm";

import { projectPage } from "./project";

import { cleanup } from "../helper/cleanup";
import { isLoggedIn } from "../helper/loggedIn";

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
            signupButton.type = "button";
            buttonContainer.appendChild(signupButton);

            signupButton.addEventListener("click", () => {
                cleanup.body();
                document.body.appendChild(signupForm.getForm());
            })
            
            const loginButton = document.createElement("button");
            loginButton.textContent = "Log In";
            loginButton.type = "button";
            buttonContainer.appendChild(loginButton);

            loginButton.addEventListener("click", () => {
                cleanup.body();
                document.body.appendChild(loginForm.getForm());
            })
        } else {
            const viewDashButton = document.createElement("button");
            viewDashButton.textContent = "View Projects";
            viewDashButton.type = "button";
            buttonContainer.appendChild(viewDashButton);

            viewDashButton.addEventListener("click", () => {
                cleanup.body();
                document.body.appendChild(projectPage.getPage());
            })
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