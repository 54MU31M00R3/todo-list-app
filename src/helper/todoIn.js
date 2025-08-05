let activeTodo;

const todoLogger = (function () {
    const setActiveTodo = (todo) => {
        activeTodo = todo;
    }
    const resetActiveTodo = () => {
        activeTodo = undefined;
    }
    return { setActiveTodo, resetActiveTodo };
})();

export { todoLogger, activeTodo };