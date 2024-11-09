const network = new brain.NeuralNetwork();

// Train the Network with 4 input colors
network.train([
  {input:[1, 0, 0], output:{red:1}},
  {input:[0.86, 0.039, 0.039], output:{red:1}},
  {input:[1, 1, 0], output:{yellow:1}},
  {input:[0.78, 0.776, 0.039], output:{yellow:1}},
]);

// What is the expected output of [200, 200, 12]?
let result = network.run([0.784, 0.784, 0.047]);

// Display the probability for "red" and "yellow"
document.getElementById("demo").innerHTML =
"red: " + result["red"] + "<br>" + "yellow: " + result["yellow"];
