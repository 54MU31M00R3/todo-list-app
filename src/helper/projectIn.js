let activeProject;

const projectLogger = (function () {
    const setActiveProject = (project) => {
        activeProject = project;
    }
    const resetActiveProject = () => {
        activeProject = undefined;
    }
    return { setActiveProject, resetActiveProject };
})();

export { projectLogger, activeProject };
