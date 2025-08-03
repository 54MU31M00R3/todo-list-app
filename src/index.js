import './styles.css';

import { homePage } from './pages/home.js';
import { signupForm } from './forms/signupForm.js';
import { loginForm } from './forms/loginForm.js';
import { dashPage } from './pages/dashboard.js';
import { projectPage } from './pages/project.js';
import { todoPage } from './pages/todo.js';
import { newProjectForm } from './forms/newProjectForm.js';
import { newTodoForm } from './forms/newTodoForm.js';

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

if (storageAvailable("localStorage")) {
    document.body.appendChild(homePage.getPage());
} else {
// Too bad, no localStorage for us
}

// document.body.appendChild(signupForm.getForm())
// document.body.appendChild(loginForm.getForm())
// document.body.appendChild(projectPage.getPage())
// document.body.appendChild(todoPage.getPage())
// document.body.appendChild(newProjectForm.getForm())
// document.body.appendChild(newTodoForm.getForm())