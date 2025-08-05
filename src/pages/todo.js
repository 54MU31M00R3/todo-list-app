import { todoController } from "../controllers/todoController";
import { cleanup } from "../helper/cleanup";
import { projectLogger } from "../helper/projectIn";
import { todoLogger} from "../helper/todoIn";
import { dashPage } from "./dashboard";
import { projectPage } from "./project";

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

        projectButton.addEventListener("click", () => {
            cleanup.body()
            todoLogger.resetActiveTodo();
            document.body.appendChild(projectPage.getPage());
        })

        const dashboardButton = document.createElement("button");
        dashboardButton.className = "nav-button"
        dashboardButton.textContent = "Dashboard"
        nav.appendChild(dashboardButton);

        dashboardButton.addEventListener("click", () => {
            cleanup.body()
            todoLogger.resetActiveTodo();
            projectLogger.resetActiveProject();
            document.body.appendChild(dashPage.getPage());
        })

        return header;
    }

    const getButtons = () => {
        const todoButtonsContainer = document.createElement("div");
        todoButtonsContainer.id = "todo-buttons";
        
        const completeButton = document.createElement("button");
        completeButton.textContent = "Completion Status"
        todoButtonsContainer.appendChild(completeButton);

        completeButton.addEventListener("click", () => {
            todoController.chgCompletionStatus();
            cleanup.body();
            document.body.appendChild(getPage());
        })

        const exitButton = document.createElement("button");
        exitButton.textContent = "Exit"
        todoButtonsContainer.appendChild(exitButton);

        exitButton.addEventListener("click", () => {
            cleanup.body();
            todoLogger.resetActiveTodo();
            document.body.appendChild(projectPage.getPage());
        })

        return todoButtonsContainer;
    }
    
    const getList = () => {
        const todo = todoController.getTodo()[0].list;
        console.log(todo);

        const todoList = document.createElement("div");
        todoList.id = "todo-list";

        const todoListTitle = document.createElement("div");
        todoListTitle.id = "list-title";
        todoList.textContent = todo.title;
        todoList.appendChild(todoListTitle);

        const listContent = document.createElement("ul");

        todo.items.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            listContent.appendChild(listItem);
        });

        todoList.appendChild(listContent);

        return todoList;
    }

    const getTodoContent = () => {
        const todo = todoController.getTodo()[0];
        console.log(todo);

        const content = document.createElement("div");
        content.id = "todo-content";

        const todoDate = document.createElement("div");
        todoDate.id = "todo-date";
        todoDate.textContent = todo.dueDate;
        content.appendChild(todoDate);

        const todoTitle = document.createElement("div");
        todoTitle.id = "todo-title";
        todoTitle.textContent = todo.title;
        content.appendChild(todoTitle);

        const todoDesc = document.createElement("div");
        todoDesc.id = "todo-desc";
        todoDesc.textContent = todo.description;
        content.appendChild(todoDesc);

        const todoPriority = document.createElement("div");
        todoPriority.id = "todo-priority";
        todoPriority.textContent = `Priority: ${todo.priority}`;
        content.appendChild(todoPriority);

        const todoComplete = document.createElement("div");
        todoComplete.id = "todo-complete";
 
        let compStatus;
        if (todo.completed) {
            compStatus = "Complete";
        } else {
            compStatus = "Incomplete"
        }
 
        todoComplete.textContent = `Completion Status: ${compStatus}`
        content.appendChild(todoComplete);

        const todoNotes = document.createElement("div");
        todoNotes.id = "todo-notes";
        todoNotes.textContent = `Notes: ${todo.note}`
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