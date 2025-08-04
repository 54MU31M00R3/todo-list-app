const userDB = (function () {
    localStorage.setItem("users", `[${JSON.stringify({
        username: "sam",
        password: "test",
        projects: ["Cottage Trip"]
    })}]`)
    const insertUser = (newUser) => {
        try {
            let users = JSON.parse(localStorage.getItem("users"));
            users.push(newUser);

            console.log(users);
            localStorage.setItem("users", JSON.stringify(users));

            return true;
        } catch {
            return false;
        }
    }
    const existingUser = (username, password) => {
        let users = JSON.parse(localStorage.getItem("users"));

        const user = users.filter((user) => {
            if (user.username === username && user.password === password){
                return true;
            } else {
                return false;
            }
        });

        if (user.length === 1) {
            return true;
        } else {
            return false;
        }

    }
    const allUsers = () => {
        return JSON.parse(localStorage.getItem("users"));
    }
    const updateUsers = (users) => {
        localStorage.setItem("users", JSON.stringify(users));
        console.log(users);
    }
    return { insertUser, existingUser, allUsers, updateUsers };
})();

export { userDB };