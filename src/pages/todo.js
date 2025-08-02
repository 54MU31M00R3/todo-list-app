const todoPage = (function () {
    const getHeader = () => {
        const header = document.createElement("div");
        header.id = "header";

        const title = document.createElement("div");
        title.textContent = "Todo";
        title.id = "app-title";
        header.appendChild(title);

        const nav = document.createElement("div");
        nav.id = "nav-links";
        header.appendChild(nav);

        const projectButton = document.createElement("button");
        projectButton.className = "nav-button"
        projectButton.textContent = "Project"
        nav.appendChild(projectButton);

        const dashboardButton = document.createElement("button");
        dashboardButton.className = "nav-button"
        dashboardButton.textContent = "New Todo"
        nav.appendChild(dashboardButton);

        return header;
    }

    const getButtons = () => {
        const todoButtonsContainer = document.createElement("div");
        todoButtonsContainer.id = "todo-buttons";
        
        const completeButton = document.createElement("button");
        completeButton.textContent = "Project"
        todoButtonsContainer.appendChild(completeButton);

        const editButton = document.createElement("button");
        editButton.textContent = "Dashboard"
        todoButtonsContainer.appendChild(editButton);

        return todoButtonsContainer;
    }
    
    const getList = () => {
        const todoList = document.createElement("div");
        todoList.id = "todo-list";

        const todoListTitle = document.createElement("div");
        todoListTitle.id = "list-title";
        todoList.textContent = "Shopping List"
        todoList.appendChild(todoListTitle);

        const listContent = document.createElement("ul");

        const listItem = document.createElement("li");
        listItem.textContent = "Cabbage"
        listContent.appendChild(listItem);

        todoList.appendChild(listContent);

        return todoList;
    }

    const getTodoContent = () => {
        const content = document.createElement("div");
        content.id = "todo-content";

        const todoDate = document.createElement("div");
        todoDate.id = "todo-date";
        todoDate.textContent = "2025-08-01";
        content.appendChild(todoDate);

        const todoTitle = document.createElement("div");
        todoTitle.id = "todo-title";
        todoTitle.textContent = "Buy Groceries"
        content.appendChild(todoTitle);

        const todoDesc = document.createElement("div");
        todoDesc.id = "todo-desc";
        todoDesc.textContent = `Purchase vegetables, 
                fruits, and dairy products from the
                supermarket.`
        content.appendChild(todoDesc);

        const todoPriority = document.createElement("div");
        todoPriority.id = "todo-priority";
        todoPriority.textContent = "Priority: High"
        content.appendChild(todoPriority);

        const todoComplete = document.createElement("div");
        todoComplete.id = "todo-complete";
        todoComplete.textContent = "Completion Status: Incomplete"
        content.appendChild(todoComplete);

        const todoNotes = document.createElement("div");
        todoNotes.id = "todo-notes";
        todoNotes.textContent = "Notes: Remember to check for sales on seasonal produce."
        content.appendChild(todoNotes);

        const todoList = getList();
        content.appendChild(todoList);

        return content;
    }
    const getTodo = () => {
        const cardContainer = document.createElement("div");
        cardContainer.id = "todo-container";

        const card = document.createElement("div");
        card.id = "todo-card";
        cardContainer.appendChild(card);

        const todoContent = getTodoContent();
        card.appendChild(todoContent);

        const todoButtons = getButtons();
        card.appendChild(todoButtons);

        return cardContainer;
    }
    const getPage = () => {
        const page = document.createElement("div");

        const header = getHeader();
        page.appendChild(header);

        const todo = getTodo();
        page.appendChild(todo);

        return page;
    }
    return { getPage };
})();

export { todoPage };