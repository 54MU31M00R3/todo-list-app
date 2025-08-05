import { todoController } from "../controllers/todoController";
import { projectPage } from "../pages/project";
import { cleanup } from "../helper/cleanup";

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

        const completeRadio = getCompletedRadio();
        formFields.appendChild(completeRadio);

        const noteLabel = document.createElement("label");
        noteLabel.for = "note";
        noteLabel.textContent = "Note";
        formFields.appendChild(noteLabel);

        const noteInput = document.createElement("textarea");
        noteInput.name = "note";
        formFields.appendChild(noteInput);

        const listLabel = document.createElement("label");
        listLabel.for = "list-title";
        listLabel.textContent = "list Name";
        formFields.appendChild(listLabel);

        const listInput = document.createElement("input");
        listInput.name = "list-title";
        listInput.type = "text";
        formFields.appendChild(listInput);

        const listItemsLabel = document.createElement("label");
        listItemsLabel.for = "list-items";
        listItemsLabel.textContent = "List Items";
        formFields.appendChild(listItemsLabel);

        const listItemsInput = document.createElement("textarea");
        listItemsInput.name = "list-items";
        listItemsInput.placeholder = "Separate items with ','"
        formFields.appendChild(listItemsInput);

        return formFields;
    }

    const getCompletedRadio = () => {
        const radioContainer = document.createElement("fieldset");

        const radioLegend = document.createElement("legend");
        radioLegend.textContent = "Completion Status";
        radioContainer.appendChild(radioLegend);

        const completeRadio = document.createElement("div");
        const completeInput = document.createElement("input");
        completeInput.name = "completion";
        completeInput.value = "complete";
        completeInput.type = "radio";
        completeInput.id = "complete";
        const completeLabel = document.createElement("label");
        completeLabel.for = "complete";
        completeLabel.textContent = "Completed"
        completeRadio.appendChild(completeLabel);
        completeLabel.prepend(completeInput);
        radioContainer.appendChild(completeRadio);

        const incompleteRadio = document.createElement("div");
        const incompleteInput = document.createElement("input");
        incompleteInput.name = "completion";
        incompleteInput.value = "incomplete";
        incompleteInput.type = "radio";
        incompleteInput.id = "incomplete";
        const incompleteLabel = document.createElement("label");
        incompleteLabel.for = "incomplete";
        incompleteLabel.textContent = "Incompleted"
        incompleteRadio.appendChild(incompleteLabel);
        incompleteLabel.prepend(incompleteInput);
        radioContainer.appendChild(incompleteRadio);
        
        return radioContainer;
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

        createBtn.addEventListener("click", () => {
            const title = document.querySelector("input[name=todo]").value;
            const desc = document.querySelector("textarea[name=todoDesc]").value;
            const date = document.querySelector("input[name=dueDate]").value;
            const priority = document.querySelector("input[name=priority]:checked").value;
            const completed = document.querySelector("input[name=completion]").value;
            const note = document.querySelector("textarea[name=note]").value; 
            const listTitle = document.querySelector("input[name=list-title]").value;
            const listItems = document.querySelector("textarea[name=list-items]").value;
            
            const success = todoController.createTodo(title, desc, date, priority, completed, note, listTitle, listItems)
            if (success){
                console.log("todo created successfully");
                cleanup.body();
                document.body.appendChild(projectPage.getPage());
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
            document.body.appendChild(projectPage.getPage());
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

    return { getForm }
})();

export { newTodoForm };