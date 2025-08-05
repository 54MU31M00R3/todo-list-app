import { activeTodo } from "../helper/todoIn";
import { projectDB } from "./projectDB";

const todoDB = (function () {
    localStorage.setItem("todos", `[${JSON.stringify({
        title: "Buy Groceries",
        description: `Purchase vegetables, 
                fruits, and dairy products from the
                supermarket.`,
        dueDate: "2025-08-01",
        priority: "High",
        completed: false,
        note: `Remember to check for sales on seasonal produce.`,
        list: {
            title: "Shopping List",
            items: ["Cabbage", "Lettuce"]
        }
    })}]`)
    const insertTodo = (newTodo, activeProject) => {
        try {
            let todos = JSON.parse(localStorage.getItem("todos"));
            todos.push(newTodo);

            console.log(todos);
            localStorage.setItem("todos", JSON.stringify(todos));

            const projects = projectDB.allProjects();
            projects.filter((project) => {
                if (activeProject === project.title){
                    project.todos.push(newTodo.title);
                    console.log(project.todos)
                }
            })

            projectDB.updateProjects(projects);

            return true
        } catch {
            return false
        }
    }
    const readProjectTodos = (activeProject) => {
        const todos = JSON.parse(localStorage.getItem("todos"));

        const projects = JSON.parse(localStorage.getItem("projects"));

        const project = projects.filter((project) => {
            console.log(project)
            if (project.title === activeProject){
                return true;
            } else {
                return false;
            }
        });

        let projectTodos = []

        todos.forEach((todo) => {
            if (project[0].todos.includes(todo.title)){
                projectTodos.push(todo);
            }
        });

        return projectTodos;
    }
    const readTodo = (activeTodo) => {
        const todos = JSON.parse(localStorage.getItem("todos"));

        const todo = todos.filter((todo) => {
            if (todo.title === activeTodo){
                return true;
            } else {
                return false;
            }
        })

        return todo;
    }
    const updateCompletionStatus = () => {
        const todos = JSON.parse(localStorage.getItem("todos"));

        todos.filter((todo) => {
            if (todo.title === activeTodo){
                if (todo.completed === true){
                    todo.completed = false;
                } else {
                    todo.completed = true;
                }
            }
        })

        updateTodos(todos);
    }
    const updateTodos = (todos) => {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log(todos);
    }

    return { insertTodo, readProjectTodos, readTodo, updateCompletionStatus };
})();

export { todoDB };