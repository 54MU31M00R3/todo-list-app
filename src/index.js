import './styles.css';

import { homePage } from './pages/home.js';
import { signupForm } from './forms/signupForm.js';
import { loginForm } from './forms/loginForm.js';
import { dashPage } from './pages/dashboard.js';

// document.body.appendChild(homePage.getPage())
// document.body.appendChild(signupForm.getForm())
// document.body.appendChild(loginForm.getForm())

document.body.appendChild(dashPage.getPage())
