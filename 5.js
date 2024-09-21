var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logParameter(target, propertyKey, parameterIndex) {
    console.log("PD applied to parameter index: ".concat(parameterIndex, " in method '").concat(String(propertyKey), "'"));
}
var Example = /** @class */ (function () {
    function Example() {
    }
    Example.prototype.greet = function (message, name) {
        console.log("Message: ".concat(message, ", Name: ").concat(name));
    };
    __decorate([
        __param(0, logParameter),
        __param(1, logParameter)
    ], Example.prototype, "greet", null);
    return Example;
}());
var instance1 = new Example();
instance1.greet("Hello There", "Suhelali");
