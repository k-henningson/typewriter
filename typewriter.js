const typeWriter = function (sentence) {
  let interval = 0;
  letters = sentence.split("");

  letters.forEach((char) => {
    //console.log(`Setting timer to print ${char} in ${interval} ms`);
    setTimeout(() => {
      // print the char here
      process.stdout.write(char);
    }, (interval))
    interval += 50;
  });
  
  //console.log(`Setting timer to print new line in ${interval} ms`);
  setTimeout(() => {
    process.stdout.write('\n');
  }, (interval))
  //console.log("The event loop cannot start until the main thread is finished!")
};

const sentence = "hello there from lighthouse labs";
typeWriter(sentence);
//console.log(`Starting timer`);