var make_shirt = function (size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is: ".concat(size, " and the message on the shirt is: ").concat(message));
};
make_shirt(); // large shirt with defoalt message !
make_shirt("Medium"); // medium shirt with default message !
make_shirt("Small", "TypeScript is more awesome than JS!"); // other sized with other message !
