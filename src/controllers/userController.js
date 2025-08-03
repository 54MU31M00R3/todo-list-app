import { User } from "../models/user";
import { userDB } from "../localstorage/userDB";

const userController = (function () {
    const createUser = (username, password1, password2) => {
        //backend checking
        if (password1 !== password2){
            console.log("password mismatch");
            return false;
        } else {
            return userDB.insertUser(new User(username, password1));
        }
    }
    return { createUser };
})();

export { userController };