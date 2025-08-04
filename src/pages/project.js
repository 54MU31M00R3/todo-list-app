import { homePage } from "./home";
import { cleanup } from "../helper/cleanup";
import { userLogger, isLoggedIn } from "../helper/loggedIn";

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

        const homeButton = document.createElement("button");
        homeButton.className = "nav-button"
        homeButton.textContent = "Home"
        nav.appendChild(homeButton);

        homeButton.addEventListener("click", () => {
            cleanup.body();
            document.body.appendChild(homePage.getPage());
        })

        const newTodoButton = document.createElement("button");
        newTodoButton.className = "nav-button"
        newTodoButton.textContent = "New Todo"
        nav.appendChild(newTodoButton);

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

        const todoCard = document.createElement("div");
        todoCard.className = "todo-card";
        cards.appendChild(todoCard);

        const upperCard = document.createElement("div");
        upperCard.className = "upper-card"
        todoCard.appendChild(upperCard);

        const todoTitle = document.createElement("div");
        todoTitle.textContent = "Shopping List";
        todoTitle.className = "todo-title";
        upperCard.appendChild(todoTitle);

        const todoDate = document.createElement("div");
        todoDate.textContent = "2023-11-23";
        todoDate.className = "todo-date";
        upperCard.appendChild(todoDate);

        const lowerCard = document.createElement("div");
        lowerCard.className = "lower-card";
        todoCard.appendChild(lowerCard);

        const viewButton = document.createElement("button");
        viewButton.className = "card-button";
        viewButton.textContent = "View";
        lowerCard.appendChild(viewButton);

        const deleteButton = document.createElement("button");
        deleteButton.className = "card-button";
        deleteButton.textContent = "Delete";
        lowerCard.appendChild(deleteButton);

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