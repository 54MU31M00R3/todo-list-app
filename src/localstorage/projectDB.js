import { userDB } from "../localstorage/userDB";

const projectDB = (function () {
    localStorage.setItem("projects", `[${JSON.stringify({
        title: "Cottage Trip",
        date: "2023-11-23",
        todos: ["Buy Groceries"]
    })}]`)
    const insertProject = (newProject, activeUser) => {
        try {
            let projects = JSON.parse(localStorage.getItem("projects"));
            projects.push(newProject);

            console.log(projects);
            localStorage.setItem("projects", JSON.stringify(projects));

            const users = userDB.allUsers();
            users.filter((user) => {
                if (activeUser === user.username) {
                    user.projects.push(newProject.title);
                }
            })

            userDB.updateUsers(users);

            return true;
        } catch {
            return false;
        }
    }
    const readUserProjects = (activeUser) => {
        const projects = JSON.parse(localStorage.getItem("projects"));
        
        const users = JSON.parse(localStorage.getItem("users"));

        const user = users.filter((user) => {
            if (user.username === activeUser){
                return true;
            } else {
                return false;
            }
        });

        let userProjects = [];
        
        projects.forEach((project) => {
            if (user[0].projects.includes(project.title)){
                userProjects.push(project);
            }
        })

        return userProjects;
    }
    const allProjects = () => {
        return JSON.parse(localStorage.getItem("projects"));
    }
    const updateProjects = (projects) => {
        localStorage.setItem("projects", JSON.stringify(projects));
        console.log(projects);
    }
    return { insertProject, readUserProjects, allProjects, updateProjects };
})();

export { projectDB };