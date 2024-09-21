
const make_shirt = (
    size: string = "Large",
    message: string = "I love TypeScript"
  ): void => {
    console.log(
      `The shirt size is: ${size} and the message on the shirt is: ${message}`
    );
  };
  
  make_shirt(); // large shirt with defoalt message !
  make_shirt("Medium"); // medium shirt with default message !
  make_shirt("Small", "TypeScript is more awesome than JS!"); // other sized with other message !
