const projects = [
    { name: "Online Classroom System", date: "2025-02-15" },
    { name: "AI Development Research", date: "2025-03-12" },
    { name: "PASS Program Gantt Chart", date: "2025-01-20" },
    { name: "Cyberpunk Merch Website", date: "2025-07-19" },
    { name: "Gelato Pop-Up Marketing", date: "2025-07-23" }
  ];

import { cleanup } from "../helper/cleanup";
import { homePage } from "./home";
import { userLogger, isLoggedIn } from "../helper/loggedIn";

import { newProjectForm } from "../forms/newProjectForm";

const dashPage = (function () {
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
        });

        const newProjectButton = document.createElement("button");
        newProjectButton.className = "nav-button"
        newProjectButton.textContent = "New Project"
        nav.appendChild(newProjectButton);

        newProjectButton.addEventListener("click", () => {
            cleanup.body();
            document.body.appendChild(newProjectForm.getForm());
        });

        const logoutButton = document.createElement("button");
        logoutButton.className = "nav-button"
        logoutButton.textContent = "Log Out"
        nav.appendChild(logoutButton);

        logoutButton.addEventListener("click", () => {
            cleanup.body();
            userLogger.switchLog();
            document.body.appendChild(homePage.getPage());
        });

        return header;
    }
    const getCards = () => {
        const cards = document.createElement("div");
        cards.id = "cards";

        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        cards.appendChild(projectCard);

        const upperCard = document.createElement("div");
        upperCard.className = "upper-card"
        projectCard.appendChild(upperCard);

        const projectTitle = document.createElement("div");
        projectTitle.textContent = "Cottage Trip";
        projectTitle.className = "project-title";
        upperCard.appendChild(projectTitle);

        const projectDate = document.createElement("div");
        projectDate.textContent = "2023-11-23";
        projectDate.className = "project-date";
        upperCard.appendChild(projectDate);

        const lowerCard = document.createElement("div");
        lowerCard.className = "lower-card";
        projectCard.appendChild(lowerCard);

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

export { dashPage };