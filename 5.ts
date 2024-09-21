function logParameter(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
) {
    console.log(`PD applied to parameter index: ${parameterIndex} in method '${String(propertyKey)}'`);
}

class Example {
    greet(@logParameter message: string, @logParameter name: string) {
        console.log(`Message: ${message}, Name: ${name}`);
    }
}

const instance1 = new Example();
instance1.greet("Hello There", "Suhelali");
