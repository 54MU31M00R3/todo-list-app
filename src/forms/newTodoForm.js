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

        const noteLabel = document.createElement("label");
        noteLabel.for = "note";
        noteLabel.textContent = "Note";
        formFields.appendChild(noteLabel);

        const noteInput = document.createElement("textarea");
        noteInput.name = "note";
        formFields.appendChild(noteInput);

        const listLabel = document.createElement("label");
        listLabel.for = "list";
        listLabel.textContent = "List";
        formFields.appendChild(listLabel);

        const listInput = document.createElement("textarea");
        listInput.name = "list";
        listInput.placeholder = "Separate items with ','"
        formFields.appendChild(listInput);

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
        lowInput.id = "low";
        const lowLabel = document.createElement("label");
        lowLabel.for = "low";
        lowLabel.textContent = "Low"
        lowRadio.appendChild(lowLabel);
        lowLabel.prepend(lowInput);
        radioContainer.appendChild(lowRadio);

        const medRadio = document.createElement("div");
        const medInput = document.createElement("input");
        medInput.name = "priority";
        medInput.value = "medium";
        medInput.type = "radio";
        medInput.id = "medium";
        const medLabel = document.createElement("label");
        medLabel.for = "medium";
        medLabel.textContent = "Medium";
        medRadio.appendChild(medLabel);
        medLabel.prepend(medInput);
        radioContainer.appendChild(medRadio);
        
        const highRadio = document.createElement("div"); 
        const highInput = document.createElement("input");
        highInput.name = "priority";
        highInput.value = "high";
        highInput.type = "radio";
        highInput.id = "high";
        const highLabel = document.createElement("label");
        highLabel.for = "high"
        highLabel.textContent = "High";
        highRadio.appendChild(highLabel);
        highLabel.prepend(highInput);
        radioContainer.appendChild(highRadio);

        return radioContainer;
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

    return { getForm }
})();

export { newTodoForm };