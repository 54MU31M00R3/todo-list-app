import { homePage } from "../pages/home";
import { cleanup } from "../helper/cleanup";
import { userController } from "../controllers/userController";
import { userLogger, isLoggedIn } from "../helper/loggedIn";

const loginForm = (function () {
    const getHeadline = () => {
        const headline = document.createElement("div");
        headline.textContent = "Log In";
        headline.id = "form-header";
        return headline;
    }
    const getFormFields = () => {
        const formFields = document.createElement("form");
        formFields.id = "form-fields"

        const nameLabel = document.createElement("label");
        nameLabel.for = "username";
        nameLabel.textContent = "Username";
        formFields.appendChild(nameLabel);

        const nameInput = document.createElement("input");
        nameInput.name = "username";
        nameInput.type = "text";
        formFields.appendChild(nameInput);

        const passwordLabel = document.createElement("label");
        passwordLabel.for = "password";
        passwordLabel.textContent = "Password";
        formFields.appendChild(passwordLabel);

        const passwordInput = document.createElement("input");
        passwordInput.name = "password";
        passwordInput.type = "password";
        formFields.appendChild(passwordInput);

        return formFields;
    }
    const getFormButtons = () => {
        const buttonContainer = document.createElement("div");
        buttonContainer.id = "form-buttons";

        const loginBtn = document.createElement("button");
        loginBtn.type = "button";
        loginBtn.textContent = "Log In";
        buttonContainer.appendChild(loginBtn);

        loginBtn.addEventListener("click", () => {
            const username = document.querySelector("input[name=username]").value;
            const password = document.querySelector("input[name=password]").value;

            const success = userController.authUser(username, password);

            if (success){
                console.log("logged in successfully");
                cleanup.body();
                userLogger.switchLog();
                document.body.appendChild(homePage.getPage());
            } else {
                console.log("user doesn't exist or something doesn't match");
            }
        });

        const exitBtn = document.createElement("button");
        exitBtn.type = "button";
        exitBtn.textContent = "Exit";
        buttonContainer.appendChild(exitBtn);

        exitBtn.addEventListener("click", () => {
            cleanup.body();
            document.body.appendChild(homePage.getPage());
        })

        return buttonContainer;
    }
    const getForm = () => {
        const page = document.createElement("div");
        page.id ="content";

        const formContainer = document.createElement("div")
        formContainer.id = "form-container";
        page.appendChild(formContainer);

        const headline = getHeadline();
        formContainer.appendChild(headline);

        const formFields = getFormFields();
        formContainer.appendChild(formFields);

        const formButtons = getFormButtons();
        formContainer.appendChild(formButtons);

        return page;
    }
    return { getForm };
})();

export { loginForm };