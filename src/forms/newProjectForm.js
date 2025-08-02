const newProjectForm = (function () {
    const getHeadline = () => {
        const headline = document.createElement("div");
        headline.textContent = "Project";
        headline.id = "form-header";
        return headline;
    }

    const getFormFields = () => {
        const formFields = document.createElement("form");
        formFields.id = "form-fields";

        const projectLabel = document.createElement("label");
        projectLabel.for = "project";
        projectLabel.textContent = "Project Name";
        formFields.appendChild(projectLabel);

        const projectInput = document.createElement("input");
        projectInput.name = "project";
        projectInput.type = "text";
        formFields.appendChild(projectInput);

        return formFields;
    }

    const getFormButtons = () => {
        const buttonContainer = document.createElement("div");
        buttonContainer.id = "form-buttons";

        const createBtn = document.createElement("button");
        createBtn.type = "button";
        createBtn.textContent = "Create";
        buttonContainer.appendChild(createBtn);

        const exitBtn = document.createElement("button");
        exitBtn.type = "button";
        exitBtn.textContent = "Exit";
        buttonContainer.appendChild(exitBtn);

        return buttonContainer;
    }

    const getForm = () => {
        const page = document.createElement("div");
        page.id = "content";

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

export { newProjectForm };