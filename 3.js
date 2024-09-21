function make_shirt_(size, text) {
    return "The size of the Shirt is ".concat(size, " and the Message that prints on the shirt is \"").concat(text, "\".");
}
// Call with default parameters
var output2 = make_shirt_("small", "Inception");
console.log(output2);
