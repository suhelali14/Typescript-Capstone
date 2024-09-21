function make_shirt_(size: string , text: string): string {
  return `The size of the Shirt is ${size} and the Message that prints on the shirt is "${text}".`;
}


// Call with default parameters
let output2 = make_shirt_("small","Inception");
console.log(output2);