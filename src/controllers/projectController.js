import { Project } from "../models/project";
import { projectDB } from "../localstorage/projectDB";
import { activeUser } from "../helper/loggedIn";


const projectController = (function () {
    const createProject = (name, date) => {
        return projectDB.insertProject(new Project(name, date), activeUser)
    }
    const getProjects = () => {

    }
    return { createProject, getProjects };
})();

export { projectController };