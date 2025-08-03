const userDB = (function () {
    localStorage.setItem("users", "[]")
    const insertUser = (newUser) => {
        let users = JSON.parse(localStorage.getItem("users"));
        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
        console.log(users);

        return true;
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

        if (user) {
            return true;
        } else {
            return false;
        }

    }
    return { insertUser, existingUser };
})();

export { userDB };