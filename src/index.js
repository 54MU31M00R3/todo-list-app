import './styles.css';

import { homePage } from './pages/home.js';
import { signupForm } from './forms/signupForm.js';
import { loginForm } from './forms/loginForm.js';
import { dashPage } from './pages/dashboard.js';
import { projectPage } from './pages/project.js';
import { todoPage } from './pages/todo.js';

// document.body.appendChild(homePage.getPage())
// document.body.appendChild(signupForm.getForm())
// document.body.appendChild(loginForm.getForm())
// document.body.appendChild(projectPage.getPage())

console.log(todoPage.getPage())

document.body.appendChild(todoPage.getPage())