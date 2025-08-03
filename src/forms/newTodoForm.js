const newTodoForm = ( function () {
    const getHeadline = () => {
        const headline = document.createElement("div");
        headline.textContent = "Todo";
        headline.id = "form-header";
        return headline;
    }

    const getFormFields = () => {
        const formFields = document.createElement("form");
        formFields.id = "form-fields";

        const todoLabel = document.createElement("label");
        todoLabel.for = "todo";
        todoLabel.textContent = "Todo Name";
        formFields.appendChild(todoLabel);

        const todoInput = document.createElement("input");
        todoInput.name = "todo";
        todoInput.type = "text";
        formFields.appendChild(todoInput);

        const todoDescLabel = document.createElement("label");
        todoDescLabel.for = "todoDesc";
        todoDescLabel.textContent = "Description";
        formFields.appendChild(todoDescLabel);

        const todoDescInput = document.createElement("textarea");
        todoDescInput.name = "todoDesc";
        formFields.appendChild(todoDescInput);

        const dateLabel = document.createElement("label");
        dateLabel.for = "dueDate";
        dateLabel.textContent = "Due Date";
        formFields.appendChild(dateLabel);

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.name = "dueDate";
        formFields.appendChild(dateInput);

        const priorityRadio = getPriorityRadio();
        formFields.appendChild(priorityRadio);

        return formFields;
    }

    const getPriorityRadio = () => {
        const radioContainer = document.createElement("fieldset");

        const radioLegend = document.createElement("legend");
        radioLegend.textContent = "Select a Priority";
        radioContainer.appendChild(radioLegend);

        const lowRadio = document.createElement("div");
        const lowInput = document.createElement("input");
        lowInput.name = "priority";
        lowInput.value = "low";
        lowInput.type = "radio";
        const lowLabel = document.createElement("label");
        lowLabel.for = "low";
        lowLabel.textContent = "Low"
        lowRadio.appendChild(lowInput);
        lowRadio.appendChild(lowLabel);
        radioContainer.appendChild(lowRadio);

        const medRadio = document.createElement("div");
        const medInput = document.createElement("input");
        medInput.name = "priority";
        medInput.value = "medium";
        medInput.type = "radio";
        const medLabel = document.createElement("label");
        medLabel.for = "medium";
        medLabel.textContent = "Medium";
        medRadio.appendChild(medInput);
        medRadio.appendChild(medLabel);
        radioContainer.appendChild(medRadio);
        
        const highRadio = document.createElement("div"); 
        const highInput = document.createElement("input");
        highInput.name = "priority";
        highInput.value = "high";
        highInput.type = "radio";
        const highLabel = document.createElement("label");
        highLabel.for = "high"
        highLabel.textContent = "High";
        highRadio.appendChild(highInput);
        highRadio.appendChild(highLabel);
        radioContainer.appendChild(highRadio);

        return radioContainer;
    }

    const getFormButtons = () => {
        const buttonContainer = document.createElement("div");
        buttonContainer.id = "form-buttons";

        const noteBtn = document.createElement("button");
        noteBtn.type = "button";
        noteBtn.textContent = "Add Note";
        buttonContainer.appendChild(noteBtn);

        const listBtn = document.createElement("button");
        listBtn.type = "button";
        listBtn.textContent = "Add List";
        buttonContainer.appendChild(listBtn);

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

    return { getForm }
})();

export { newTodoForm };