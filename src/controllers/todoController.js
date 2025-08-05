import { todoDB } from "../localstorage/todoDB";
import { Todo } from "../models/todo";
import { activeProject } from "../helper/projectIn";
import { activeTodo } from "../helper/todoIn";

const todoController = (function () {
    const createTodo = (title, description, dueDate, priority, completed, note, listTitle, listItems) => {
        const list = {
            title: listTitle,
            items: listItems.replace(/\s/gm, "").split(",")
        }
        
        let isCompleted;
        if (completed === "complete") {
            isCompleted = true;
        } else {
            isCompleted = false;
        }

        return todoDB.insertTodo(new Todo(title, description, dueDate, priority, isCompleted, note, list), activeProject);
    }
    const getTodos = () => {

        return todoDB.readProjectTodos(activeProject);
    }
    const getTodo = () => {

        return todoDB.readTodo(activeTodo);
    }
    const chgCompletionStatus = () => {
    
        todoDB.updateCompletionStatus(activeTodo);
    }
    return { createTodo, getTodos, getTodo, chgCompletionStatus };
})();

export { todoController };