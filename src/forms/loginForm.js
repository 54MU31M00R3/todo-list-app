const loginForm = (function () {
    const getHeadline = () => {
        const headline = document.createElement("div");
        headline.textContent = "Log In";
        headline.id = "form-header";
        return headline;
    }
    const getFormFields = () => {
        const formFields = document.createElement("form");
        formFields.id = "auth-form"

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

        const exitBtn = document.createElement("button");
        exitBtn.type = "button";
        exitBtn.textContent = "Exit";
        buttonContainer.appendChild(exitBtn);

        return buttonContainer;
    }
    const getForm = () => {
        const page = document.createElement("div");
        page.id ="content";

        const headline = getHeadline();
        page.appendChild(headline);

        const formFields = getFormFields();
        page.appendChild(formFields);

        const formButtons = getFormButtons();
        page.appendChild(formButtons);

        return page;
    }
    return { getForm };
})();

export { loginForm };