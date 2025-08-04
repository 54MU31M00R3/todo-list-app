let isLoggedIn = false;
let activeUser;

const userLogger = (function () {
    const switchLog = () => {
        if (isLoggedIn) {
            isLoggedIn = false;
        } else {
            isLoggedIn = true;
        }
    }
    const setActiveUser = (user) => {
        activeUser = user;
    }
    return { switchLog, setActiveUser }
})();

export { userLogger, isLoggedIn, activeUser };