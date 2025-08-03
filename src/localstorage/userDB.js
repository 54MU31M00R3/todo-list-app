const userDB = (function () {
    localStorage.setItem("users", "[]")
    const insertUser = (newUser) => {
        let users = JSON.parse(localStorage.getItem("users"));
        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
        console.log(users);

        return true;
    }
    return { insertUser };
})();

export { userDB };