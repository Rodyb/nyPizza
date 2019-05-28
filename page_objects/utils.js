function logFunc(name, args) {
    const greenColor = '\x1b[32m';
    const terminalColor = '\x1b[0m';
    return () => console.log(greenColor, '√', terminalColor, name, greenColor, args.join(', '), terminalColor);
}

function logWrapper(obj) {
    Object.keys(obj).forEach((k) => {
        var prop = obj[k];

        if (typeof prop === "function" && !prop.ignoreLogging) {
            var originalFunc = obj[k];
            obj[k] = function () {
                var args = Array.prototype.slice.call(arguments);
                var args = [].slice.call(arguments);
                const prettyFuncName = k.split(/(?=[A-Z])/).join(" ").toLowerCase();
                this.api.perform(logFunc(prettyFuncName, args));
                return originalFunc.apply(this, args);
            };
        }
    });
    return obj;
}

module.exports = {
    logWrapper
};