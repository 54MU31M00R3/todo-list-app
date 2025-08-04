import { dashPage } from "../pages/dashboard";
import { projectController } from "../controllers/projectController";
import { cleanup } from "../helper/cleanup";

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

        const dateLabel = document.createElement("label");
        dateLabel.for = "dueDate";
        dateLabel.textContent = "Due Date";
        formFields.appendChild(dateLabel);

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.name = "dueDate";
        formFields.appendChild(dateInput);

        return formFields;
    }

    const getFormButtons = () => {
        const buttonContainer = document.createElement("div");
        buttonContainer.id = "form-buttons";

        const createBtn = document.createElement("button");
        createBtn.type = "button";
        createBtn.textContent = "Create";
        buttonContainer.appendChild(createBtn);

        createBtn.addEventListener("click", () => {
            const title = document.querySelector("input[name=project]").value;
            const date = document.querySelector("input[name=dueDate").value;
        
            const success = projectController.createProject(title, date);

            if (success) {
                console.log("project created successfully");
                cleanup.body();
                document.body.appendChild(dashPage.getPage());
            } else {
                console.log("something went wrong, please try again later.");
            }
        })

        const exitBtn = document.createElement("button");
        exitBtn.type = "button";
        exitBtn.textContent = "Exit";
        buttonContainer.appendChild(exitBtn);

        exitBtn.addEventListener("click", () => {
            cleanup.body();
            document.body.appendChild(dashPage.getPage());
        })

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