import { dashPage } from '../pages/dashboard';
import { cleanup } from "../helper/cleanup";
import { userLogger} from "../helper/loggedIn";
import { todoController } from "../controllers/todoController";
import { newTodoForm } from '../forms/newTodoForm';
import { projectLogger } from '../helper/projectIn';
import { todoLogger } from '../helper/todoIn';
import { todoPage } from './todo';

const projectPage = (function () {
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

        const dashButton = document.createElement("button");
        dashButton.className = "nav-button"
        dashButton.textContent = "Dashboard"
        nav.appendChild(dashButton);

        dashButton.addEventListener("click", () => {
            cleanup.body();
            projectLogger.resetActiveProject;
            document.body.appendChild(dashPage.getPage());
        })

        const newTodoButton = document.createElement("button");
        newTodoButton.className = "nav-button"
        newTodoButton.textContent = "New Todo"
        nav.appendChild(newTodoButton);

        newTodoButton.addEventListener("click", () => {
            cleanup.body();
            document.body.appendChild(newTodoForm.getForm());
        })

        const logoutButton = document.createElement("button");
        logoutButton.className = "nav-button"
        logoutButton.textContent = "Log Out"
        nav.appendChild(logoutButton);

        logoutButton.addEventListener("click", () => {
            cleanup.body();
            userLogger.switchLog();
            document.body.appendChild(homePage.getPage());
        })

        return header;
    }
    const getCards = () => {
        const cards = document.createElement("div");
        cards.id = "cards";

        const projectTodos = todoController.getTodos();

        console.log(projectTodos)

        if (projectTodos.length >= 1){
            projectTodos.forEach((todo) => {
                const todoCard = document.createElement("div");
                todoCard.className = "todo-card";
                cards.appendChild(todoCard);
    
                const upperCard = document.createElement("div");
                upperCard.className = "upper-card"
                todoCard.appendChild(upperCard);
    
                const todoTitle = document.createElement("div");
                todoTitle.textContent = todo.title;
                todoTitle.className = "todo-title";
                upperCard.appendChild(todoTitle);
    
                const todoDate = document.createElement("div");
                todoDate.textContent = todo.dueDate;
                todoDate.className = "todo-date";
                upperCard.appendChild(todoDate);
    
                const lowerCard = document.createElement("div");
                lowerCard.className = "lower-card";
                todoCard.appendChild(lowerCard);
    
                const viewButton = document.createElement("button");
                viewButton.className = "card-button";
                viewButton.textContent = "View";
                lowerCard.appendChild(viewButton);

                viewButton.addEventListener("click", () => {
                    cleanup.body();
                    todoLogger.setActiveTodo(todo.title);
                    document.body.appendChild(todoPage.getPage());
                })
    
                const deleteButton = document.createElement("button");
                deleteButton.className = "card-button";
                deleteButton.textContent = "Delete";
                lowerCard.appendChild(deleteButton);
            })
        }

        return cards;
    }
    const getPage = () => {
        const page = document.createElement("div");
        
        const header = getHeader();
        page.appendChild(header);

        const cards = getCards();
        page.appendChild(cards);

        return page;
    }
    return { getPage };
})();

export { projectPage }