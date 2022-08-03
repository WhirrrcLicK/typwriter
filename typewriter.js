const sentence = "hello there from lighthouse labs";
let count = 0

function typewriter(string) {
  for (let x = 0; x < string.length; x++) {
    setTimeout(() => {
      process.stdout.write(string[x])
  }, count)
  count += 50
}
}

typewriter(sentence)