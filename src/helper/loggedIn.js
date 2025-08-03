let isLoggedIn = false;

const userLogger = (function () {
    const switchLog = () => {
        if (isLoggedIn) {
            isLoggedIn = false;
        } else {
            isLoggedIn = true;
        }
    }
    return { switchLog }
})();

export { userLogger, isLoggedIn };