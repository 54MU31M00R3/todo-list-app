import { User } from "../models/user";

const userController = (function () {
    const createUser = (username, password1, password2) => {
        //backend checking
        if (password1 !== password2){
            console.log("password mismatch");
            return false;
        } else {
            const newUser = new User(username, password1);
        }
    }
})();

export { userDB };