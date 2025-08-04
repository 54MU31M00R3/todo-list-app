import { cleanup } from "../helper/cleanup";
import { homePage } from "../pages/home";
import { userController } from "../controllers/userController";

import { userLogger, isLoggedIn } from "../helper/loggedIn";

const signupForm = (function () {
    const getHeadline = () => {
        const headline = document.createElement("div");
        headline.textContent = "Sign Up";
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

        const passwordConfLabel = document.createElement("label");
        passwordConfLabel.for = "password-confirmation";
        passwordConfLabel.textContent = "Confirm Password";
        formFields.appendChild(passwordConfLabel);

        const passwordConfInput = document.createElement("input");
        passwordConfInput.name = "password-confirmation";
        passwordConfInput.type = "password";
        formFields.appendChild(passwordConfInput);

        return formFields;
    }
    const getFormButtons = () => {
        const buttonContainer = document.createElement("div");
        buttonContainer.id = "form-buttons";

        const createAcctBtn = document.createElement("button");
        createAcctBtn.id = "create-acct-btn";
        createAcctBtn.type = "button";
        createAcctBtn.textContent = "Create Account";
        buttonContainer.appendChild(createAcctBtn);

        createAcctBtn.addEventListener("click", () => {
            const username = document.querySelector("input[name=username]").value;
            
            const password = document.querySelector("input[name=password]").value;
            const passwordConf = document.querySelector("input[name=password-confirmation]").value;

            if (password !== passwordConf){
                console.log(password, passwordConf);
                alert("password mismatch");
            } else {
                const success = userController.createUser(username, password, passwordConf);
                if (success) {
                    console.log("account created successfully")
                    cleanup.body();
                    userLogger.switchLog();
                    document.body.appendChild(homePage.getPage());
                } else {
                    console.log("something went wrong, please try again later");
                }
            }
        });

        const exitBtn = document.createElement("button");
        exitBtn.id = "exit-btn";
        exitBtn.type = "button";
        exitBtn.textContent = "Exit";
        buttonContainer.appendChild(exitBtn);

        exitBtn.addEventListener("click", () => {
            cleanup.body();
            document.body.appendChild(homePage.getPage());
        });

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

export { signupForm };