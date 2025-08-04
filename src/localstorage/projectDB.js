const projectDB = (function () {
    localStorage.setItem("projects", `[${JSON.stringify({
        title: "Cottage Trip",
        date: "2023-11-23",
        todos: []
    })}]`)
    const insertProject = (newProject) => {
        try {
            let projects = JSON.parse(localStorage.getItem("projects"));
            projects.push(newProject);

            console.log(projects);
            localStorage.setItem("projects", JSON.stringify(projects));

            return true;
        } catch {
            return false;
        }
    }
    return { insertProject };
})();

export { projectDB };