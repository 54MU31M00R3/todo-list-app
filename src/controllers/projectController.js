import { Project } from "../models/project";
import { projectDB } from "../localstorage/projectDB";

const projectController = (function () {
    const createProject = (name, date) => {
        return projectDB.insertProject(new Project(name, date))
    }
    return { createProject };
})();

export { projectController };