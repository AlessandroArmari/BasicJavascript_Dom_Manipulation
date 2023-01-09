//I declare my arrow function
var sayHelloFunction = () => {
  console.log("Say Hello!");
};

//Here I assign the function to the button when cliccked!
var btn = document.getElementById("helloBtn");
btn.addEventListener("click", sayHelloFunction);

//+++IMPORTANT+++
//THIS IS THE SAME
//btn.onclick = sayHelloFunction;

//Here I am taking all of the buttons
//result--->A 3-item HTML Collection (similar to an array!)
var buttons = document.getElementsByTagName("button");
console.log(buttons); //--->the collection

for (i = 0; i < buttons.length; i++) {
  console.log(buttons[i]); //--->print all of the array elements
}

//Set the change color button!
var colorButton = document.getElementById("colorButton");
var changeColor = () => {
  console.log("I want to change the square color!");
  colorButton.style.backgroundColor = "red";
  colorButton.style.height = "35px";

  console.log(colorButton); //---> printing Button on console!

  //colorButton.style.STUFF--->i am speaking CSS language here!!!
};
colorButton.addEventListener("click", changeColor);

//Print on console the name I typed in container after clicking the "Log name value" butoon

var printNameOnConsoleWhenOnClick = () => {
  var in1 = document.getElementById("in1");
  console.log(in1.value);
};

//+++IMPORTANT+++
//THERE IS ANOTHER WAY TO ACTIVATE AN EVENT--->check HTML--->
//--->you'll find <button onclick="handleNameInput()">
//this means once we click the button, the method will run

var printNameOnConsoleWhenType = (value) => {
  console.log(value);
};

//arrow functiom with paramthere inside ();
