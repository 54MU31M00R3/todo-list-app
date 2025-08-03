const cleanup = (function () {
    const body = () => {
        document.body.innerHTML = "";
    }
    return { body };
})();

export { cleanup }